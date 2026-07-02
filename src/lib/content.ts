import type { Hero, Lang, PressItem, Screening, Season, TeamMember } from './types'

// ─── Live / Featured ────────────────────────────────────────────────────────

export const liveContent = {
  ua: {
    label: 'Актуальне',
    title: '«Новий коd_». Сезон 2',
    description: 'Ще більше історій, які неможливо не розповісти. Вже цього літа.',
    youtubeId: '',
    comingSoon: true,
    watchUrl: 'https://www.youtube.com/@NovyiKod',
    watchLabel: 'Дивитися зараз',
    ytLabel: 'На YouTube',
  },
  en: {
    label: 'Coming Soon',
    title: '"New Code". Season 2',
    description: 'More stories that cannot remain untold. Coming this summer.',
    youtubeId: '',
    comingSoon: true,
    watchUrl: 'https://www.youtube.com/@NovyiKod',
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
          title: 'ВОДА',
          synopsis: 'Коли війна змушує заново відповісти на питання: хто ти і заради чого твориш.',
          description: 'До війни його життя було пов\'язане з музикою, творчими проєктами та телебаченням. Сьогодні він керує бойовими операціями безпілотних систем і відповідає за життя своїх побратимів. Але навіть на війні музика не зникла з його життя. Вона стала способом зберігати себе — способом не втратити зв\'язок із тим, ким він був і ким залишається.',
          thumbnail: '/series/water.webp',
          youtubeId: 'ORS1Oh_iRV0',
          youtubeUrl: 'https://www.youtube.com/watch?v=ORS1Oh_iRV0',
          hasAudioDesc: true,
          hasEnglish: true,
          hasSubtitles: false,
          featured: true,
        },
        {
          id: 's1e2',
          number: 2,
          title: 'ВОГОНЬ',
          synopsis: 'Шлях до себе через силу слова, вибір і нову ідентичність.',
          description: 'Павло Вишебаба став одним із голосів української війни. Його вірші перекладають різними мовами світу, його тексти цитують тисячі людей. Але за межами сцени існує інший Павло — військовий, який разом із побратимами виконує бойові завдання на фронті. Між поезією та війною. Між творчістю та необхідністю захищати.',
          thumbnail: '/series/fire.webp',
          youtubeId: 'j697xh6tXsU',
          youtubeUrl: 'https://www.youtube.com/watch?v=j697xh6tXsU',
          hasAudioDesc: true,
          hasEnglish: true,
          hasSubtitles: false,
        },
        {
          id: 's1e3',
          number: 3,
          title: 'ПОВІТРЯ',
          synopsis: 'Погляд на людину там, де інші бачать лише війну.',
          description: 'До війни він дивився на світ через об\'єктив камери. Сьогодні він дивиться на поле бою через камери безпілотників. Його професія змінилася — але не змінилася головна риса: здатність бачити більше, бачити далі, бачити те, що залишається непомітним для інших.',
          thumbnail: '/series/air.webp',
          youtubeId: '0Z0vQ_mbXqA',
          youtubeUrl: 'https://www.youtube.com/watch?v=0Z0vQ_mbXqA',
          hasAudioDesc: false,
          hasEnglish: true,
          hasSubtitles: false,
        },
        {
          id: 's1e4',
          number: 4,
          title: 'ЗЕМЛЯ',
          synopsis: 'Пам\'ять, що тримає зв\'язок між минулим і майбутнім.',
          description: 'Вона документувала події як журналістка. Воювала як доброволиця. Командувала підрозділом як офіцерка. Створювала мистецтво як художниця. Під час зйомок вперше стала матір\'ю. Олена Білозерська — одна з тих постатей, через які можна простежити всю історію сучасної війни України.',
          thumbnail: '/series/earth.webp',
          youtubeId: '-3geo8Gjy5o',
          youtubeUrl: 'https://www.youtube.com/watch?v=-3geo8Gjy5o',
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
          title: 'WATER',
          synopsis: 'When war forces you to answer anew: who are you and what do you create for.',
          description: 'Before the war, his life was tied to music, creative projects and television. Today he commands drone combat operations and is responsible for the lives of his comrades. But even in war, music has not left his life. It became a way to preserve himself — a way not to lose touch with who he was and who he remains.',
          youtubeId: 'ORS1Oh_iRV0',
          youtubeUrl: 'https://www.youtube.com/watch?v=ORS1Oh_iRV0',
          hasAudioDesc: true,
          hasEnglish: true,
          hasSubtitles: true,
          featured: true,
        },
        {
          id: 's1e2',
          number: 2,
          title: 'FIRE',
          synopsis: 'The path to oneself through the power of words, choice, and new identity.',
          description: 'Pavlo Vyshebaba has become one of the voices of the Ukrainian war. His poems are translated into many languages, his texts are quoted by thousands. But behind the stage is another Pavlo — a soldier who carries out combat missions at the front. Between poetry and war. Between creativity and the necessity to defend.',
          youtubeId: 'j697xh6tXsU',
          youtubeUrl: 'https://www.youtube.com/watch?v=j697xh6tXsU',
          hasAudioDesc: true,
          hasEnglish: true,
          hasSubtitles: true,
        },
        {
          id: 's1e3',
          number: 3,
          title: 'AIR',
          synopsis: 'A look at the person where others see only war.',
          description: 'Before the war he looked at the world through a camera lens. Today he looks at the battlefield through drone cameras. His profession has changed — but not his defining trait: the ability to see more, see further, see what remains invisible to others.',
          youtubeId: '0Z0vQ_mbXqA',
          youtubeUrl: 'https://www.youtube.com/watch?v=0Z0vQ_mbXqA',
          hasAudioDesc: false,
          hasEnglish: true,
          hasSubtitles: true,
        },
        {
          id: 's1e4',
          number: 4,
          title: 'EARTH',
          synopsis: 'Memory that holds the connection between past and future.',
          description: 'She documented events as a journalist. Fought as a volunteer. Commanded a unit as an officer. Created art as an artist. During filming, she became a mother for the first time. Olena Bilozerska is one of those figures through whom the entire history of modern Ukraine\'s war can be traced.',
          youtubeId: '-3geo8Gjy5o',
          youtubeUrl: 'https://www.youtube.com/watch?v=-3geo8Gjy5o',
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
      name: 'Олег «Дон Кіхот» Грабар',
      role: 'Музикант · Телепродюсер · Оператор дронів',
      description: 'Митець, музикант і військовий. Війна змусила його заново відповісти на питання, хто він і заради чого творить. Через мистецтво він переосмислює пережите та шукає нові сенси, нову мову й нову опору.',
      quote: '«Музика не зникла. Вона стала способом зберігати себе.»',
      youtubeId: 'ORS1Oh_iRV0',
      youtubeUrl: 'https://www.youtube.com/watch?v=ORS1Oh_iRV0',
      episodeUrl: 'https://www.youtube.com/watch?v=ORS1Oh_iRV0',
      photo: '/hero-grabar.webp',
    },
    {
      id: 'artist',
      name: 'Павло «Капелан» Вишебаба',
      role: 'Поет · Музикант · Мінометник',
      description: 'Військовий, поет і один із найпомітніших голосів сучасної української культури. Його особистий шлях відображає трансформацію цілого покоління українців, які відкривають власну ідентичність через досвід війни.',
      quote: '«Моя поезія народжується не всупереч війні. Вона народжується всередині неї.»',
      youtubeId: 'j697xh6tXsU',
      youtubeUrl: 'https://www.youtube.com/watch?v=j697xh6tXsU',
      episodeUrl: 'https://www.youtube.com/watch?v=j697xh6tXsU',
      photo: '/hero-vyshebaba.webp',
    },
    {
      id: 'actor',
      name: 'Станіслав «Ткач» Ткачев',
      role: 'Оператор-постановник · Діджей · Сержант роти БПЛА',
      description: 'Військовий, оператор і музикант. Разом із побратимами з кіноіндустрії він знайшов своє місце на війні, не втративши творчого голосу та здатності бачити людину навіть у найскладніших обставинах.',
      quote: '«До війни я дивився на світ через об\'єктив камери. Тепер — через камери безпілотників.»',
      youtubeId: '0Z0vQ_mbXqA',
      youtubeUrl: 'https://www.youtube.com/watch?v=0Z0vQ_mbXqA',
      episodeUrl: 'https://www.youtube.com/watch?v=0Z0vQ_mbXqA',
      photo: '/hero-tkach.webp',
    },
    {
      id: 'poet',
      name: 'Олена «Білка» Білозерська',
      role: 'Журналістка · Письменниця · Художниця · Офіцерка ЗСУ',
      description: 'Журналістка, письменниця, художниця та військова. Багато років вона документує українську війну зсередини, поєднуючи роль свідка, учасниці та хранительки пам\'яті.',
      quote: '«Я створюю портрети загиблих, щоб повернути їм ім\'я, обличчя, особисту історію.»',
      youtubeId: '-3geo8Gjy5o',
      youtubeUrl: 'https://www.youtube.com/watch?v=-3geo8Gjy5o',
      episodeUrl: 'https://www.youtube.com/watch?v=-3geo8Gjy5o',
      photo: '/hero-olena.webp',
    },
  ],
  en: [
    {
      id: 'musician',
      name: 'Oleh "Don Quixote" Grabar',
      role: 'Musician · TV Producer · Drone Operator',
      description: 'Artist, musician and soldier. War forced him to answer anew who he is and what he creates for. Through art, he rethinks his experience and seeks new meanings, a new language and a new foundation.',
      quote: '"Music did not disappear. It became a way to preserve myself."',
      youtubeId: 'ORS1Oh_iRV0',
      youtubeUrl: 'https://www.youtube.com/watch?v=ORS1Oh_iRV0',
      episodeUrl: 'https://www.youtube.com/watch?v=ORS1Oh_iRV0',
      photo: '/hero-grabar.webp',
    },
    {
      id: 'artist',
      name: 'Pavlo "Kapelan" Vyshebaba',
      role: 'Poet · Musician · Mortar Gunner',
      description: 'Soldier, poet and one of the most prominent voices in contemporary Ukrainian culture. His personal journey reflects the transformation of an entire generation of Ukrainians discovering their identity through the experience of war.',
      quote: '"My poetry is not born despite the war. It is born within it."',
      youtubeId: 'j697xh6tXsU',
      youtubeUrl: 'https://www.youtube.com/watch?v=j697xh6tXsU',
      episodeUrl: 'https://www.youtube.com/watch?v=j697xh6tXsU',
      photo: '/hero-vyshebaba.webp',
    },
    {
      id: 'actor',
      name: 'Stanislav "Tkach" Tkachev',
      role: 'Cinematographer · DJ · UAV Sergeant',
      description: 'Soldier, cinematographer and musician. Together with fellow filmmakers, he found his place in war without losing his creative voice and ability to see people even in the most difficult circumstances.',
      quote: '"Before the war I looked at the world through a camera lens. Now — through drone cameras."',
      youtubeId: '0Z0vQ_mbXqA',
      youtubeUrl: 'https://www.youtube.com/watch?v=0Z0vQ_mbXqA',
      episodeUrl: 'https://www.youtube.com/watch?v=0Z0vQ_mbXqA',
      photo: '/hero-tkach.webp',
    },
    {
      id: 'poet',
      name: 'Olena "Bilka" Bilozerska',
      role: 'Journalist · Writer · Artist · Officer of the Armed Forces',
      description: 'Journalist, writer, artist and soldier. For many years she has been documenting the Ukrainian war from the inside, combining the roles of witness, participant and keeper of memory.',
      quote: '"I create portraits of the fallen to return their name, face and personal story."',
      youtubeId: '-3geo8Gjy5o',
      youtubeUrl: 'https://www.youtube.com/watch?v=-3geo8Gjy5o',
      episodeUrl: 'https://www.youtube.com/watch?v=-3geo8Gjy5o',
      photo: '/hero-olena.webp',
    },
  ],
}

