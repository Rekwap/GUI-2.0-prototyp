// Generic renderer for screens exported 1:1 from the Figma handover.
//
// Each screen is a JSON tree dumped from Figma (positions, fills, strokes,
// radii, drop shadows, text runs). Anything that is not plain box/text
// (vectors, icons, gradients, masks) is an original SVG export referenced by
// key and rendered as <img> at its native size — never redrawn.
//
// Dynamic content is layered on by node id:
//   text    – replace the characters of a text node
//   hide    – hide nodes
//   onClick – make a node clickable
//   replace – render a custom element in place of a node (same box)
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { FONT_STEP, OVERFLOWS, SHRUNK, translate, useLang } from '../i18n';
import '../../styles/device-fonts.css';
import { ICONS } from './icons';

export type FNode = {
  /** Figma node id (menu dumps keep it only on text nodes). */
  i?: string;
  /** Text key (Figma string variable bound to the characters). */
  kk?: string;
  t: 'F' | 'G' | 'T' | 'S';
  x: number;
  y: number;
  w: number;
  h: number;
  n?: string;
  op?: number;
  // box
  f?: string;
  st?: string;
  sw?: number;
  sa?: 'I' | 'C' | 'O';
  r?: number | [number, number, number, number];
  fx?: [number, number, number, number, string][];
  clip?: 1;
  c?: FNode[];
  // svg
  k?: string;
  // text: runs [chars, family, style, size, color, letterSpacing?, lineHeight?, textCase?, decoration?]
  s?: (string | number | null)[][];
  a?: string;
};

export type ScreenOverrides = {
  text?: Record<string, string>;
  hide?: string[];
  onClick?: Record<string, () => void>;
  replace?: Record<string, ReactNode>;
  /** Override the solid fill of a box node. */
  fill?: Record<string, string>;
};

const WEIGHT: Record<string, number> = {
  Thin: 100, ExtraLight: 200, Light: 300, Regular: 400, Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900,
};

function fontOf(family: string, style: string): CSSProperties {
  // Figma "Noto Sans / Display Medium" → Noto Sans Display 500.
  let fam = family;
  let st = style;
  if (family === 'Noto Sans' && st.startsWith('Display')) {
    fam = 'Noto Sans Display';
    st = st.replace(/^Display\s*/, '') || 'Regular';
  }
  const italic = /Italic/.test(st);
  const w = WEIGHT[st.replace(/\s*Italic/, '').trim()] ?? 400;
  return { fontFamily: `'${fam}', sans-serif`, fontWeight: w, fontStyle: italic ? 'italic' : 'normal', fontStretch: '100%' };
}

function boxShadow(n: FNode): string | undefined {
  const parts: string[] = [];
  if (n.st && n.sw) {
    const w = n.sw;
    // 'X' = gradient stroke (design system: #D3D4D7 → #AFB0B3); use its midpoint.
    const stroke = n.st === 'X' ? '#c1c2c5' : n.st;
    n = { ...n, st: stroke };
    if (n.sa === 'I') parts.push(`inset 0 0 0 ${w}px ${n.st}`);
    else if (n.sa === 'O') parts.push(`0 0 0 ${w}px ${n.st}`);
    else parts.push(`inset 0 0 0 ${w / 2}px ${n.st}`, `0 0 0 ${w / 2}px ${n.st}`);
  }
  for (const [x, y, blur, spread, color] of n.fx ?? []) parts.push(`${x}px ${y}px ${blur}px ${spread}px ${color}`);
  return parts.length ? parts.join(', ') : undefined;
}

function radius(r: FNode['r']): string | undefined {
  if (r === undefined) return undefined;
  return Array.isArray(r) ? r.map(v => `${v}px`).join(' ') : `${r}px`;
}

