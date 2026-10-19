// Low-level building blocks for the 272×480 device screen.
// All coordinates are the exact pixel values from the Figma handover
// (GUI 2.1 Scale Up). Icons are the original SVG exports, rendered as <img>
// at their native size so they are never redrawn or distorted.
import { useState, type CSSProperties, type ReactNode } from 'react';
import '../../styles/device-fonts.css';

export const FONT_FAMILY = "'Noto Sans Display', sans-serif";

export const COLORS = {
  text: '#191c24',
  textSecondary: '#656d89',
  textSecondRange: '#b7c2e7',
  label: '#8b8d91',
  confirm: '#06a94e',
  confirmBg: '#daf2e5',
  panel: '#e7ebf7',
  white: '#ffffff',
  pill: '#98b0d8',
  pillPressed: '#9ba1b3',
} as const;

export const WEIGHTS = { medium: 500, semibold: 600, bold: 700 } as const;
type Weight = keyof typeof WEIGHTS;

export function textStyle(size: number, weight: Weight, color: string = COLORS.text): CSSProperties {
  return {
    fontFamily: FONT_FAMILY,
    fontSize: size,
    fontWeight: WEIGHTS[weight],
    fontStretch: '100%',
    lineHeight: 'normal',
    letterSpacing: 0,
    color,
    margin: 0,
    whiteSpace: 'pre',
  };
}

type BoxProps = { x: number; y: number; w?: number; h?: number; style?: CSSProperties; children?: ReactNode };

export function Box({ x, y, w, h, style, children }: BoxProps) {
  return <div style={{ position: 'absolute', left: x, top: y, width: w, height: h, ...style }}>{children}</div>;
}

type TextProps = {
  x: number;
  y: number;
  w: number;
  h?: number;
  size: number;
  weight: Weight;
  color?: string;
  align?: 'left' | 'center' | 'right';
  valign?: 'top' | 'center';
  wrap?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

/** A Figma text box: fixed frame, text aligned inside, never clipped. */
export function Text({ x, y, w, h, size, weight, color, align = 'left', valign = 'top', wrap, children, onClick }: TextProps) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: w,
        height: h,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: valign === 'center' ? 'center' : 'flex-start',
        cursor: onClick ? 'pointer' : undefined,
      }}
    >
      <p style={{ ...textStyle(size, weight, color), textAlign: align, whiteSpace: wrap ? 'normal' : 'pre' }}>{children}</p>
    </div>
  );
}

export function Icon({ src, x, y, w, h }: { src: string; x: number; y: number; w: number; h: number }) {
  return (
    <img
      src={src}
      alt=""
      draggable={false}
      width={w}
      height={h}
      style={{ position: 'absolute', left: x, top: y, width: w, height: h, display: 'block', maxWidth: 'none', pointerEvents: 'none' }}
    />
  );
}

/** Tracks pointer-down so components can show their Figma "pressed" variant. */
export function usePressed() {
  const [pressed, setPressed] = useState(false);
  const handlers = {
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    onPointerCancel: () => setPressed(false),
  };
  return [pressed, handlers] as const;
}

export const resetButton: CSSProperties = {
  appearance: 'none',
  border: 'none',
  padding: 0,
  margin: 0,
  background: 'none',
  font: 'inherit',
  cursor: 'pointer',
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
};