// ─── Team ────────────────────────────────────────────────────────────────────

export const team: Record<Lang, { director: { name: string; bio: string; statement: string[] }; members: TeamMember[] }> = {
  ua: {
    director: {
      name: 'Марина Чанкова',
      bio: 'Авторка та режисерка проєкту, документалістка, журналістка та продюсерка з понад п\'ятнадцятирічним досвідом роботи в українських та міжнародних медіа. Співпрацювала з Voice of America, Amnesty International, Bloomberg, Euronews та іншими медіаорганізаціями.',
      statement: [
        'Мене цікавить не лише те, що відбувається з країною під час війни. Мене цікавить, що відбувається з людиною.',
        'Як вона змінюється. Що втрачає. Що знаходить. І як саме народжується нова культура в момент, коли здається, що світ руйнується навколо.',
        'У центрі кожної історії — жива людина зі своїми страхами, сумнівами, втратами, надіями та внутрішніми змінами.',
        'Кожен герой проживає власний шлях трансформації. Ми переконані, що культура є такою ж важливою частиною національної стійкості, як армія, дипломатія чи економіка.',
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
      name: 'Maryna Chankova',
      bio: 'Project author and director, documentary filmmaker, journalist and producer with over fifteen years of experience in Ukrainian and international media. Has collaborated with Voice of America, Amnesty International, Bloomberg, Euronews and other media organizations.',
      statement: [
        'I am interested not only in what is happening to the country during the war. I am interested in what is happening to the person.',
        'How they change. What they lose. What they find. And how exactly new culture is born in a moment when the world seems to be falling apart.',
        'At the centre of each story is a real person with their fears, doubts, losses, hopes and inner changes.',
        'Every hero lives through their own path of transformation. We believe that culture is as important a part of national resilience as the army, diplomacy or economy.',
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
      subtitle: 'Авторський документальний проєкт про покоління війни,\nяке формує культуру, пам\'ять та сенси майбутнього.\n\nОсобисті історії українських військових, які залишаються митцями.',
      note: 'Створено за підтримки Українського культурного фонду',
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
      details: 'Докладніше',
      audioDesc: 'Тифлокоментар',
      english: 'English',
      subtitles: 'Субтитри',
      featured: 'Актуальне',
    },
    episode_modal: {
      watch: 'Дивитися на YouTube →',
      close: 'Закрити',
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
      manifesto: 'Нова Україна народжується зараз. Це покоління, яке одночасно воює і творить, захищає і переосмислює — і формує нову культуру, нову пам\'ять та нові сенси просто зараз, поки все це відбувається на наших очах.',
      paragraphs: [
        '«Новий коd_» — авторський цикл документальних фільмів про українських військових, які були митцями у мирному житті та не втратили здатності творити під час війни. Проєкт створений режисеркою та журналісткою Мариною Чанковою за підтримки Українського культурного фонду та партнерів.',
        'У центрі кожної історії — людина. Не герой із плаката. Не символ. А жива людина зі своїми страхами, сумнівами, втратами, надіями та внутрішніми змінами. Кожен герой проживає власний шлях трансформації.',
        'Ми спостерігаємо, як музикант стає командиром дронів, поет працює на мінометній позиції, кінооператор керує безпілотними системами, а художниця поєднує військову службу з материнством і творчістю.',
      ],
      importance: 'Культура під час війни — це не розкіш. Це спосіб вижити. Нові тексти пишуться між бойовими виходами. Нова музика народжується в бліндажах. Нові картини створюються на фронті. Ми переконані, що культура є такою ж важливою частиною національної стійкості, як армія, дипломатія чи економіка.',
      text: '«Новий коd_» — авторський цикл документальних фільмів про українських військових, які були митцями у мирному житті та не втратили здатності творити під час війни.',
    },
    contact: {
      title: 'Контакти',
      email: 'novyikod.ua@gmail.com',
      phone: '+38 (050) 430 44 15',
      namePlaceholder: 'Ваше ім\'я',
      emailPlaceholder: 'Ваш email',
      messagePlaceholder: 'Повідомлення',
      submit: 'Надіслати',
      subscribe: 'Підписатися',
      subscribePlaceholder: 'Ваш email',
    },
    production: {
      blocks: [
        { label: 'Географія', text: 'Зйомки відбувалися в різних регіонах України: Київщина, Харківщина, Донеччина. Частина матеріалу створена безпосередньо під час бойових чергувань і ротацій.' },
        { label: 'Метод', text: 'Документальне спостереження без постановочних сцен. Камера залишається поруч із людиною в її реальному середовищі, фіксуючи тишу, сумнів і момент внутрішнього вибору.' },
        { label: 'Команда', text: 'Незалежна авторська команда документалістів, операторів, журналістів і продюсерів з досвідом реалізації воєнних, гуманітарних та культурних проєктів.' },
        { label: 'Довіра', text: 'Основою проєкту стала довіра. Робота над кожним героєм тривала від кількох тижнів до кількох місяців. Саме завдяки цій довірі команда могла бути поруч у найважливіші моменти.' },
      ],
    },
    footer: {
      rights: 'Новий коd_. Усі права захищені.',
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
      subtitle: 'An authored documentary project about a generation of war\nthat shapes culture, memory and the meanings of the future.\n\nPersonal stories of Ukrainian servicemen who remain artists.',
      note: 'Created with the support of the Ukrainian Cultural Fund',
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
      details: 'More details',
      audioDesc: 'Audio Description',
      english: 'English',
      subtitles: 'Subtitles',
      featured: 'Featured',
    },
    episode_modal: {
      watch: 'Watch on YouTube →',
      close: 'Close',
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
      manifesto: 'A new Ukraine is being born right now. This is a generation that simultaneously fights and creates, defends and reimagines — shaping new culture, new memory and new meaning as it all unfolds before our eyes.',
      paragraphs: [
        '"New Code" is an authored cycle of documentary films about Ukrainian servicemen who were artists in peacetime and have not lost their ability to create during the war. The project was created by documentary filmmaker and journalist Maryna Chankova, supported by the Ukrainian Cultural Fund and partners.',
        'At the centre of each story is a real person — not a poster hero, not a symbol. A living person with their own fears, doubts, losses, hopes and inner changes. Every hero lives through their own path of transformation.',
        'We observe how a musician becomes a drone unit commander, a poet works at a mortar position, a cinematographer operates unmanned systems, and an artist combines military service with motherhood and creativity.',
      ],
      importance: 'Culture in wartime is not a luxury. It is a way to survive. New texts are written between combat missions. New music is born in dugouts. New paintings are created at the front. We believe that culture is as important a part of national resilience as the army, diplomacy or economy.',
      text: '"New Code" is an authored cycle of documentary films about Ukrainian servicemen who were artists in peacetime and have not lost their ability to create during the war.',
    },
    contact: {
      title: 'Contact',
      email: 'novyikod.ua@gmail.com',
      phone: '+38 (050) 430 44 15',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Message',
      submit: 'Send',
      subscribe: 'Subscribe',
      subscribePlaceholder: 'Your email',
    },
    production: {
      blocks: [
        { label: 'Geography', text: 'Filming took place across different regions of Ukraine: Kyiv region, Kharkiv region, Donetsk region. Part of the material was created directly during combat shifts and rotations.' },
        { label: 'Method', text: 'Observational documentary without staged scenes. The camera stays with the person in their real environment, capturing silence, doubt and the moment of inner choice.' },
        { label: 'Team', text: 'An independent creative team of documentary filmmakers, cinematographers, journalists and producers with experience in conflict, humanitarian and cultural projects.' },
        { label: 'Trust', text: 'The foundation of the project was trust. Work with each hero lasted from several weeks to several months. This trust allowed the team to be present in the most important moments.' },
      ],
    },
    footer: {
      rights: 'New Code. All rights reserved.',
    },
  },
}
