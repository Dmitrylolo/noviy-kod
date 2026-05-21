import type { Hero, Lang, PressItem, Screening, Season, TeamMember } from './types'

// ─── Live / Featured ────────────────────────────────────────────────────────

export const liveContent = {
  ua: {
    label: 'Актуальне',
    title: 'Новий епізод: «Музикант»',
    description: 'Історія про те, як музика записається з людиною навіть на передовій.',
    youtubeId: 'REPLACE_UA_LIVE_ID',
    watchUrl: 'https://www.youtube.com/@novykod',
    watchLabel: 'Дивитися зараз',
    ytLabel: 'На YouTube',
  },
  en: {
    label: 'Now Showing',
    title: 'New Episode: "The Musician"',
    description: 'A story about how music stays with a person even at the front line.',
    youtubeId: 'REPLACE_EN_LIVE_ID',
    watchUrl: 'https://www.youtube.com/@novykod-en',
    watchLabel: 'Watch Now',
    ytLabel: 'On YouTube',
  },
}

// ─── Series ─────────────────────────────────────────────────────────────────

export const seasons: Record<Lang, Season[]> = {
  ua: [
    {
      id: 'season1',
      label: 'Сезон 1',
      episodes: [
        {
          id: 's1e1',
          number: 1,
          title: 'Музикант',
          synopsis: 'Він грав на сцені. Тепер — на передовій.',
          youtubeId: 'REPLACE_S1E1_UA',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1_UA',
          hasAudioDesc: true,
          hasEnglish: true,
          hasSubtitles: false,
          featured: true,
        },
        {
          id: 's1e2',
          number: 2,
          title: 'Художник',
          synopsis: 'Його пензель змінився на камуфляж, але не мету.',
          youtubeId: 'REPLACE_S1E2_UA',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2_UA',
          hasAudioDesc: true,
          hasEnglish: true,
          hasSubtitles: false,
        },
        {
          id: 's1e3',
          number: 3,
          title: 'Актор',
          synopsis: 'Нова роль. Новий виклик. Та той самий характер.',
          youtubeId: 'REPLACE_S1E3_UA',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E3_UA',
          hasAudioDesc: false,
          hasEnglish: true,
          hasSubtitles: false,
        },
        {
          id: 's1e4',
          number: 4,
          title: 'Поет',
          synopsis: 'Слова, що народжуються між боями.',
          youtubeId: 'REPLACE_S1E4_UA',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E4_UA',
          hasAudioDesc: false,
          hasEnglish: false,
          hasSubtitles: false,
        },
      ],
    },
    {
      id: 'season2',
      label: 'Сезон 2',
      episodes: [],
    },
    {
      id: 'specials',
      label: 'Спецпроєкти',
      episodes: [],
    },
    {
      id: 'shorts',
      label: 'Shorts',
      episodes: [],
    },
  ],
  en: [
    {
      id: 'season1',
      label: 'Season 1',
      episodes: [
        {
          id: 's1e1',
          number: 1,
          title: 'The Musician',
          synopsis: 'He played on stage. Now — at the front.',
          youtubeId: 'REPLACE_S1E1_EN',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1_EN',
          hasAudioDesc: true,
          hasEnglish: true,
          hasSubtitles: true,
          featured: true,
        },
        {
          id: 's1e2',
          number: 2,
          title: 'The Artist',
          synopsis: 'His brush changed to camouflage, but not his purpose.',
          youtubeId: 'REPLACE_S1E2_EN',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2_EN',
          hasAudioDesc: true,
          hasEnglish: true,
          hasSubtitles: true,
        },
        {
          id: 's1e3',
          number: 3,
          title: 'The Actor',
          synopsis: 'A new role. A new challenge. The same character.',
          youtubeId: 'REPLACE_S1E3_EN',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E3_EN',
          hasAudioDesc: false,
          hasEnglish: true,
          hasSubtitles: true,
        },
        {
          id: 's1e4',
          number: 4,
          title: 'The Poet',
          synopsis: 'Words born between battles.',
          youtubeId: 'REPLACE_S1E4_EN',
          youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E4_EN',
          hasAudioDesc: false,
          hasEnglish: true,
          hasSubtitles: true,
        },
      ],
    },
    { id: 'season2', label: 'Season 2', episodes: [] },
    { id: 'specials', label: 'Specials', episodes: [] },
    { id: 'shorts', label: 'Shorts', episodes: [] },
  ],
}

