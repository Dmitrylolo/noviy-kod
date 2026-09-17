import type { Lang, TeamMember } from '../types'

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
      { name: 'Антон Печатнов, Артем Терещенко, Станіслав Ткачов, Дмитро Муленко, Дмитро Чуб', role: 'Оператори-постановники' },
      { name: 'Віталій Ляшко, Артем Стромаков, Василь Вишняков', role: 'Монтаж' },
      { name: 'Андрій Танабаш', role: 'Продюсер' },
      { name: 'Дар\'я Чупрун', role: 'Фотографиня' },
      { name: 'Дмитро Чистяков', role: 'Редактор' },
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
      { name: 'Anton Pechatnov, Artem Tereshchenko, Stanislav Tkachov, Dmytro Mulenko, Dmytro Chub', role: 'Cinematographers' },
      { name: 'Vitaliy Lyashko, Artem Stromakov, Vasyl Vyshniakov', role: 'Editors' },
      { name: 'Andrii Tanabash', role: 'Producer' },
      { name: 'Daria Chuprun', role: 'Photographer' },
      { name: 'Dmytro Chistiakov', role: 'Story Editor' },
    ],
  },
}
