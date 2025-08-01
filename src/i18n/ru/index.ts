export default {
  titleMeta: "Екатерина Куркина | Портфолио фронт-енд разработчика",
  descriptionMeta: "Здесь я представляю свои работы, которые выполняла в течение " +
    "своего пути как фронт-енд разработчик. Моё портфолио включает в " +
    "себя разнообразные проекты, которые я создавала для клиентов и личных " +
    "проектов. Для меня очень важно, чтобы каждый проект, над которым я " +
    "работаю, был уникальным и отвечал потребностям клиента. " +
    "Надеюсь, что вы оцените мои работы и найдёте здесь что-то интересное " +
    "для себя!",
  name: "Екатерина Куркина",
  position: "Фронт-енд разработчик",
  home: "Главная",
  resume: "Резюме",
  menu: "Меню",
  welcome: "Добро пожаловать!",
  description: "Здесь я представляю свои работы, которые выполняла в течение " +
    "своего пути как <b>фронт-енд разработчик</b>. Моё портфолио включает в " +
    "себя разнообразные проекты, которые я создавала для <b>клиентов и личных " +
    "проектов</b>. Для меня очень важно, чтобы каждый проект, над которым я " +
    "работаю, был <b>уникальным</b> и <b>отвечал потребностям клиента</b>. " +
    "Надеюсь, что вы оцените мои работы и найдёте здесь что-то <b>интересное " +
    "для себя</b>!",
  page404: "Страница 404",
  portfolio: "Портфолио",
  seeMore: "Все",
  seeMoreProject: "Больше моих работ",
  contacts: "Контакты",
  error404: "Страницы не существует",
  toHome: "На Главную",
  myProjects: "Мои проекты",
  byDefault: "По умолчанию",
  byName: "По имени",
  resumeFile: "Файл резюме",
  profile: "Обо мне",
  experience: "Опыт работы",
  education: "Образование",
  skills: "Навыки",
  year: "г.",
  months: "мес.",
  website: "Перейти на сайт",
  previous: "Назад",
  next: "Далее",
  share: "Поделиться ссылкой",
  copyLink: "или скопируйте ссылку",
  successLink: "Ссылка скопирована!",
  errorLink: "Не удалось скопировать ссылку",
  moreInfo: "Подробнее",
  projectsData: [
    {
      id: 1,
      title: 'Сайт "ИП Сидоров"',
      slug: 'smaip',
      description: 'Этот веб-сайт был специально создан для ИП Сидорова, для того ' +
        'чтобы привлечь внимание новых клиентов, которые заинтересованы в услугах, ' +
        'предоставляемых этой компанией. На сайте можно найти разделы, содержащие ' +
        'контактную информацию, вакансии и документы, которые помогут получить всю ' +
        'необходимую информацию о компании и ее деятельности. Сайт был создан с ' +
        'использованием фреймворка Bootstrap и оформлен в светлых тонах, которые ' +
        'придают ему современный и профессиональный вид.',
      image: '/images/projects/smaip/1.png',
      images: [
        '/images/projects/smaip/1.png',
        '/images/projects/smaip/2.png',
        '/images/projects/smaip/3.png'
      ],
      link: ['Design', 'Front-end'],
      linkToGit: 'https://github.com/Kaylle/smaip',
      badges: [
        'HTML5',
        'CSS3',
        'Bootstrap 5.1'
      ]
    },
    {
      id: 2,
      title: 'Личный кабинет "ИП Сидоров"',
      slug: 'lk',
      description: 'ИП Сидоров предоставляет услуги по вывозу некондиционной ' +
        'продукции на корм животных. Во время сотрудничества клиенты ежедневно ' +
        'отправляют накладные и фото продукции, а менеджеры в свою очередь ' +
        'прикрепляют их в систему Битрикс24 к нужному магазину. Это отнимает ' +
        'много времени, и было принято решение об автоматизации этих процессов. ' +
        'В личном кабинете клиенты могут увидеть основную информацию о магазинах, ' +
        'в которых они забирают продукцию. Также существуют разделы для прикрепления ' +
        'фотографий и накладных к магазину и другой функционал. Это был мой первый ' +
        'серьезный проект, дизайн которого я разрабатывала сама, а также выбирала ' +
        'инструменты для разработки. После внедрения этого продукта я собирала ' +
        'обратную связь и дорабатывала функционал. Такой опыт очень сильно прокачал ' +
        'мои soft-skills.',
      image: '/images/projects/lk/cover.png',
      images: [
        '/images/projects/lk/1.png',
        '/images/projects/lk/2.png',
        '/images/projects/lk/3.png'
      ],
      link: ['Design', 'Front-end'],
      linkToGit: 'https://github.com/Kaylle/smaip_lk',
      linkToFigma: 'https://www.figma.com/design/E4B8g1TTJcOvg5n8kQLNvP/LK_SMAIP?node-id=0-1&t=ffRVmb26cyzkcsza-0',
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
      title: 'ИСА - CRM Информационной системы академии',
      slug: 'isa',
      description: 'Проект по разработке CRM Информационной системы академии. ' +
        'Компания “ООО Информационные технологии” предоставляет услуги по обучению ' +
        'детей курсам по программированию. Менеджеры и преподаватели столкнулись ' +
        'с тем, что им не подходят многие CRM системы для ведения учета. Для таких ' +
        'целей решили разработать свою систему ИСА. Этот проект начинался до моего ' +
        'прихода в компанию, но был задвинут в “дальний угол”. Мне он показался ' +
        'интересным, и по моей инициативе проект был возобновлен. Я разработала ' +
        'дизайн в Figma и приступила к переписыванию старых наработок. Мне ' +
        'пришлось обновлять проект с Vue2 на Vue3 и также обновлять версию с ' +
        'фреймворка Quasar. В ИСА есть такие разделы, как Расписание, Клиенты, ' +
        'Лиды, Задачи, Финансы и многие другие. На данный момент компания ' +
        'пытается подать документы на регистрацию ПО и стать вендором.',
      image: '/images/projects/isa/cover.png',
      images: [
        '/images/projects/isa/1.png',
        '/images/projects/isa/2.png',
        '/images/projects/isa/3.png',
        '/images/projects/isa/4.png',
        '/images/projects/isa/5.png',
        '/images/projects/isa/6.png'
      ],
      link: ['Design', 'Lead Front-end'],
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
      title: 'Платформа для курсов “Quantum”',
      slug: 'quantum',
      description: 'Проект платформы для курсов Quantum был начат до моего прихода ' +
        'в компанию “ООО Информационные технологии”. Изначально этот проект был ' +
        'связан с другим (ИСА), и поэтому было принято решение оставить мой дизайн ' +
        'с предыдущего проекта, добавив небольшие правки. Я выбрала более теплую ' +
        'цветовую палитру и решила сменить круглые элементы на квадратные с ' +
        'небольшим скруглением. Я в этом проекте являюсь ведущим ' +
        'фронт-енд разработчиком, который ведет план разработки и помогает другому ' +
        'фронте-нду стажеру. Это мой первый опыт ведения проекта в качестве ' +
        'ведущего фронт-енд разработчика.',
      image: '/images/projects/quantum/cover.png',
      images: [
        '/images/projects/quantum/1.png',
        '/images/projects/quantum/2.png',
        '/images/projects/quantum/3.png',
        '/images/projects/quantum/4.png',
        '/images/projects/quantum/5.png'
      ],
      link: ['Design', 'Lead Front-end'],
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
      title: '"Кабинет Заказчика" для HR CRM',
      slug: 'hr',
      description: '"Кабинет Заказчика" для HR CRM - это отдельный интерфейс для ' +
        'менеджеров, который должен дать возможность добавить заявку, увидеть свои ' +
        'встречи с кандидатами и оставить информацию о встрече по каждому кандидату. ' +
        'В нем есть разделы: "Календарь" с предстоящими собеседованиями, "Аккаунт" ' +
        'и "Заявки" - где заявки на подбор персонала представлены в табличном виде.',
      image: '/images/projects/hr/1.png',
      images: [
        '/images/projects/hr/1.png'
      ],
      link: ['Front-end'],
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
      id: 6,
      title: 'Telemilk - Биржа для рекламы в Telegram',
      slug: 'telemilk',
      description: 'Биржи покупки/продажи нативной рекламы в Телеграм позволяют ' +
        'владельцам каналов и рекламодателям находить друг друга и оформлять ' +
        'сделки в удобном интерфейсе. Именно таким проектом я и занималась. У ' +
        'нас была команда из пяти человек: Владелец проекта, Проект-менеджер, ' +
        'Бек-енд разработчик, Дизайнер и Фронт-енд разработчик (я).',
      image: '/images/projects/telemilk/1.png',
      images: [
        '/images/projects/telemilk/2.png',
        '/images/projects/telemilk/3.png',
        '/images/projects/telemilk/4.png',
        '/images/projects/telemilk/5.png'
      ],
      link: ['Front-end'],
      badges: [
        'Vue3',
        'Vue-router',
        'VUEX',
        'SCCS',
        'TS'
      ]
    },
    {
      id: 7,
      title: 'Программа лояльности "Space Bonus"',
      slug: 'sb',
      description: 'Программа лояльности — основной модуль экосистемы для ' +
        'стимулирования и поощрения постоянных клиентов, который основан на ' +
        'предоставлении скидки или бонусов за покупки в компании. Я работала ' +
        'над продуктом, идея которого - предоставлять возможность компаниям ' +
        'настраивать свою систему скидок и программы лояльности и отслеживать ' +
        'статистику по привлечению новых клиентов за счет такого маркетинга.',
      image: '/images/projects/sb/1.png',
      images: ['/images/projects/sb/1.png'],
      link: ['Lead Front-end'],
      badges: [
        'Vue3',
        'Quasar',
        'Vue-router',
        'VUEX',
        'SCCS',
        'TS'
      ]
    },
    {
      id: 8,
      title: 'Корпоративный сайт для ООО “Информационные технологии”',
      slug: 'intech',
      description: 'В нашей компании "ООО Информационные технологии" возникла ' +
        'потребность создать корпоративный сайт. Мне было поручено предоставить ' +
        'варианты дизайна лендинга и сверстать его. После представленных вариантов, ' +
        'был выбран тот, который в итоге и был реализован. Сайт выполнен в темной ' +
        'теме. Так же на сайте есть функционал, отправляющий данные из форм в CRM ' +
        'Bitrix24.',
      image: '/images/projects/intech/cover.png',
      images: [
        '/images/projects/intech/1.png',
        '/images/projects/intech/2.png',
        '/images/projects/intech/3.png',
      ],
      link: ['Design','Lead Front-end'],
      linkToSite: 'https://intech.global/',
      badges: [
        'Figma',
        'Vue3',
        'Quasar',
        'Vue-router',
        'SCCS',
        'JS'
      ]
    }
  ],
  resumeData: {
    fio: 'Куркина Екатерина Евгеньевна',
    position: 'Фронт-енд разработчик',
    city: 'Санкт-Петербург, Россия | Готова к переезду | Удаленная работа',
    phone: '+7 (996) 590-14-45',
    email: 'kaylle@yandex.ru',
    linkedin: 'https://www.linkedin.com/in/kaylle',
    github: 'https://github.com/kaylle',
    birthday: '9 января 2000 г.',
    about: 'Я обожаю играть в <b>компьютерные игры</b>, и это хобби приносит мне ' +
      'не только удовольствие, но и помогает развивать навыки, которые могу ' +
      'использовать в профессиональной сфере. Кроме того, я регулярно занимаюсь ' +
      '<b>танцами</b>, чтобы поддерживать свою форму и здоровье. Я также имею ' +
      'некоторый опыт работы с <b>нейронными сетями</b>. Например, я использовала ' +
      '<b>Midjourney для создания дизайна</b> своего портфолио-сайта. Моей мечтой ' +
      'является работа в <b>крупной и прогрессивной компании</b>. Я стремлюсь ' +
      'стать <b>активным участником</b> жизни компании и принимать участие в ' +
      'различных проектах. Я уверена, что это поможет мне расти как <b>профессионал ' +
      'и как личность</b>.',
    experience: [
      {
        period: 'Май 2022 — по настоящее время',
        totalPeriod: null,
        company: {
          name: 'ООО "Информационные технологии"',
          city: 'Сыктывкар',
          website: 'it-rkomi.ru'
        },
        position: 'Фронт-енд разработчик',
        description: 'На моем текущем месте работы у меня есть множество задач и проектов, над которыми я активно тружусь. ' +
          'В настоящее время я веду <b>4 проекта</b>, в трёх я выступаю <b>ведущим фронт-енд разработчиком</b>. Кроме ' +
          'этого, я также <b>курирую стажера по фронтенду</b>, помогая ему развиваться в своей работе. Мой <b>стек ' +
          'технологий</b> включает в себя такие популярные инструменты, как <b>Vue3, Pinia, Vue-router, Quasar-framework, ' +
          'Docker и Node</b>. Я также работаю с такими программами и приложениями, как <b>WebStorm, Figma, Postman и ' +
          'Notion</b>. В прошлом я проявляла инициативу в <b>отрисовке и вёрстке дизайна</b> для двух смежных проектов. ' +
          'Все шаблоны и вёрстку обязательно делаю адаптивными. Так же занималась вёрсткой по шаблонам других дизайнеров ' +
          'из Фигмы.'
      },
      {
        period: 'Август 2020 — Май 2022',
        totalPeriod: '1 г. 10 мес.',
        company: {
          name: 'ИП "Сидоров МА"',
          city: 'Сыктывкар',
          website: 'www.smaip.ru'
        },
        position: 'IT специалист',
        description: 'Мои обязанности на <b>предыдущей работе</b> включали работу с <b>бизнес-процессами Bitrix24</b>, ' +
          'в том числе написание <b>кастомных активностей</b>. Я также занималась выгрузкой и загрузкой данных из ' +
          'Битрикса с помощью <b>CREST API на PHP и JavaScript</b>, что помогало мне автоматизировать рутинные задачи и ' +
          'сокращать время их выполнения. Кроме того, я работала с <b>загрузкой статистики в таблицы SQL</b> и выводом ' +
          'данных из Битрикса и таблиц SQL на свёрстанные HTML страницы. Это требовало от меня знаний <b>HTML5, CSS3, ' +
          'JavaScript(ES6+)</b> и умения работать с различными типами данных. Мне также приходилось <b>создавать ' +
          'инструменты</b> (веб-приложения) для менеджеров, которые позволяли им эффективно справляться с задачами, что ' +
          'повышало производительность. Это требовало от меня умения разрабатывать интуитивно <b>понятный интерфейс</b> ' +
          'и учитывать потребности <b>конечного пользователя</b>. Наконец, я работала над созданием <b>личного кабинета</b> ' +
          'для клиентов с собственным дизайном и адаптивной вёрсткой на <b>Vue3</b>. Это позволяло клиентам управлять ' +
          'своими аккаунтами и более удобно взаимодействовать с нашими услугами (продажа вторсырья для фермеров). Работа ' +
          'над этим проектом требовала от меня <b>глубоких знаний в области фронт-енд разработки</b> и умения создавать ' +
          '<b>сложные интерфейсы</b>.'
      }
    ],
    tags: [
      'HTML5',
      'CSS3',
      'Sass',
      'SCSS',
      'Git',
      'SQL',
      'JavaScript',
      'TypeScript',
      'Docker',
      'Vue3',
      'Vue-Router',
      'Pinia',
      'SSR',
      'Websockets',
      'Webpack',
      'Vite',
      'Node.js',
      'Nginx',
      'Figma',
      'Jest'
    ],
    education: {
      type: 'Среднее профессиональное образование',
      organization: 'Сыктывкарский кооперативный техникум (2020)',
      qualification: 'Прикладная информатика, Техник-программист'
    }
  },
  contactInfo: [
    {
      icon: 'eva-email-outline',
      text: 'kaylle@yandex.ru',
      link: 'mailto:kaylle@yandex.ru'
    },
    {
      icon: 'eva-phone-outline',
      text: '+7 (996) 590-14-45',
      link: 'tel:79965901445'
    },
    {
      icon: 'eva-linkedin-outline',
      text: '@kaylle',
      link: 'https://www.linkedin.com/in/kaylle'
    },
    {
      icon: 'eva-github-outline',
      text: 'github.com/kaylle',
      link: 'https://github.com/kaylle'
    },
    {
      icon: 'eva-pin-outline',
      text: 'Санкт-Петербург, Россия'
    },
    {
      icon: 'eva-pin-outline',
      text: 'Готова к переезду | Удаленная работа'
    }
  ]
};