// ─── Heroes ─────────────────────────────────────────────────────────────────

export const heroes: Record<Lang, Hero[]> = {
  ua: [
    {
      id: 'musician',
      name: 'Музикант',
      role: 'Музикант / Військовослужбовець',
      description: 'Він провів роки на сценах України. Тепер його інструмент — зброя, але музика залишилась усередині.',
      quote: '«Музика — це єдине, що не можна відібрати зброєю.»',
      youtubeId: 'REPLACE_S1E1_UA',
      youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1_UA',
      episodeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1_UA',
      photo: '/hero-3.jpg',
    },
    {
      id: 'artist',
      name: 'Художник',
      role: 'Художник / Військовослужбовець',
      description: 'Його картини висіли у галереях. Тепер він малює портрети побратимів — між вильотами.',
      quote: '«Я малюю, щоб запам\'ятати. Щоб не забули й інші.»',
      youtubeId: 'REPLACE_S1E2_UA',
      youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2_UA',
      episodeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2_UA',
      photo: '/hero-1.jpg',
    },
    {
      id: 'actor',
      name: 'Актор',
      role: 'Актор / Військовослужбовець',
      description: 'Він знімався у фільмах і грав на театральній сцені. Сьогодні його роль — захисник країни.',
      quote: '«Найважливіша роль у моєму житті — та, що зараз.»',
      youtubeId: 'REPLACE_S1E3_UA',
      youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E3_UA',
      episodeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E3_UA',
      photo: '/hero-2.jpg',
    },
    {
      id: 'poet',
      name: 'Поет',
      role: 'Поет / Військовослужбовець',
      description: 'Він писав вірші про кохання та природу. Тепер його рядки народжуються між боями.',
      quote: '«Слова — моя зброя. Завжди були.»',
      youtubeId: 'REPLACE_S1E4_UA',
      youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E4_UA',
      episodeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E4_UA',
    },
  ],
  en: [
    {
      id: 'musician',
      name: 'The Musician',
      role: 'Musician / Serviceman',
      description: 'He spent years on Ukraine\'s stages. Now his instrument is a weapon, but the music remains within.',
      quote: '"Music is the one thing that cannot be taken by force."',
      youtubeId: 'REPLACE_S1E1_EN',
      youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1_EN',
      episodeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E1_EN',
      photo: '/hero-3.jpg',
    },
    {
      id: 'artist',
      name: 'The Artist',
      role: 'Artist / Serviceman',
      description: 'His paintings hung in galleries. Now he paints portraits of his brothers-in-arms — between missions.',
      quote: '"I paint to remember. So others don\'t forget."',
      youtubeId: 'REPLACE_S1E2_EN',
      youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2_EN',
      episodeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E2_EN',
      photo: '/hero-1.jpg',
    },
    {
      id: 'actor',
      name: 'The Actor',
      role: 'Actor / Serviceman',
      description: 'He acted in films and performed on stage. Today his role is defender of the country.',
      quote: '"The most important role of my life is the one I\'m playing now."',
      youtubeId: 'REPLACE_S1E3_EN',
      youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E3_EN',
      episodeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E3_EN',
      photo: '/hero-2.jpg',
    },
    {
      id: 'poet',
      name: 'The Poet',
      role: 'Poet / Serviceman',
      description: 'He wrote poems about love and nature. Now his lines are born between battles.',
      quote: '"Words are my weapon. They always were."',
      youtubeId: 'REPLACE_S1E4_EN',
      youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E4_EN',
      episodeUrl: 'https://www.youtube.com/watch?v=REPLACE_S1E4_EN',
    },
  ],
}

