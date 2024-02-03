const data = [
  {
    id: 1,
    title: 'Сайт ИП Сидоров',
    slug: 'smaip',
    description: 'Этот веб-сайт был специально создан для ИП Сидорова, для того чтобы привлечь внимание новых клиентов, которые заинтересованы в услугах, предоставляемых этой компанией. На сайте можно найти разделы, содержащие контактную информацию, вакансии и документы, которые помогут получить всю необходимую информацию о компании и ее деятельности. Сайт был создан с использованием фреймворка Bootstrap и оформлен в светлых тонах, которые придают ему современный и профессиональный вид.',
    image: '/images/projects/smaip/1.png',
    images: [
      '/images/projects/smaip/1.png'
    ],
    link: ['Design', 'Frontend'],
    badges: [
      'HTML5',
      'CSS3',
      'Bootstrap 5.1'
    ]
  },
  {
    id: 2,
    title: 'Личный кабинет ИП Сидоров',
    slug: 'lk',
    description: 'ИП Сидоров предоставляет услуги по вывозу некондиционной продукции на корм животных. Во время сотрудничества клиенты ежедневно отправляют накладные и фото продукции, а менеджеры в свою очередь прикрепляют их в систему Битрикс24 к нужному магазину. Это отнимает много времени, и было принято решение об автоматизации этих процессов. В личном кабинете клиенты могут увидеть основную информацию о магазинах, в которых они забирают продукцию. Также существуют разделы для прикрепления фотографий и накладных к магазину и другой функционал. Это был мой первый серьезный проект, дизайн которого я разрабатывала сама, а также выбирала инструменты для разработки. После внедрения этого продукта я собирала обратную связь и дорабатывала функционал. Такой опыт очень сильно прокачал мои soft-skills.',
    image: '/images/projects/lk/1.png',
    images: [
      '/images/projects/lk/1.png'
    ],
    link: ['Design', 'Frontend'],
    badges: [
      'Vue3',
      'Vue-router',
      'VUEX',
      'SCCS',
      'JS',
      'Bootstrap 5.1',
      'Figma'
    ]
  },
  {
    id: 3,
    title: 'ISA - Информационная система академии',
    slug: 'isa',
    description: 'Проект по разработке CRM Информационной системы академии. Компания “ООО Информационные технологии” предоставляет услуги по обучению детей курсам по программированию. Менеджеры и преподаватели столкнулись с тем, что им не подходят многие CRM системы для ведения учета. Для таких целей решили разработать свою систему ИСА. Этот проект начинался до моего прихода в компанию, но был задвинут в “дальний угол”. Мне он показался интересным, и по моей инициативе проект был возобновлен. Я разработала дизайн в Figma и приступила к переписыванию старых наработок. Мне пришлось обновлять проект с Vue2 на Vue3 и также обновлять версию с фреймворка Quasar. В ИСА есть такие разделы, как Расписание, Клиенты, Лиды, Задачи, Финансы и многие другие. На данный момент компания пытается подать документы на регистрацию ПО и стать вендором.',
    image: '/images/projects/isa/1.png',
    images: ['/images/projects/isa/1.png'],
    link: ['Design', 'Main-frontend'],
    badges: [
      'Vue3',
      'Quasar',
      'Vue-router',
      'VUEX',
      'SCCS',
      'JS',
      'Websocket',
      'Figma'
    ]
  },
  {
    id: 4,
    title: 'Quantum - платформа для курсов',
    slug: 'quantum',
    description: 'Проект платформы для курсов Quantum был начат до моего прихода в компанию “ООО Информационные технологии”. Изначально этот проект был связан с другим (ИСА), и поэтому было принято решение оставить мой дизайн с предыдущего проекта, добавив небольшие правки. Я выбрала более теплую цветовую палитру и решила сменить круглые элементы на квадратные с небольшим скруглением. Я в этом проекте являюсь ведущим фронтенд-разработчиком, который ведет план разработки и помогает другому фронтенду-стажеру. Это мой первый опыт ведения проекта в качестве ведущего фронтенд-разработчика.',
    image: '/images/projects/quantum/1.png',
    images: ['/images/projects/quantum/1.png'],
    link: ['Design', 'Main-frontend'],
    badges: [
      'Vue3',
      'Quasar',
      'Vue-router',
      'VUEX',
      'SCCS',
      'JS',
      'Websocket',
      'Figma'
    ]
  },
  {
    id: 5,
    title: 'Мерч для компании "ООО Intech"',
    slug: 'intech',
    description: 'В нашей компании "ООО Информационные технологии" возникла идея заказать брендированную одежду с логотипом компании. Мне было поручено предоставить варианты с внутренним логотипом, который должен быть максимально простым, но в то же время информативным и минималистичным. Я решила использовать инструмент Pen в Фигме и нарисовать логотип вручную, чтобы добиться максимальной точности и детализации. Я уверена, что такой логотип станет отличным способом привлечения внимания к нашей компании и подчеркнет ее инновационный и современный характер.',
    image: '/images/projects/intech/1.png',
    images: ['/images/projects/intech/1.png'],
    link: ['Design'],
    badges: [
      'Figma'
    ]
  },
  {
    id: 6,
    title: 'HR CRM - Кабинет заказчика',
    slug: 'hr',
    description: '"Кабинет Заказчика" для HR CRM - это отдельный интерфейс для менеджеров, который должен дать возможность добавить заявку, увидеть свои встречи с кандидатами и оставить информацию о встрече по каждому кандидату. В нем есть разделы: "Календарь" с предстоящими собеседованиями, "Аккаунт" и "Заявки" - где заявки на подбор персонала представлены в табличном виде.',
    image: '/images/projects/hr/1.png',
    images: ['/images/projects/hr/1.png'],
    link: ['Frontend'],
    badges: [
      'Vue3',
      'Quasar',
      'Vue-router',
      'VUEX',
      'SCCS',
      'JS',
      'Websocket'
    ]
  },
  {
    id: 7,
    title: 'Telemilk - Рекламная биржа Telegram',
    slug: 'telemilk',
    description: 'Биржи покупки/продажи нативной рекламы в Телеграм позволяют владельцам каналов и рекламодателям находить друг друга и оформлять сделки в удобном интерфейсе. Именно таким проектом я и занималась. У нас была команда из пяти человек: Владелец поекта, Проект-менеджер, Бекенд разработчик, Дизайнер и Фронтенд разработчик (я).',
    image: '/images/projects/telemilk/1.png',
    images: ['/images/projects/telemilk/1.png'],
    link: ['Frontend'],
    badges: [
      'Vue3',
      'Vue-router',
      'VUEX',
      'SCCS',
      'TS'
    ]
  },
  {
    id: 8,
    title: 'Space Bonus - система лояльности',
    slug: 'sb',
    description: 'Программа лояльности — основной модуль экосистемы для стимулирования и поощрения постоянных клиентов, который основан на предоставлении скидки или бонусов за покупки в компании. Я работала над продуктом, идея которого - предоставлять возможность компаниям настраивать свою систему скидок и программы лояльности и отслеживать статистику по привлечению новых клиентов за счет такого маркетинга.',
    image: '/images/projects/sb/1.png',
    images: ['/images/projects/sb/1.png','/images/projects/lk/1.png','/images/projects/isa/1.png'],
    link: ['Main-frontend'],
    badges: [
      'Vue3',
      'Quasar',
      'Vue-router',
      'VUEX',
      'SCCS',
      'TS'
    ]
  }
]

