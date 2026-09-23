import type { Translation } from '@/i18n/types'

/**
 * Charana's name is deliberately left in Latin script inside accessible
 * names: it matches the brand mark as it is actually printed in the header,
 * which is what a speech-input user will say out loud.
 */
export const si: Translation = {
  nav: {
    home: 'මුල් පිටුව',
    about: 'මා ගැන',
    programs: 'වැඩසටහන්',
    insights: 'අදහස්',
    media: 'මාධ්‍ය',
    contact: 'සම්බන්ධ වන්න',
  },
  actions: {
    explorePrograms: 'වැඩසටහන් බලන්න',
  },
  a11y: {
    skipToContent: 'අන්තර්ගතයට යන්න',
    brandHome: 'Charana Gunawardhana — මුල් පිටුව',
    mainNavigation: 'ප්‍රධාන මෙනුව',
    mobileNavigation: 'ජංගම මෙනුව',
    openMenu: 'ප්‍රධාන මෙනුව විවෘත කරන්න',
    closeMenu: 'ප්‍රධාන මෙනුව වසන්න',
    languageSwitcher: 'භාෂාව තෝරන්න',
  },
  programs: {
    mindMagic: {
      meta: {
        title: 'Mind Magic — Charana Gunawardhana',
        description:
          'Mind Magic යනු මානසිකත්වය හා පෞද්ගලික පරිවර්තනය පිළිබඳ වැඩසටහනකි. එය පැය 8.5ක් පමණ වන පටිගත කළ වැඩසටහනක් ලෙසත් සජීවී වැඩමුළුවක් ලෙසත් ලබා ගත හැකිය.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'මානසිකත්වය හා පෞද්ගලික පරිවර්තනය පිළිබඳ වැඩසටහන',
        supporting: 'පටිගත කළ සහ සජීවී වැඩමුළු යන ආකාර දෙකෙන්ම ලබා ගත හැකිය.',
        badges: ['පටිගත කළ වැඩසටහන · පැය 8.5ක් පමණ', 'සජීවී වැඩමුළුව'],
      },
      overview: {
        heading: 'Mind Magic ගැන',
        body: 'Mind Magic පටිගත කළ ඉගෙනුම් අත්දැකීමක් ලෙසත් සජීවී වැඩමුළුවක් ලෙසත් ලබා ගත හැකි අතර, එමගින් සහභාගිවන්නන්ට වැඩසටහනට එක් වීමට විවිධ ක්‍රම ලැබේ.',
      },
      formats: {
        heading: 'ආකාර දෙකක්',
        recorded: {
          title: 'පටිගත කළ වැඩසටහන',
          points: ['පැය 8.5ක් පමණ', 'පාඨමාලාවට පෙර ගෙදර වැඩ අවශ්‍ය වේ'],
        },
        live: {
          title: 'සජීවී වැඩමුළුව',
          points: ['සජීවී වැඩමුළු අත්දැකීමක් ලෙස පවත්වනු ලැබේ'],
        },
      },
      journey: {
        heading: 'පටිගත කළ ගමන ක්‍රියාත්මක වන ආකාරය',
        steps: [
          'සූදානම් වන්න',
          'පාඨමාලාවට පෙර ගෙදර වැඩ සම්පූර්ණ කරන්න',
          'වැඩසටහනට ප්‍රවේශය දක්වා ඉදිරියට',
        ],
      },
      next: {
        heading: 'ඔබේ ගමන ඉදිරියට',
        body: 'Mind Magic සම්පූර්ණ කිරීම, තෝරාගත් අනාගත වැඩසටහන් සඳහා සුදුසුකම් ලැබීමේ කොටසක් විය හැකිය.',
      },
      cta: {
        enquire: 'Mind Magic ගැන විමසන්න',
        allPrograms: 'සියලු වැඩසටහන් බලන්න',
      },
    },
  },
}