// ─── Team ────────────────────────────────────────────────────────────────────

export const team: Record<Lang, { director: { name: string; bio: string; statement: string[] }; members: TeamMember[] }> = {
  ua: {
    director: {
      name: 'Режисерка',
      bio: 'Документаліст з десятирічним досвідом. Авторка проєктів про людей у кризових ситуаціях.',
      statement: [
        '«Новий код» — це проєкт, який виріс із запитання: що залишається від людини-митця, коли вона стає воїном?',
        'Ми знімали в польових умовах, між вильотами і ротаціями. Кожна зустріч була подарунком.',
        'Ці люди не перестали творити. Вони просто змінили формат. І це, мабуть, найважливіше відкриття цього проєкту.',
        'Я вдячна кожному герою за відвертість і довіру. Їхні історії мають бути почуті.',
      ],
    },
    members: [
      { name: 'Ім\'я Прізвище', role: 'Оператор' },
      { name: 'Ім\'я Прізвище', role: 'Звукорежисер' },
      { name: 'Ім\'я Прізвище', role: 'Монтаж' },
      { name: 'Ім\'я Прізвище', role: 'Продюсер' },
    ],
  },
  en: {
    director: {
      name: 'Director',
      bio: 'Documentary filmmaker with a decade of experience. Author of projects about people in crisis situations.',
      statement: [
        '"New Code" grew from a question: what remains of an artist when they become a warrior?',
        'We filmed in field conditions, between sorties and rotations. Every meeting was a gift.',
        'These people never stopped creating. They simply changed the format. And that is perhaps the most important discovery of this project.',
        'I am grateful to every hero for their openness and trust. Their stories need to be heard.',
      ],
    },
    members: [
      { name: 'Name Surname', role: 'Camera Operator' },
      { name: 'Name Surname', role: 'Sound Designer' },
      { name: 'Name Surname', role: 'Editor' },
      { name: 'Name Surname', role: 'Producer' },
    ],
  },
}

// ─── Press ───────────────────────────────────────────────────────────────────

export const press: Record<Lang, PressItem[]> = {
  ua: [
    { outlet: 'Медіа 1', title: 'Назва публікації', date: '2024', url: '#' },
    { outlet: 'Медіа 2', title: 'Назва публікації', date: '2024', url: '#' },
    { outlet: 'Медіа 3', title: 'Назва публікації', date: '2025', url: '#' },
  ],
  en: [
    { outlet: 'Media 1', title: 'Publication title', date: '2024', url: '#' },
    { outlet: 'Media 2', title: 'Publication title', date: '2024', url: '#' },
    { outlet: 'Media 3', title: 'Publication title', date: '2025', url: '#' },
  ],
}

// ─── Screenings ──────────────────────────────────────────────────────────────

export const screenings: Record<Lang, Screening[]> = {
  ua: [],
  en: [],
}

// ─── Nav / UI strings ────────────────────────────────────────────────────────

