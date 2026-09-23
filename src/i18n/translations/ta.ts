import type { Translation } from '@/i18n/types'

/** Charana's name stays in Latin script for the same reason as in `si.ts`. */
export const ta: Translation = {
  nav: {
    home: 'முகப்பு',
    about: 'என்னைப் பற்றி',
    programs: 'திட்டங்கள்',
    insights: 'கருத்துகள்',
    media: 'ஊடகம்',
    contact: 'தொடர்பு',
  },
  actions: {
    explorePrograms: 'திட்டங்களைப் பார்க்க',
  },
  a11y: {
    skipToContent: 'உள்ளடக்கத்திற்குச் செல்க',
    brandHome: 'Charana Gunawardhana — முகப்பு',
    mainNavigation: 'முதன்மை மெனு',
    mobileNavigation: 'மொபைல் மெனு',
    openMenu: 'முதன்மை மெனுவைத் திறக்க',
    closeMenu: 'முதன்மை மெனுவை மூட',
    languageSwitcher: 'மொழியைத் தேர்ந்தெடுக்கவும்',
  },
  programs: {
    mindMagic: {
      meta: {
        title: 'Mind Magic — Charana Gunawardhana',
        description:
          'Mind Magic என்பது மனநிலை மற்றும் தனிநபர் மாற்றத் திட்டம். இது சுமார் 8.5 மணி நேர பதிவு செய்யப்பட்ட திட்டமாகவும் நேரடி பட்டறையாகவும் கிடைக்கிறது.',
      },
      hero: {
        eyebrow: 'திட்டம்',
        descriptor: 'மனநிலை மற்றும் தனிநபர் மாற்றத் திட்டம்',
        supporting: 'பதிவு செய்யப்பட்ட மற்றும் நேரடி பட்டறை வடிவங்களில் கிடைக்கிறது.',
        badges: ['பதிவு செய்யப்பட்ட திட்டம் · சுமார் 8.5 மணி நேரம்', 'நேரடி பட்டறை'],
      },
      overview: {
        heading: 'Mind Magic பற்றி',
        body: 'Mind Magic பதிவு செய்யப்பட்ட கற்றல் அனுபவமாகவும் நேரடி பட்டறையாகவும் கிடைக்கிறது. இது பங்கேற்பாளர்களுக்கு திட்டத்தில் இணைவதற்கு வெவ்வேறு வழிகளை வழங்குகிறது.',
      },
      formats: {
        heading: 'இரண்டு வடிவங்கள்',
        recorded: {
          title: 'பதிவு செய்யப்பட்ட திட்டம்',
          points: ['சுமார் 8.5 மணி நேரம்', 'பாடத்திற்கு முந்தைய வீட்டுப்பாடம் தேவை'],
        },
        live: {
          title: 'நேரடி பட்டறை',
          points: ['நேரடி பட்டறை அனுபவமாக நடத்தப்படுகிறது'],
        },
      },
      journey: {
        heading: 'பதிவு செய்யப்பட்ட பயணம் எவ்வாறு நடைபெறுகிறது',
        steps: [
          'தயாராகுங்கள்',
          'பாடத்திற்கு முந்தைய வீட்டுப்பாடத்தை நிறைவு செய்யுங்கள்',
          'திட்ட அணுகலுக்குத் தொடருங்கள்',
        ],
      },
      next: {
        heading: 'உங்கள் பயணத்தைத் தொடருங்கள்',
        body: 'Mind Magic-ஐ நிறைவு செய்வது, தேர்ந்தெடுக்கப்பட்ட எதிர்கால திட்டங்களுக்கான தகுதியின் ஒரு பகுதியாக அமையலாம்.',
      },
      cta: {
        enquire: 'Mind Magic பற்றி விசாரிக்க',
        allPrograms: 'அனைத்து திட்டங்களையும் பார்க்க',
      },
    },
  },
}