const resume = {
  fio: 'Куркина Екатерина Евгеньевна',
  position: 'Frontend-разработчик',
  city: 'Санкт-Петербург',
  phone: '+7 (996) 590-14-45',
  email: 'kaylle@yandex.ru',
  birthday: '9 января 2000 г.',
  about: 'Я обожаю играть в компьютерные игры, и этот хобби приносит мне не только удовольствие, но и помогает развивать навыки, которые могу использовать в профессиональной сфере. Кроме того, я регулярно занимаюсь физическими упражнениями в спортзале, чтобы поддерживать свою форму и здоровье. Я также имею некоторый опыт работы с нейронными сетями и даже использовала Midjourney для создания дизайна своего портфолио-сайта. Это должно позволить мне продемонстрировать свои навыки в области веб-дизайна и улучшить свои шансы на рынке труда. Моей мечтой является работа в крупной и прогрессивной компании. Я стремлюсь стать активным участником жизни компании и принимать участие в различных проектах. Это, в свою очередь, будет мотивировать меня искать новые знакомства и расширять свой круг общения в большом городе. Я уверена, что это поможет мне расти как профессионал и как личность.',
  resumeLink: 'https://spb.hh.ru/applicant/resumes/view?resume=83ff72eeff09b6e22f0039ed1f374148427970',
  experience: [
    {
      period: 'Май 2022 — по настоящее время',
      totalPeriod: null,
      company: {
        name: 'ООО Информационные Технологии',
        city: 'Сыктывкар',
        website: 'it-rkomi.ru'
      },
      position: 'Frontend-разработчик',
      description: 'На моем текущем месте работы у меня есть множество задач и проектов, над которыми я активно тружусь. В настоящее время я веду четыре проекта, в трёх я выступаю ведущим фронтенд-разработчиком. Кроме этого, я также курирую стажера по фронтенду, помогая ему развиваться в своей работе. Мой стек технологий включает в себя такие популярные инструменты, как Vue, Vuex, Vue-router, Quasar-framework, Docker и Node. Я также работаю с такими программами и приложениями, как WebStorm, Figma, Postman и Notion. В прошлом я проявляла инициативу в отрисовке и вёрстке дизайна для двух смежных проектов. Все шаблоны и вёрстку обязательно делаю адаптивными. Так же занималась вёрсткой по шаблонам других дизайнеров из фигмы. В рамках своей работы, я разрабатывала внутренний мерч для компании. Это включало в себя создание концепции дизайна худи и футболки в белой и чёрной вариациях.'
    },
    {
      period: 'Август 2020 — Май 2022',
      totalPeriod: '1 год 10 месяцев',
      company: {
        name: 'ИП Сидоров МА',
        city: 'Сыктывкар',
        website: 'www.smaip.ru'
      },
      position: 'IT-специалист',
      description: 'Мои обязанности на предыдущей работе включали работу с бизнес-процессами Bitrix24, в том числе написание кастомных активностей. Я также занималась выгрузкой и загрузкой данных из Битрикса с помощью CREST API на PHP и JavaScript, что помогало мне автоматизировать рутинные задачи и сокращать время их выполнения. Кроме того, я работала с загрузкой статистики в таблицы SQL и выводом данных из Битрикса и таблиц SQL на свёрстанные HTML страницы. Это требовало от меня знаний HTML5, CSS3, JavaScript(ES6+) и умения работать с различными типами данных. Мне также приходилось создавать инструменты (веб-приложения) для менеджеров, которые позволяли им эффективно справляться с задачами, что повышало производительность. Это требовало от меня умения разрабатывать интуитивно понятный интерфейс и учитывать потребности конечного пользователя. Наконец, я работала над созданием личного кабинета для клиентов с собственным дизайном и адаптивной вёрсткой на Vue3. Это позволяло моим клиентам управлять своими аккаунтами и более удобно взаимодействовать с нашими услугами(продажа вторсырья для фермеров). Работа над этим проектом требовала от меня глубоких знаний в области фронтенд-разработки и умения создавать сложные интерфейсы.'
    }
  ],
  tags: [
    'HTML5',
    'CSS3',
    'SQL',
    'Git',
    'PHP',
    'Sass',
    'VueJS',
    'JavaScript',
    'server-side rendering',
    'Vuex',
    'Figma',
    'SCSS',
    'Vue-Router',
    'Webpack',
    'Vite',
    'Websocket',
    'Bitrix Rest Api',
    'Bitrix24 Бизнес-процессы',
    'Node.js',
    'Nginx',
    'TypeScript',
    'Docker'
  ],
  education: {
    type: 'Среднее специальное образование',
    organization: 'Сыктывкарский кооперативный техникум (2020г)',
    qualification: 'Прикладная информатика, Техник-программист'
  }
}

export { data, resume }