export const ui = {
  ua: {
    nav: {
      series: 'Серії',
      heroes: 'Герої',
      production: 'Виробництво',
      team: 'Команда',
      watch: 'Дивитися',
    },
    hero: {
      title: 'НОВИЙ КОД',
      subtitle: 'Документальний проєкт про українських військових\nз творчим минулим, які під час війни\nпродовжують творити і змінюють культурний код країни',
      note: 'Створено у співпраці з військовими та за підтримки Українського культурного фонду, проєкт уже представлений у міжнародних медіа',
      watchSeries: 'Дивитися серії',
      watchEn: 'Watch in English',
      audioDesc: 'Доступно з тифлокоментарем',
      enAvail: 'English version available',
      scroll: 'Прокрутити вниз',
    },
    sections: {
      series: 'Серії',
      allSeries: 'Усі серії →',
      heroes: 'Герої проєкту',
      allHeroes: 'Усі герої →',
      production: 'Виробництво',
      team: 'Команда',
      partners: 'Партнери',
      accessibility: 'Інклюзивність',
      about: 'Про проєкт',
      press: 'Преса',
      pressKit: 'Завантажити прескіт',
      screenings: 'Покази',
      screeningsUpdate: 'Розклад оновлюється',
      contacts: 'Контакти',
    },
    episode: {
      watch: 'Дивитися',
      audioDesc: 'Тифлокоментар',
      english: 'English',
      subtitles: 'Субтитри',
      featured: 'Актуальне',
    },
    hero_modal: {
      watchEpisode: 'Дивитися серію →',
      close: 'Закрити',
    },
    accessibility: {
      title: 'Доступність',
      audioDescTitle: 'Тифлокоментар',
      audioDescItems: ['Сезон 1', 'Сезон 2'],
      enTitle: 'Англомовна версія',
      enItems: ['Дубляж (Сезон 1)', 'Субтитри (Сезон 2)'],
      watchBtn: 'Дивитися доступні версії',
    },
    about: {
      title: 'Про проєкт',
      text: '«Новий код» — це спостереження за внутрішніми трансформаціями людей, які переосмислюють і творять творчість у новій реальності війни. Проєкт поєднує документалістику, авторський підхід і глибоку повагу до історії героїв.',
    },
    contact: {
      title: 'Контакти',
      email: 'info@novykod.com',
      namePlaceholder: 'Ваше ім\'я',
      emailPlaceholder: 'Ваш email',
      messagePlaceholder: 'Повідомлення',
      submit: 'Надіслати',
      subscribe: 'Підписатися',
      subscribePlaceholder: 'Ваш email',
    },
    footer: {
      rights: '© 2024 Новий код. Усі права захищені.',
    },
  },
  en: {
    nav: {
      series: 'Series',
      heroes: 'Heroes',
      production: 'Production',
      team: 'Team',
      watch: 'Watch',
    },
    hero: {
      title: 'NEW CODE',
      subtitle: 'A documentary project about Ukrainian servicemen\nwith creative pasts who continue to create\nand reshape the cultural code of their country',
      note: 'Created in collaboration with servicemen and supported by the Ukrainian Cultural Fund, the project has already been featured in international media',
      watchSeries: 'Watch Series',
      watchEn: 'Watch in English',
      audioDesc: 'Audio description available',
      enAvail: 'English version available',
      scroll: 'Scroll down',
    },
    sections: {
      series: 'Series',
      allSeries: 'All Series →',
      heroes: 'Project Heroes',
      allHeroes: 'All Heroes →',
      production: 'Production',
      team: 'Team',
      partners: 'Partners',
      accessibility: 'Accessibility',
      about: 'About',
      press: 'Press',
      pressKit: 'Download Press Kit',
      screenings: 'Screenings',
      screeningsUpdate: 'Schedule updating',
      contacts: 'Contact',
    },
    episode: {
      watch: 'Watch',
      audioDesc: 'Audio Description',
      english: 'English',
      subtitles: 'Subtitles',
      featured: 'Featured',
    },
    hero_modal: {
      watchEpisode: 'Watch Episode →',
      close: 'Close',
    },
    accessibility: {
      title: 'Accessibility',
      audioDescTitle: 'Audio Description',
      audioDescItems: ['Season 1', 'Season 2'],
      enTitle: 'English Version',
      enItems: ['Dubbing (Season 1)', 'Subtitles (Season 2)'],
      watchBtn: 'Watch accessible versions',
    },
    about: {
      title: 'About the Project',
      text: '"New Code" is an observation of the internal transformations of people who reimagine and practice creativity in the new reality of war. The project combines documentary filmmaking, an auteur approach, and deep respect for the heroes\' stories.',
    },
    contact: {
      title: 'Contact',
      email: 'info@novykod.com',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Message',
      submit: 'Send',
      subscribe: 'Subscribe',
      subscribePlaceholder: 'Your email',
    },
    footer: {
      rights: '© 2024 New Code. All rights reserved.',
    },
  },
}