function TextNode({ n, override, parentW }: { n: FNode; override?: string; parentW: number }) {
  const [h, v, auto] = (n.a ?? 'LTN').split('');
  const lang = useLang();
  const runs = n.s ?? [];
  // Overrides (dynamic values) win; otherwise a Figma text key is translated into the device language.
  const translated = override === undefined && n.kk && lang !== 'en' && runs.length
    ? translate(lang, n.kk, runs.map(r => r[0]).join(''))
    : undefined;
  const base = override ?? translated;
  // Fit check for translated texts, incl. dynamic overrides built from a text key (non-English).
  const checked = translated ?? (lang !== 'en' && n.kk ? override : undefined);
  const [step, setStep] = useState(0);
  const pRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => setStep(0), [base]);
  // Re-check once the device font has loaded (metrics change after the fallback font).
  const [, setTick] = useState(0);
  useEffect(() => {
    if (checked === undefined) return;
    let alive = true;
    document.fonts?.ready.then(() => alive && setTick(t => t + 1));
    const ro = new ResizeObserver(() => setTick(t => t + 1));
    if (pRef.current) ro.observe(pRef.current);
    return () => { alive = false; ro.disconnect(); };
  }, [checked]);
  // Too long for the Figma box → one font size smaller; still too long → listed for review.
  useLayoutEffect(() => {
    const el = pRef.current;
    if (!el || checked === undefined || auto === 'W') return;
    const over = el.scrollHeight > n.h + 2 || el.scrollWidth > n.w + 1;
    const key = `${n.kk} (${lang})`;
    if (over && step === 0 && FONT_STEP[runs[0][3] as number]) { setStep(1); SHRUNK.set(key, checked); }
    else if (over) OVERFLOWS.set(key, checked);
    else OVERFLOWS.delete(key);
  });
  const fit = (size: number) => (step && FONT_STEP[size] ? FONT_STEP[size] : size);
  const content = base !== undefined && runs.length ? [[base, ...runs[0].slice(1)]] : runs;
  // Auto-width text grows from its anchor (right-aligned grows to the left, centred both ways).
  const box: CSSProperties =
    auto !== 'W'
      ? { left: n.x, width: n.w }
      : h === 'R'
        ? { right: parentW - (n.x + n.w), width: 'max-content' }
        : h === 'C'
          ? { left: n.x + n.w / 2, width: 'max-content', transform: 'translateX(-50%)' }
          : { left: n.x, width: 'max-content' };
  return (
    <div
      style={{
        position: 'absolute', top: n.y, height: n.h, ...box,
        display: 'flex', flexDirection: 'column',
        justifyContent: v === 'C' ? 'center' : v === 'B' ? 'flex-end' : 'flex-start',
        opacity: n.op,
      }}
    >
      <p
        style={{
          margin: 0,
          textAlign: h === 'C' ? 'center' : h === 'R' ? 'right' : h === 'J' ? 'justify' : 'left',
          whiteSpace: auto === 'W' ? 'pre' : 'pre-wrap',
          overflowWrap: 'break-word',
          lineHeight: 'normal',
          // Strut = first run's font, so the inherited page font size cannot widen line boxes.
          ...(content[0] ? { ...fontOf(content[0][1] as string, content[0][2] as string), fontSize: fit(content[0][3] as number) } : {}),
        }}
        ref={pRef}
      >
        {content.map((run, idx) => {
          const [chars, family, style, size, color, ls, lh, tcase, deco] = run as [string, string, string, number, string | null, string | number, string | number, string, string];
          const css: CSSProperties = {
            ...fontOf(family, style),
            fontSize: fit(size),
            color: color ?? undefined,
            letterSpacing: ls ? ls : 0,
            lineHeight: lh ? (typeof lh === 'number' ? `${lh}px` : lh) : 'normal',
            textTransform: tcase === 'UPPER' ? 'uppercase' : tcase === 'LOWER' ? 'lowercase' : tcase === 'TITLE' ? 'capitalize' : undefined,
            textDecoration: deco === 'UNDERLINE' ? 'underline' : deco === 'STRIKETHROUGH' ? 'line-through' : undefined,
          };
          return <span key={idx} style={css}>{chars}</span>;
        })}
      </p>
    </div>
  );
}

function Node({ n, o, parentW = 272 }: { n: FNode; o: ScreenOverrides; parentW?: number }) {
  const id = n.i ?? '';
  if (o.hide?.includes(id)) return null;
  const click = o.onClick?.[id];
  const clickStyle: CSSProperties = click ? { cursor: 'pointer' } : {};
  if (o.replace && id in o.replace) {
    return <div style={{ position: 'absolute', left: n.x, top: n.y, width: n.w, height: n.h }} onClick={click}>{o.replace[id]}</div>;
  }
  if (n.t === 'T') {
    const t = <TextNode n={n} override={o.text?.[id]} parentW={parentW} />;
    return click ? <div onClick={click} style={clickStyle}>{t}</div> : t;
  }
  if (n.t === 'S') {
    const icon = n.k ? ICONS[n.k] : undefined;
    if (!icon) return null;
    return (
      <img
        src={icon.src}
        alt=""
        draggable={false}
        onClick={click}
        style={{ position: 'absolute', left: n.x, top: n.y, width: icon.w, height: icon.h, maxWidth: 'none', display: 'block', ...clickStyle }}
      />
    );
  }
  return (
    <div
      onClick={click}
      style={{
        position: 'absolute', left: n.x, top: n.y, width: n.w, height: n.h,
        background: o.fill?.[id] ?? n.f, borderRadius: radius(n.r), boxShadow: boxShadow(n),
        overflow: n.clip ? 'hidden' : undefined, opacity: n.op, ...clickStyle,
      }}
    >
      {n.c?.map((c, idx) => <Node key={c.i ?? idx} n={c} o={o} parentW={n.w} />)}
    </div>
  );
}

/** Find a node by id inside a screen tree. */
export function findNode(root: FNode, id: string): FNode | undefined {
  if (root.i === id) return root;
  for (const c of root.c ?? []) {
    const hit = findNode(c, id);
    if (hit) return hit;
  }
  return undefined;
}

/** Render a single subtree (positioned by its own x/y relative to its parent). */
export function FigmaNode({ node, ...o }: { node: FNode } & ScreenOverrides) {
  return <Node n={node} o={o} />;
}

/** Transparent click area on top of a screen (for parts of a single SVG export). */
export function HitArea({ x, y, w, h, onClick, label }: { x: number; y: number; w: number; h: number; onClick?: () => void; label?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      style={{ position: 'absolute', left: x, top: y, width: w, height: h, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', outline: 'none', WebkitTapHighlightColor: 'transparent' }}
    />
  );
}

export function FigmaScreen({ data, children, ...o }: { data: FNode; children?: ReactNode } & ScreenOverrides) {
  return (
    <div style={{ position: 'relative', width: data.w, height: data.h, overflow: 'hidden' }} data-name={data.n}>
      <Node n={{ ...data, x: 0, y: 0 }} o={o} />
      {children}
    </div>
  );
}
