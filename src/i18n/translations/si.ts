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
    approach: {
      eyebrow: 'The Charana Approach',
      heading: 'Think. Act. Transform.',
      intro:
        'Lasting change begins with a different way of seeing. It grows through deliberate action and becomes visible in the way we live, work and relate to others.',
      steps: {
        think: {
          title: 'Think',
          body: 'See yourself and your circumstances differently.',
        },
        act: {
          title: 'Act',
          body: 'Turn intention into purposeful action.',
        },
        transform: {
          title: 'Transform',
          body: 'Create meaningful change across the areas that matter.',
        },
      },
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
    lifeFocus: {
      eyebrow: 'Areas of Focus',
      heading: 'Where Mindset Meets Real Life',
      intro:
        "Personal development doesn't happen in isolation. The way we think influences the choices we make across work, money, relationships and everyday life.",
      items: {
        'personal-growth': {
          title: 'Personal Growth',
          description: 'Building self-awareness, stronger habits and personal responsibility.',
        },
        mindset: {
          title: 'Mindset',
          description: 'Understanding the beliefs and perspectives that influence how we think and act.',
        },
        'money-entrepreneurship': {
          title: 'Money & Entrepreneurship',
          description:
            'Exploring money, opportunity, business and the decisions that shape financial life.',
        },
        'family-relationships': {
          title: 'Family & Relationships',
          description:
            'Developing greater awareness around relationships, family and responsibility.',
        },
      },
    },
    'morningGym': {
      'eyebrow': 'Morning Gym',
      'heading': 'අරමුණින් දවස ආරම්භ කරන්න',
      'supporting': 'මානසිකත්වය, විනය සහ චේතනාන්විත ක්‍රියාව කෙරෙහි අවධානය යොමු කරන මඟපෙන්වන උදෑසන අත්දැකීමකි.',
      paragraphs: [
        'Morning Gym is a free daily community where people come together to learn, ask questions, share experiences and talk openly about the challenges they face in everyday life.',
        'From money and debt to family, marriage, relationships, work, business and personal struggles, Morning Gym creates an open environment where real questions can be discussed without judgement.',
        'Each morning, Charana explores books, ideas, experiences and different aspects of life — creating conversations that help people look at their situations from new perspectives.',
        "You can simply listen, join the discussion or ask a question of your own. You don't have to appear on camera; you can participate privately and speak when you're ready.",
      ],
      schedule: 'Free • Daily • 7:00–8:00 AM',
      ctaJoin: 'ප්‍රජාවට එක් වන්න',
      participantsHeading: 'For existing program participants',
      participantsBody:
        "Already part of a Charana program? Morning Gym is also a place to continue learning, stay connected with the community and keep applying what you've learned.",
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
        'longTerm': 'දිගුකාලීන වැඩසටහන',
        'recordedCourse': 'පටිගත කළ පාඨමාලාව'
      },
      'items': {
        'mind-magic': {
          homepageLabel: 'Mind Magic',
          'description': 'ඔබ තුළ ඇති ශක්තිය සොයා ගන්න.',
          'availability': 'පටිගත කළ සහ සජීවී වැඩමුළු යන ආකාර දෙකෙන්ම ලබා ගත හැකිය.',
          'detail': 'පටිගත කළ වැඩසටහන · පැය 8.5ක් පමණ',
          'cta': 'Mind Magic බලන්න'
        },
        'optimistic-magnet': {
          homepageLabel: 'Optimistic Magnet',
          'description': 'කෘතඥතාව පුරුදු කරන්න. අවධානය මාරු කරන්න. වඩා ධනාත්මක මානසිකත්වයක් ගොඩනගන්න.'
        },
        'social-media-business-development': {
          homepageLabel: 'Social Media for Business Development',
          'description': 'ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.'
        },
        'unstoppable': {
          homepageLabel: 'Unstoppable Six Months',
          'description': 'විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන දිගුකාලීන ජීවිත පරිවර්තන වැඩසටහනකි.'
        },
        'experience-your-100': {
          homepageLabel: '100%',
          'description': 'ඔබේ ඉලක්ක කරා ඵලදායීව ක්‍රියා කරන ආකාරය තේරුම් ගන්න.'
        },
        'reality-room': {
          homepageLabel: 'Reality Room — Visualization Workshop',
          'description': 'දෘශ්‍යකරණ වැඩමුළුව',
          'availability': 'පටිගත කළ වැඩමුළුවක් ලෙස ලබා ගත හැකිය.'
        },
        'paradigm-shifting-for-abundance': {
          homepageLabel: 'Paradigm Shifting for Abundance',
          'description': 'Charana Gunawardhana වැඩසටහන් රාමුව තුළ ඇති පටිගත කළ පාඨමාලාවකි.'
        }
      }
    },
    proof: {
      eyebrow: 'Real People. Real Experiences.',
      heading: 'What People Say About the Journey',
      body: "More than 1,000 people have already experienced Charana's programs, with hundreds of customer stories captured through video testimonials.",
      cta: 'Explore Real Stories',
      stats: [
        { value: '1,000+', label: 'Customers served' },
        { value: '200+', label: 'Video testimonials' },
        { value: 'A growing community', label: 'Built around learning and shared experience' },
      ],
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
      ctaMorningGym: 'ප්‍රජාවට එක් වන්න',
      'ctaPrograms': 'වැඩසටහන් බලන්න',
      ctaContact: 'සම්බන්ධ වන්න'
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
          'ඔබ තුළ ඇති ශක්තිය සොයා ගැනීමට උපකාර වන පරිවර්තනීය අත්දැකීමකි. පැය 8.5ක් පමණ වන පටිගත කළ වැඩසටහනක් ලෙසත් සජීවී වැඩමුළුවක් ලෙසත් ලබා ගත හැකිය.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'ඔබ තුළ ඇති ශක්තිය සොයා ගන්න.',
        supporting: 'පටිගත කළ සහ සජීවී වැඩමුළු යන ආකාර දෙකෙන්ම ලබා ගත හැකිය.',
        badges: ['පටිගත කළ වැඩසටහන · පැය 8.5ක් පමණ', 'සජීවී වැඩමුළුව'],
      },
      overview: {
        heading: 'Mind Magic ගැන',
        body: 'ඔබ තුළ ඇති ශක්තිය සොයා ගැනීමට, ඔබේ මනස තේරුම් ගැනීමට, සහ ඔබේ ජීවිතය හා ඉලක්ක ගැන නව දෘෂ්ටියක් ගොඩනැගීමට උපකාර වන පරිවර්තනීය අත්දැකීමකි — ඔබේ ගමනේ වැදගත් හැරවුම් ලක්ෂ්‍යයක් විය හැකි අත්දැකීමකි.',
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
      homework: {
        heading: 'Mind Magic — Homework සහ සූදානම',
        intro:
          'Mind Magic වැඩසටහනට සහභාගී වීමට පෙර පහත කාර්යයන් සම්පූර්ණ කර සූදානම් වන්න.',
        introductionVideo: {
          label: 'හඳුන්වාදීමේ වීඩියෝව නරඹන්න',
          aria: 'Mind Magic හඳුන්වාදීමේ වීඩියෝව YouTube හි නරඹන්න (නව ටැබයකින් විවෘත වේ)',
        },
        items: [
          {
            title: 'ඔබේ ජයග්‍රහණ 10ක්',
            body: 'ඔබ විසින් ජීවිතයේ ලබාගත්, ඔබට වැදගත් යැයි හැඟෙන ජයග්‍රහණ 10ක් ලියන්න.',
          },
          {
            title: 'ඔබට සිදු වූ අසාර්ථක වීම් 10ක්',
            body: 'ඔබ ලබාගැනීමට කැමති වූ නමුත් ළඟාකරගත නොහැකි වූ දේවල් හෝ අත්දැකීම් 10ක් ලියන්න.',
          },
          {
            title: 'ඔබේ බලාපොරොත්තු 20ක්',
            body: 'ඔබට අවශ්‍ය තරම් මුදල් තිබුණේ නම් ජීවිතයේ ලබාගැනීමට හෝ අත්විඳීමට කැමති දේවල් 20ක් ලියන්න.',
          },
          {
            title: 'The Secret අධ්‍යයනය',
            body: 'The Secret වීඩියෝව සම්පූර්ණයෙන් නරඹා එහි ඇති සිංහල උපසිරැසි වෙනම පොතක ලියන්න.',
          },
        ],
        secretVideo: {
          label: 'THE SECRET නරඹන්න',
          aria: 'The Secret YouTube හි නරඹන්න (නව ටැබයකින් විවෘත වේ)',
        },
        secretReading: {
          label: 'පළමු කොටස සිංහලෙන් කියවන්න',
          aria: 'The Secret පළමු කොටසේ සිංහල අධ්‍යයන සටහන කියවන්න',
        },
        preparation: {
          heading: 'වැඩසටහනට සූදානම් වන්න',
          body: 'Mind Magic වැඩසටහනට සහභාගී වීමට පෙර සූදානම් විය යුතු ආකාරය පැහැදිලි කරන වීඩියෝව අනිවාර්යයෙන් නරඹන්න.',
          video: {
            label: 'සූදානම් වීමේ වීඩියෝව නරඹන්න',
            aria: 'Mind Magic සූදානම් වීමේ වීඩියෝව YouTube හි නරඹන්න (නව ටැබයකින් විවෘත වේ)',
          },
        },
        submission: {
          heading: 'Homework සම්පූර්ණ කළ පසු',
          body: 'ඔබ ලියූ සියලුම Homework වල පැහැදිලි ඡායාරූප Charana Gunawardhana වෙත WhatsApp මඟින් යොමු කරන්න.',
          cta: 'WHATSAPP මඟින් HOMEWORK යවන්න',
          aria: 'Mind Magic Homework WhatsApp මඟින් Charana Gunawardhana වෙත යවන්න (නව ටැබයකින් විවෘත වේ)',
        },
        quote: {
          text: 'මෙම වැඩසටහන ඔබේ ජීවිතයේ විශාල වෙනසක් සහ සුවිශේෂී අත්දැකීමක් බවට පත්කරගන්න.',
          attribution: 'Charana Gunawardhana',
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
      resources: {
        theSecretPart1: {
          meta: {
            title: 'The Secret — Part 1 | Mind Magic අධ්‍යයන සටහන — Charana Gunawardhana',
            description:
              'Mind Magic ඉගෙනුම් ගමන සඳහා, The Secret තුළ සාකච්ඡා වන අදහස් ඇසුරෙන් සකස් කළ සිංහල අධ්‍යයන සටහනකි. මෙය නිල පරිවර්තනයක් හෝ පිටපතක් නොවේ.',
          },
          eyebrow: 'Mind Magic • Learning Resource',
          series: 'The Secret — Part 01',
          supporting:
            'Mind Magic ඉගෙනුම් ගමන සඳහා, The Secret තුළ සාකච්ඡා වන අදහස් ඇසුරෙන් සකස් කළ සිංහල අධ්‍යයන සටහනකි. මෙය නිල පරිවර්තනයක් හෝ උපසිරැසි පිටපතක් නොවේ.',
          sinhalaNote: '',
          back: 'Mind Magic වෙත ආපසු යන්න',
          watchVideo: 'The Secret වීඩියෝව නරඹන්න',
          watchVideoAria: 'The Secret YouTube හි නරඹන්න (නව ටැබයකින් විවෘත වේ)',
        },
      },
    },
    optimisticMagnet: {
      meta: {
        title: 'Optimistic Magnet — Charana Gunawardhana',
        description: 'සැසි 37ක් සහිත දින 37ක කෘතඥතා පුහුණුවකි. Mind Magic සම්පූර්ණ කිරීම අදහස් කරන සුදුසුකම් මාර්ගයේ කොටසකි.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'කෘතඥතාව පුරුදු කරන්න. අවධානය මාරු කරන්න. වඩා ධනාත්මක මානසිකත්වයක් ගොඩනගන්න.',
        supporting: 'පටිගත කළ සැසි 37ක්, දින 37ක ගමනක් ලෙස ව්‍යුහගත කර ඇත.',
        badges: ['සැසි 37ක්', 'දින 37ක පටිගත කළ ගමන'],
      },
      about: {
        heading: 'Optimistic Magnet ගැන',
        body: 'Mind Magic හරහා ඉගෙන ගත් දේ ක්‍රියාත්මක කිරීමට උපකාර වන දින 37ක කෘතඥතා පුහුණුවකි. ඔබේ ජීවිතයේ යහපත් දේ සඳහා සිහිකල්පනාවෙන් කෘතඥ වීමෙන් — අසීරු අත්දැකීම්වලදී පවා ධනාත්මක පැත්ත සොයා ගැනීමෙන් — ඍණාත්මක බවෙන් ඈත්ව ධනාත්මක දෙසට අවධානය යොමු කරන ආකාරය ඉගෙන ගනී. මෙයින් වඩා බලගතු මානසික තත්ත්වයක් වර්ධනය කර ගැනීමට උපකාර වේ.',
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
        description: 'ඔබේ ඉලක්ක කරා ඵලදායීව ක්‍රියා කරන ආකාරය තේරුම් ගැනීමට උපකාර වන එක්දින වැඩමුළුවකි.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'එක්දින වැඩමුළුව',
        supporting: 'ඔබේ ඉලක්ක කරා ඵලදායීව ක්‍රියා කරන ආකාරය තේරුම් ගන්න.',
      },
      about: {
        heading: 'Experience Your 100% ගැන',
        body: 'ඔබට අවශ්‍ය දේ තවමත් ලබා නොගත්තේ ඇයිද, ඔබව පසුපසට අල්ලාගෙන සිටියේ කුමක්ද, සහ ඔබට අවශ්‍ය ප්‍රතිඵල ගොඩනගා ගැනීමට ඉලක්ක කරා වෙනස් ආකාරයකින් යාමට හැකි ආකාරය තේරුම් ගැනීමට උපකාර වන පරිවර්තනීය පුහුණුවකි.',
      },
      format: {
        heading: 'ආකෘතිය',
        value: 'එක්දින වැඩමුළුව',
      },
      focus: {
        heading: 'අවධානය',
        body: 'ඔබේ ඉලක්ක කරා ඵලදායීව ක්‍රියා කරන ආකාරය තේරුම් ගන්න.',
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
    realityRoom: {
      meta: {
        title: 'Reality Room — Charana Gunawardhana',
        description:
          'Reality Room යනු දෘශ්‍යකරණ වැඩමුළුවකි. පූර්ණ දින ප්‍රායෝගික වැඩමුළුවක්, පටිගත කළ වැඩමුළුවක් ලෙස ලබා ගත හැකිය.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'දෘශ්‍යකරණ වැඩමුළුව',
        supporting: 'පටිගත කළ වැඩමුළුවක් ලෙස ලබා ගත හැකිය.',
      },
      about: {
        heading: 'Reality Room ගැන',
        body: 'දෘශ්‍යකරණය තේරුම් ගැනීමට සහ ඔබේ ඉලක්ක වඩා පැහැදිලිව, අවධානයෙන් දෘශ්‍යකරණය කරන ආකාරය ඉගෙන ගැනීමට සැලසුම් කළ පූර්ණ දින ප්‍රායෝගික වැඩමුළුවකි.',
      },
      format: {
        heading: 'ආකෘතිය',
        value: 'පූර්ණ දින වැඩමුළුව',
      },
      focus: {
        heading: 'දෘශ්‍යකරණ අවධානය',
        body: 'දෘශ්‍යකරණය තේරුම් ගෙන, ඔබේ ඉලක්ක වඩා පැහැදිලිව, අවධානයෙන් දෘශ්‍යකරණය කරන ආකාරය ඉගෙන ගන්න.',
      },
      availability: {
        heading: 'ලබා ගත හැකි ආකාරය',
        body: 'පටිගත කළ වැඩමුළුවක් ලෙස ලබා ගත හැකිය.',
      },
      cta: {
        enquire: 'Reality Room ගැන විමසන්න',
        allPrograms: 'සියලු වැඩසටහන් බලන්න',
      },
    },
    paradigmShiftingForAbundance: {
      meta: {
        title: 'Paradigm Shifting for Abundance — Charana Gunawardhana',
        description:
          'Charana Gunawardhana වැඩසටහන් රාමුව තුළ ඇති පටිගත කළ පාඨමාලාවකි.',
      },
      hero: {
        eyebrow: 'වැඩසටහන',
        descriptor: 'පටිගත කළ පාඨමාලාව',
      },
      about: {
        heading: 'පාඨමාලාව ගැන',
        body: 'Charana Gunawardhana වැඩසටහන් රාමුව තුළ ඇති පටිගත කළ පාඨමාලාවකි.',
      },
      format: {
        heading: 'ආකෘතිය',
        value: 'පටිගත කළ පාඨමාලාව',
      },
      cta: {
        enquire: 'පාඨමාලාව ගැන විමසන්න',
        allPrograms: 'සියලු වැඩසටහන් බලන්න',
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
        heading: 'ඔබ තුළ ඇති ශක්තිය සොයා ගන්න.',
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
          description: 'ඔබ තුළ ඇති ශක්තිය සොයා ගන්න.',
          availability: 'පටිගත කළ සහ සජීවී වැඩමුළු යන ආකාර දෙකෙන්ම ලබා ගත හැකිය.',
          detail: 'පටිගත කළ වැඩසටහන · පැය 8.5ක් පමණ',
        },
        'optimistic-magnet': {
          description: 'කෘතඥතාව පුරුදු කරන්න. අවධානය මාරු කරන්න. වඩා ධනාත්මක මානසිකත්වයක් ගොඩනගන්න.',
          detail: 'පටිගත කළ ගමන · සැසි 37ක් · දින 37ක්',
        },
        'social-media-business-development': {
          description: 'ව්‍යාපාර වර්ධනයට සමාජ මාධ්‍ය යොදා ගැනීම පිළිබඳ ප්‍රායෝගික මාර්ගගත පන්තියකි.',
        },
        unstoppable: {
          description: 'විනය සහ ඉදිරිගමන කෙරෙහි අවධානය යොමු කරන දිගුකාලීන ජීවිත පරිවර්තන වැඩසටහනකි.',
        },
        'experience-your-100': {
          description: 'ඔබේ ඉලක්ක කරා ඵලදායීව ක්‍රියා කරන ආකාරය තේරුම් ගන්න.',
        },
        'reality-room': {
          description: 'දෘශ්‍යකරණ වැඩමුළුව',
          availability: 'පටිගත කළ වැඩමුළුවක් ලෙස ලබා ගත හැකිය.',
        },
        'paradigm-shifting-for-abundance': {
          description: 'Charana Gunawardhana වැඩසටහන් රාමුව තුළ ඇති පටිගත කළ පාඨමාලාවකි.',
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
  about: {
    meta: {
      title: 'Charana Gunawardhana ගැන',
      description:
        'විනය, ඉගෙනීම සහ මිනිසුන්ට පැහැදිලිකමින් හා අරමුණින් ඉදිරියට යාමට උපකාර කිරීමේ බැඳීමෙන් හැඩගැසුණු ගමනකි.',
    },
    hero: {
      eyebrow: 'මා ගැන',
      heading: 'Charana Gunawardhana ගැන',
      positioning:
        'Entrepreneur | Personal Transformation Educator and Mindset Strategist | Concept Creator',
      supporting:
        'පෞද්ගලික වර්ධනය, නායකත්වය සහ අර්ථවත් ඉදිරිගමන සඳහා අදහස්, විනය සහ ප්‍රායෝගික මගපෙන්වීම.',
    },
    intro: {
      heading: 'උපදේශකයෙකුට වඩා වැඩි යමක්',
      body: 'විනය, ඉගෙනීම සහ මිනිසුන්ට පැහැදිලිකමින් හා අරමුණින් ඉදිරියට යාමට උපකාර කිරීමේ බැඳීමෙන් හැඩගැසුණු ගමනකි.',
    },
    journey: {
      heading: 'ගමන',
      body: 'විනය, ඉගෙනීම සහ මිනිසුන්ට පැහැදිලිකමින් හා අරමුණින් ඉදිරියට යාමට උපකාර කිරීමේ බැඳීමෙන් හැඩගැසුණු ගමනකි.',
      supporting:
        'පෞද්ගලික වර්ධනය, නායකත්වය සහ අර්ථවත් ඉදිරිගමන සඳහා අදහස්, විනය සහ ප්‍රායෝගික මගපෙන්වීම.',
    },
    focus: {
      heading: 'අවධානය යොමු වන ක්ෂේත්‍ර',
      items: {
        'personal-growth': {
          title: 'පෞද්ගලික වර්ධනය',
          description: 'කාලයත් සමඟ රැස්වන පුරුදු, ස්වයං-දැනුවත්භාවය සහ ස්ථිර ඉදිරිගමන.',
        },
        leadership: {
          title: 'නායකත්වය',
          description: 'පැහැදිලිකම, වගකීම සහ සිතාබලා ගන්නා තීරණ සමඟ නායකත්වය දැරීම.',
        },
        mindset: {
          title: 'මානසිකත්වය',
          description: 'අවධානය, විශ්වාසය සහ හැඟීම් විනය දෛනික පුහුණුවක් ලෙස.',
        },
        direction: {
          title: 'ව්‍යාපාර සහ ජීවිත දිශාව',
          description: 'චේතනාවෙන් දිශාවක් තෝරා, එය මත නිරන්තරයෙන් ඉදිරියට යාම.',
        },
      },
    },
    programs: {
      heading: 'වැඩසටහන්',
      supporting: 'මානසිකත්වය, විනය සහ ව්‍යාපාර වර්ධනය ආවරණය කරන වැඩසටහන්, වැඩමුළු සහ පන්ති.',
      cta: 'වැඩසටහන් බලන්න',
    },
    finalCta: {
      heading: 'ගමන ඉදිරියට ගෙන යන්න',
      ctaPrograms: 'වැඩසටහන් බලන්න',
      ctaContact: 'සම්බන්ධ වන්න',
    },
    a11y: {
      portrait: 'බෙජ් ඇඳුමකින් වාඩි වී සිටින Charana Gunawardhana',
    },
  },
  contact: {
    meta: {
      title: 'සම්බන්ධ වන්න — Charana Gunawardhana',
      description:
        'වැඩසටහන් තොරතුරු සහ සාමාන්‍ය විමසීම් සඳහා Charana Gunawardhana සමඟ සම්බන්ධ වන්න.',
    },
    hero: {
      eyebrow: 'සම්බන්ධ වන්න',
      heading: 'සම්බන්ධ වන්න',
      supporting:
        'වැඩසටහන් තොරතුරු සහ සාමාන්‍ය විමසීම් සඳහා Charana Gunawardhana සමඟ සම්බන්ධ වන්න.',
    },
    options: {
      heading: 'පොදු නාලිකා',
      supporting: 'මේවා තහවුරු කළ පොදු පැතිකඩයි. ඒවා නව ටැබයකින් විවෘත වේ.',
      profile: 'පොදු පැතිකඩ',
      email: 'විද්‍යුත් තැපෑල',
      community: {
        heading: 'Morning Gym ප්‍රජාව',
        body: 'මෙම WhatsApp සබැඳිය Morning Gym ප්‍රජාවට එක් වීම සඳහා ය. එය පෞද්ගලික සහාය අංකයක් නොවේ.',
        cta: 'ප්‍රජාවට එක් වන්න',
      },
    },
    enquiry: {
      heading: 'Mind Magic විමසීම්',
      association: 'වැඩසටහන',
      phoneLabel: 'දුරකථනය',
    },
    programs: {
      heading: 'වැඩසටහන් විමසීම්',
      supporting: 'වැඩසටහන් බලන්න, නැතහොත් මෙම පිටුවේ පොදු නාලිකා භාවිතා කරන්න.',
      cta: 'වැඩසටහන් බලන්න',
    },
    social: {
      heading: 'අනුගමනය කරන්න',
      supporting: 'එම පොදු පැතිකඩම මෙහි එකතු කර ඇත.',
    },
    finalCta: {
      heading: 'ඉදිරියට',
      ctaPrograms: 'වැඩසටහන් බලන්න',
      ctaHome: 'මුල් පිටුවට',
    },
    a11y: {
      community: 'WhatsApp හි Morning Gym ප්‍රජාවට එක් වන්න (නව ටැබයකින් විවෘත වේ)',
      email: 'aumcharana@gmail.com වෙත විද්‍යුත් තැපැල් යවන්න',
      enquiryPhone: 'Mind Magic විමසීම් සඳහා Lakmali Siriwardhana අමතන්න, +94 74 316 9754',
    },
  },
  media: {
    meta: {
      title: 'මාධ්‍ය — Charana Gunawardhana',
      description: 'Charana Gunawardhana ගේ තෝරාගත් දෘශ්‍ය මොහොත්, පෙනී සිටීම් සහ පොදු අන්තර්ගතය.',
    },
    hero: {
      eyebrow: 'මාධ්‍ය',
      heading: 'මාධ්‍ය සහ මොහොත්',
      supporting: 'Charana Gunawardhana ගේ තෝරාගත් දෘශ්‍ය මොහොත්, පෙනී සිටීම් සහ පොදු අන්තර්ගතය බලන්න.',
    },
    featured: {
      heading: 'වේදිකාව මත',
      supporting: 'වේදිකාවක් මත ප්‍රේක්ෂකයන් අමතන Charana Gunawardhana.',
    },
    video: {
      heading: 'YouTube',
      supporting: 'පොදු වීඩියෝ YouTube හි බෙදා ගනී.',
      cta: 'YouTube වෙත යන්න',
    },
    social: {
      heading: 'අනුගමනය කරන්න',
      supporting: 'තහවුරු කළ පොදු පැතිකඩ.',
      profile: 'පොදු පැතිකඩ',
    },
    finalCta: {
      heading: 'ඉදිරියට',
      ctaPrograms: 'වැඩසටහන් බලන්න',
      ctaContact: 'සම්බන්ධ වන්න',
    },
    a11y: {
      featured: 'වේදිකාවක් මත ප්‍රේක්ෂකයන් අමතන Charana Gunawardhana',
      watchYoutube: 'YouTube හි Charana Gunawardhana නරඹන්න (නව ටැබයකින් විවෘත වේ)',
    },
  },
  insights: {
    meta: {
      title: 'අදහස් — Charana Gunawardhana',
      description: 'Charana Gunawardhana ගේ වර්ධනය, මානසිකත්වය සහ නායකත්වය පිළිබඳ ලිඛිත අදහස් සහ ප්‍රායෝගික සටහන්.',
    },
    hero: {
      eyebrow: 'අදහස්',
      heading: 'වර්ධනය, පැහැදිලිකම සහ ඉදිරිගමන සඳහා අදහස්',
      supporting: 'පෞද්ගලික වර්ධනය, නායකත්වය සහ අර්ථවත් ඉදිරිගමන සඳහා අදහස්, විනය සහ ප්‍රායෝගික මගපෙන්වීම.',
    },
    themes: {
      heading: 'අදහස් ක්ෂේත්‍ර',
      supporting: 'තෝරාගත් අදහස් මෙම අවධානය යොමු වන ක්ෂේත්‍ර වටා එකතු වේ.',
    },
    featured: {
      heading: 'තෝරාගත් අදහස්',
      body: 'මෙම ඉඩ වර්ධනය, මානසිකත්වය සහ නායකත්වය පිළිබඳ තෝරාගත් අදහස් එකතු කරයි.',
    },
    programs: {
      heading: 'වැඩසටහන්',
      supporting: 'මෙම තේමා වැඩසටහන්, වැඩමුළු සහ පන්ති හරහා ඉදිරියට යයි.',
      cta: 'වැඩසටහන් බලන්න',
    },
    media: {
      heading: 'මාධ්‍ය',
      supporting: 'වීඩියෝ, සංවාද සහ පෙනී සිටීම්, එක තැනකට එකතු කර ඇත.',
      cta: 'මාධ්‍ය බලන්න',
    },
    finalCta: {
      heading: 'ඉදිරියට',
      ctaPrograms: 'වැඩසටහන් බලන්න',
      ctaContact: 'සම්බන්ධ වන්න',
    },
    a11y: {
      themes: 'අදහස් ක්ෂේත්‍ර',
    },
  },
  notFound: {
    title: 'පිටුව හමු නොවීය — Charana Gunawardhana',
    description: 'Charana Gunawardhana ගේ නිල වෙබ් අඩවියේ මෙම පිටුව හමු නොවීය.',
    heading: 'පිටුව හමු නොවීය',
    backHome: 'මුල් පිටුවට',
  },
}
