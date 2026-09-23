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
  home:   {
    'meta': {
      'title': 'Charana Gunawardhana',
      'description': 'පෞද්ගලික වර්ධනය, නායකත්වය සහ අර්ථවත් ඉදිරිගමන සඳහා අදහස්, විනය සහ ප්‍රායෝගික මගපෙන්වීම.'
    },
    'hero': {
      'eyebrow': 'Charana Gunawardhana',
      'headline': [
        'ශක්තිමත් ජීවිතයක් ගොඩනගන්න.',
        'බැබළෙන අනාගතයක් තනන්න.'
      ],
      'supporting': 'පෞද්ගලික වර්ධනය, නායකත්වය සහ අර්ථවත් ඉදිරිගමන සඳහා අදහස්, විනය සහ ප්‍රායෝගික මගපෙන්වීම.',
      'ctaPrograms': 'වැඩසටහන් බලන්න',
      'ctaJourney': 'මගේ ගමන සොයා බලන්න'
    },
    'about': {
      'eyebrow': 'Charana ගැන',
      'heading': 'උපදේශකයෙකුට වඩා වැඩි යමක්',
      'body': 'විනය, ඉගෙනීම සහ මිනිසුන්ට පැහැදිලිකමින් හා අරමුණින් ඉදිරියට යාමට උපකාර කිරීමේ බැඳීමෙන් හැඩගැසුණු ගමනකි.',
      'cta': 'මගේ ගමන සොයා බලන්න'
    },
    'focus': {
      'eyebrow': 'ප්‍රධාන අවධානය',
      'heading': 'අවධානය යොමු වන ක්ෂේත්‍ර',
      'items': {
        'personal-growth': {
          'title': 'පෞද්ගලික වර්ධනය',
          'description': 'කාලයත් සමඟ රැස්වන පුරුදු, ස්වයං-දැනුවත්භාවය සහ ස්ථිර ඉදිරිගමන.'
        },
        'leadership': {
          'title': 'නායකත්වය',
          'description': 'පැහැදිලිකම, වගකීම සහ සිතාබලා ගන්නා තීරණ සමඟ නායකත්වය දැරීම.'
        },
        'mindset': {
          'title': 'මානසිකත්වය',
          'description': 'අවධානය, විශ්වාසය සහ හැඟීම් විනය දෛනික පුහුණුවක් ලෙස.'
        },
        'direction': {
          'title': 'ව්‍යාපාර සහ ජීවිත දිශාව',
          'description': 'චේතනාවෙන් දිශාවක් තෝරා, එය මත නිරන්තරයෙන් ඉදිරියට යාම.'
        }
      }
    },
    'morningGym': {
      'eyebrow': 'Morning Gym',
      'heading': 'අරමුණින් දවස ආරම්භ කරන්න',
      'supporting': 'මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.',
      'ctaExplore': 'Morning Gym බලන්න',
      'ctaCommunity': 'ප්‍රජාවට එක් වන්න'
    },
    'programs': {
      'eyebrow': 'වැඩසටහන්',
      'heading': 'වැඩසටහන් සහ පාඨමාලා',
      'intro': 'මානසිකත්වය, විනය සහ ව්‍යාපාර වර්ධනය ආවරණය කරන වැඩසටහන්, වැඩමුළු සහ පන්ති.',
      'viewAll': 'සියලු වැඩසටහන් බලන්න',
      'explore': 'වැඩසටහන බලන්න',
      'formats': {
        'program': 'වැඩසටහන',
        'workshop': 'වැඩමුළුව',
        'zoomClass': 'Zoom පන්තිය',
        'longTerm': 'දිගුකාලීන වැඩසටහන'
      },
      'items': {
        'mind-magic': {
          'description': 'මානසිකත්වය හා පෞද්ගලික පරිවර්තනය පිළිබඳ වැඩසටහන',
          'availability': 'පටිගත කළ සහ සජීවී වැඩමුළු යන ආකාර දෙකෙන්ම ලබා ගත හැකිය.',
          'detail': 'පටිගත කළ වැඩසටහන · පැය 8.5ක් පමණ',
          'cta': 'Mind Magic බලන්න'
        },
        'optimistic-magnet': {
          'description': 'කෘතඥතාව, දෘෂ්ටිකෝණය සහ සමෘද්ධි චින්තනය මුල් කරගත් මඟපෙන්වන වැඩසටහනකි.'
        },
        'social-media-business-development': {
          'description': 'ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.'
        },
        'unstoppable': {
          'description': 'විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන දිගුකාලීන ජීවිත පරිවර්තන වැඩසටහනකි.'
        },
        'experience-your-100': {
          'description': 'සහභාගිවන්නන්ට තමන්ගේ සම්පූර්ණ දක්ෂතාවය අවදි කර ගැනීමට උපකාර වන එක්දින වැඩමුළුවකි.'
        }
      }
    },
    'trust': {
      'eyebrow': 'විශ්වාසය',
      'heading': 'සැබෑ වර්ධනය. සැබෑ බලපෑම.',
      'body': 'මෙම ඉඩ සැබෑ කතා සහ ආවරණය සඳහා වෙන් කර ඇත. සත්‍ය වන තුරු මෙහි කිසිවක් පළ නොකෙරේ.',
      'comingSoon': 'ළඟදී',
      'items': {
        'student-stories': {
          'title': 'ශිෂ්‍ය කතා',
          'description': 'වැඩසටහන් තුළ සිටින අයගේ අත්දැකීම් මෙහි පළ කෙරෙනු ඇත.'
        },
        'community-experiences': {
          'title': 'ප්‍රජා අත්දැකීම්',
          'description': 'ප්‍රජාව බෙදාගන්නා අදහස් මෙම ඉඩෙහි පෙනෙනු ඇත.'
        },
        'media-recognition': {
          'title': 'මාධ්‍ය සහ පිළිගැනීම',
          'description': 'විශේෂාංග, සම්මුඛ සාකච්ඡා සහ පෙනී සිටීම් මෙහි ලැයිස්තුගත කෙරෙනු ඇත.'
        }
      }
    },
    'media': {
      'eyebrow': 'අදහස් සහ මාධ්‍ය',
      'heading': 'අදහස්, පුහුණුව සහ සංවාදය',
      'body': 'පහත වේදිකා හරහා පළ කෙරෙන දිගු ලිවීම් සහ කෙටි වීඩියෝ.',
      'insightsTitle': 'අදහස්',
      'insightsDescription': 'වර්ධනය, මානසිකත්වය සහ නායකත්වය පිළිබඳ ලිඛිත අදහස් සහ ප්‍රායෝගික සටහන්.',
      'mediaTitle': 'මාධ්‍ය',
      'mediaDescription': 'වීඩියෝ, සංවාද සහ පෙනී සිටීම්, එක තැනකට එකතු කර ඇත.',
      'ctaInsights': 'අදහස් බලන්න',
      'ctaYoutube': 'YouTube හි නරඹන්න',
      'follow': 'අනුගමනය කරන්න'
    },
    'finalCta': {
      'headline': [
        'ශක්තිමත් ඔබවක් ගොඩනගන්න.',
        'බැබළෙන හෙටක් තනන්න.'
      ],
      'supporting': 'වැඩසටහනකින් ආරම්භ කරන්න, නැතහොත් කෙලින්ම සම්බන්ධ වන්න.',
      'ctaPrograms': 'වැඩසටහන් බලන්න',
      'ctaConnect': 'Charana සමඟ සම්බන්ධ වන්න'
    },
    'footer': {
      'rights': 'සියලු හිමිකම් ඇවිරිණි.'
    },
    'a11y': {
      'heroPortrait': 'වේදිකාවක් මත ප්‍රේක්ෂකයන් අමතන Charana Gunawardhana',
      'aboutPortrait': 'බෙජ් ඇඳුමකින් වාඩි වී සිටින Charana Gunawardhana',
      'morningGymPhoto': 'සජීවී Morning Gym සැසියක් පවත්වන Charana Gunawardhana, තිර දෙකක් හරහා සහභාගිවන්නන් සමඟ',
      'follow': 'Charana Gunawardhana අනුගමනය කරන්න',
      'social': {
        'facebook': 'Facebook හි Charana Gunawardhana (නව ටැබයකින් විවෘත වේ)',
        'instagram': 'Instagram හි Charana Gunawardhana (නව ටැබයකින් විවෘත වේ)',
        'youtube': 'YouTube හි Charana Gunawardhana (නව ටැබයකින් විවෘත වේ)',
        'tiktok': 'TikTok හි Charana Gunawardhana (නව ටැබයකින් විවෘත වේ)'
      },
      'whatsappCommunity': 'WhatsApp හි Morning Gym ප්‍රජාවට එක් වන්න (නව ටැබයකින් විවෘත වේ)',
      'watchYoutube': 'YouTube හි Charana Gunawardhana නරඹන්න (නව ටැබයකින් විවෘත වේ)'
    }
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
    optimisticMagnet: {
      meta: {
        title: 'Optimistic Magnet — Charana Gunawardhana',
        description: 'Optimistic Magnet යනු සැසි 37ක් සහිත දින 37ක පටිගත කළ ගමනකි. Mind Magic සම්පූර්ණ කිරීම අදහස් කරන සුදුසුකම් මාර්ගයේ කොටසකි.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'දින 37ක පටිගත කළ ගමන',
        supporting: 'කෘතඥතාව, දෘෂ්ටිකෝණය සහ සමෘද්ධි චින්තනය මුල් කරගත් මඟපෙන්වන වැඩසටහනකි. සැසි 37ක් · දින 37ක්.',
        badges: ['සැසි 37ක්', 'දින 37ක පටිගත කළ ගමන'],
      },
      about: {
        heading: 'Optimistic Magnet ගැන',
        body: 'කෘතඥතාව, දෘෂ්ටිකෝණය සහ සමෘද්ධි චින්තනය මුල් කරගත් මඟපෙන්වන වැඩසටහනකි. පටිගත කළ සැසි 37ක්, දින 37ක පටිගත කළ ගමන.',
      },
      journey: {
        heading: 'ගමන ව්‍යුහගත වන ආකාරය',
        body: 'පටිගත කළ සැසි 37ක් දින 37ක් පුරා ව්‍යුහගත වේ.',
        from: 'පටිගත කළ සැසි 37ක්',
        to: 'දින 37ක් පුරා ව්‍යුහගතව',
      },
      eligibility: {
        heading: 'සුදුසුකම්',
        body: 'Mind Magic සම්පූර්ණ කිරීම Optimistic Magnet සඳහා අදහස් කරන සුදුසුකම් මාර්ගයේ කොටසකි.',
        review: 'ප්‍රවේශය ලබා දීමට පෙර සුදුසුකම් සමාලෝචනය කෙරේ.',
      },
      continuation: {
        heading: 'ඔබේ ගමන ඉදිරියට',
        body: 'Optimistic Magnet Charana වැඩසටහන් තුළ පවතී. සෑම වැඩසටහනක්ම අනිවාර්ය අනුපිළිවෙලකට බැඳී නැත.',
      },
      cta: {
        enquire: 'Optimistic Magnet ගැන විමසන්න',
        allPrograms: 'සියලු වැඩසටහන් බලන්න',
      },
    },
    socialMediaBusinessDevelopment: {
      meta: {
        title: 'Social Media for Business Development — Charana Gunawardhana',
        description: 'ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'Zoom පන්තිය',
        supporting: 'ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.',
      },
      about: {
        heading: 'වැඩසටහන ගැන',
        body: 'ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.',
      },
      focus: {
        heading: 'අවධානය',
        body: 'ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම.',
      },
      cta: {
        enquire: 'වැඩසටහන ගැන විමසන්න',
        allPrograms: 'සියලු වැඩසටහන් බලන්න',
      },
    },
    unstoppable: {
      meta: {
        title: 'Unstoppable — Charana Gunawardhana',
        description: 'විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන මාස හයක ජීවිත පරිවර්තන වැඩසටහනකි.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'මාස හයක ජීවිත පරිවර්තන වැඩසටහන',
        supporting: 'විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන දිගුකාලීන ජීවිත පරිවර්තන වැඩසටහනකි.',
      },
      about: {
        heading: 'Unstoppable ගැන',
        body: 'විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන දිගුකාලීන ජීවිත පරිවර්තන වැඩසටහනකි.',
      },
      duration: {
        heading: 'වැඩසටහන් කාලය',
        value: 'මාස හයක්',
      },
      focus: {
        heading: 'අවධානය',
        body: 'විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන දිගුකාලීන සංවර්ධන අත්දැකීමකි.',
      },
      cta: {
        enquire: 'Unstoppable ගැන විමසන්න',
        allPrograms: 'සියලු වැඩසටහන් බලන්න',
      },
    },
    experienceYour100: {
      meta: {
        title: 'Experience Your 100% — Charana Gunawardhana',
        description: 'සහභාගිවන්නන්ට තමන්ගේ සම්පූර්ණ දක්ෂතාවය අවදි කර ගැනීමට උපකාර වන එක්දින වැඩමුළුවකි.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'එක්දින වැඩමුළුව',
        supporting: 'සහභාගිවන්නන්ට තමන්ගේ සම්පූර්ණ දක්ෂතාවය අවදි කර ගැනීමට උපකාර වන එක්දින වැඩමුළුවකි.',
      },
      about: {
        heading: 'Experience Your 100% ගැන',
        body: 'සහභාගිවන්නන්ට තමන්ගේ සම්පූර්ණ දක්ෂතාවය අවදි කර ගැනීමට උපකාර වන එක්දින වැඩමුළුවකි.',
      },
      format: {
        heading: 'ආකෘතිය',
        value: 'එක්දින වැඩමුළුව',
      },
      focus: {
        heading: 'අවධානය',
        body: 'සහභාගිවන්නන්ට තමන්ගේ සම්පූර්ණ දක්ෂතාවය අවදි කර ගැනීමට උපකාර වන එක්දින වැඩමුළුවකි.',
      },
      cta: {
        enquire: 'Experience Your 100% ගැන විමසන්න',
        allPrograms: 'සියලු වැඩසටහන් බලන්න',
      },
    },
    morningGym: {
      meta: {
        title: 'Morning Gym — Charana Gunawardhana',
        description: 'මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        supporting: 'මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.',
      },
      about: {
        heading: 'Morning Gym ගැන',
        body: 'මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.',
      },
      focus: {
        heading: 'අවධානය',
        items: ['මානසිකත්වය', 'විනය', 'චේතනාන්විත ක්‍රියාව'],
      },
      community: {
        heading: 'ප්‍රජාව',
        cta: 'ප්‍රජාවට එක් වන්න',
      },
      cta: {
        enquire: 'Morning Gym ගැන විමසන්න',
        allPrograms: 'සියලු වැඩසටහන් බලන්න',
      },
      a11y: {
        photo: 'සජීවී Morning Gym සැසියක් පවත්වන Charana Gunawardhana, තිර දෙකක් හරහා සහභාගිවන්නන් සමඟ',
        joinCommunity: 'WhatsApp හි Morning Gym ප්‍රජාවට එක් වන්න (නව ටැබයකින් විවෘත වේ)',
      },
    },
  },
  programsIndex: {
    meta: {
      title: 'වැඩසටහන් — Charana Gunawardhana',
      description: 'මානසිකත්වය, විනය සහ ව්‍යාපාර වර්ධනය ආවරණය කරන වැඩසටහන්, වැඩමුළු සහ පන්ති.',
    },
    hero: {
      eyebrow: 'වැඩසටහන්',
      heading: 'වර්ධනය, ඉදිරිගමන සහ පරිවර්තනය සඳහා වැඩසටහන්',
      supporting: 'මානසිකත්වය, විනය සහ ව්‍යාපාර වර්ධනය ආවරණය කරන වැඩසටහන්, වැඩමුළු සහ පන්ති.',
    },
    featured: {
      heading: 'ප්‍රධාන වැඩසටහන්',
      morningGym: {
        heading: 'අරමුණින් දවස ආරම්භ කරන්න',
        supporting: 'මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.',
        cta: 'Morning Gym බලන්න',
      },
      mindMagic: {
        heading: 'මානසිකත්වය හා පෞද්ගලික පරිවර්තනය පිළිබඳ වැඩසටහන',
        supporting: 'පටිගත කළ සහ සජීවී වැඩමුළු යන ආකාර දෙකෙන්ම ලබා ගත හැකිය.',
        detail: 'පටිගත කළ වැඩසටහන · පැය 8.5ක් පමණ',
        cta: 'Mind Magic බලන්න',
      },
    },
    list: {
      heading: 'සියලු වැඩසටහන්',
      explore: 'වැඩසටහන බලන්න',
      comingSoon: 'ළඟදී',
      items: {
        'morning-gym': {
          description: 'මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.',
        },
        'mind-magic': {
          description: 'මානසිකත්වය හා පෞද්ගලික පරිවර්තනය පිළිබඳ වැඩසටහන',
          availability: 'පටිගත කළ සහ සජීවී වැඩමුළු යන ආකාර දෙකෙන්ම ලබා ගත හැකිය.',
          detail: 'පටිගත කළ වැඩසටහන · පැය 8.5ක් පමණ',
        },
        'optimistic-magnet': {
          description: 'කෘතඥතාව, දෘෂ්ටිකෝණය සහ සමෘද්ධි චින්තනය මුල් කරගත් මඟපෙන්වන වැඩසටහනකි.',
          detail: 'පටිගත කළ ගමන · සැසි 37ක් · දින 37ක්',
        },
        'social-media-business-development': {
          description: 'ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.',
        },
        unstoppable: {
          description: 'විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන දිගුකාලීන ජීවිත පරිවර්තන වැඩසටහනකි.',
        },
        'experience-your-100': {
          description: 'සහභාගිවන්නන්ට තමන්ගේ සම්පූර්ණ දක්ෂතාවය අවදි කර ගැනීමට උපකාර වන එක්දින වැඩමුළුවකි.',
        },
      },
    },
    progression: {
      heading: 'වැඩසටහන් සම්බන්ධ වන ආකාරය',
      body: 'සමහර වැඩසටහන් දිගු ගමනක කොටසක් විය හැකිය. සෑම වැඩසටහනක්ම අනිවාර්ය අනුපිළිවෙලකට බැඳී නැත.',
      optimisticMagnet: 'Optimistic Magnet යනු Mind Magicට පසුව අදහස් කරන, දින 37ක පටිගත කළ ගමනකි. Mind Magic සම්පූර්ණ කිරීම අදහස් කරන සුදුසුකම් මාර්ගයේ කොටසකි.',
    },
    finalCta: {
      heading: 'ඔබේ ගමනට ගැලපෙන වැඩසටහන සොයන්න',
      supporting: 'ගැලපෙන වැඩසටහනක් ගැන විමසන්න.',
      enquire: 'විමසන්න',
    },
    a11y: {
      morningGymPhoto: 'සජීවී Morning Gym සැසියක් පවත්වන Charana Gunawardhana, තිර දෙකක් හරහා සහභාගිවන්නන් සමඟ',
    },
  },
}
