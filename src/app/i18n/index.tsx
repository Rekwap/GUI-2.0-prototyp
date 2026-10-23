/*
 * Device language for the prototype (English, Spanish, Indonesian).
 * Texts come from the Figma variable collection "Text" (modes en_us, es_MX, id_ID),
 * keyed by the KEY_* names that Figma binds to the text nodes.
 */
import { useSyncExternalStore } from 'react';
import TEXTS from './texts.json';

export type Lang = 'en' | 'es' | 'id';
export const LANGS: { value: Lang; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
  { value: 'id', label: 'ID' },
];

const T = TEXTS as Record<Lang, Record<string, string>>;
// Global prototype setting (set in the control panel, read by every device screen).
let current: Lang = 'en';
const listeners = new Set<() => void>();
export function setLang(lang: Lang) {
  current = lang;
  listeners.forEach(l => l());
}
export function useLang(): Lang {
  return useSyncExternalStore(cb => { listeners.add(cb); return () => listeners.delete(cb); }, () => current);
}

/** Text for a key in the active language; English (or the given fallback) when the key has no translation. */
export function translate(lang: Lang, key: string | undefined, fallback: string): string {
  if (!key || lang === 'en') return fallback;
  return T[lang]?.[key] ?? fallback;
}

export function useT() {
  const lang = useLang();
  return (key: string, fallback: string) => translate(lang, key, fallback);
}

/** One step down when a translated text does not fit its Figma box (24 → 20 → 16 → 13). */
export const FONT_STEP: Record<number, number> = { 24: 20, 20: 16, 16: 13 };

/** Texts that still overflow after the step down (for the review list). */
export const OVERFLOWS = new Map<string, string>();
/** Texts shown one size smaller to fit (for the review list). */
export const SHRUNK = new Map<string, string>();

if (typeof window !== 'undefined') Object.assign(window, { __i18nOverflow: OVERFLOWS, __i18nShrunk: SHRUNK });
