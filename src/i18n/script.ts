/**
 * Wide letter-spacing belongs to Latin small caps only. Sinhala and Tamil are
 * set at their natural size and spacing, since tracking pulls their conjuncts
 * and vowel signs apart.
 */
const LATIN = /^[\p{Script=Latin}\p{Script=Common}]+$/u

export function isLatinLabel(text: string): boolean {
  return LATIN.test(text)
}

export function labelClass(
  text: string,
  latinClass = 'text-[0.65rem] tracking-[0.3em] uppercase',
  indicClass = 'text-[0.8rem]',
): string {
  return isLatinLabel(text) ? latinClass : indicClass
}
