const projectsData = [
  {
    id: 1,
    title: 'Website "SP Sidorov"',
    slug: 'smaip',
    description: 'This website was specifically created for Sole Proprietor Sidorov to help attract \n' +
      'new clients interested in the company\'s services. It includes sections with \n' +
      'contact information, job vacancies, and important documents that provide detailed \n' +
      'insights into the company\'s operations. The site was built using the Bootstrap \n' +
      'framework and features a light color scheme, giving it a modern and professional \n' +
      'appearance.',
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
    title: 'Dashboard "SP Sidorov"',
    slug: 'lk',
    description: 'The company provides animal feed disposal services by collecting unsellable \n' +
      'goods. During cooperation, clients used to send invoices and product photos \n' +
      'daily, and managers would then manually attach them in Bitrix24 to the \n' +
      'appropriate store. This process was time-consuming, so we decided to automate it. \n' +
      'The client dashboard now allows users to view store details and upload photos and \n' +
      'invoices directly. This was my first major project, for which I designed the UI \n' +
      'entirely myself and chose the tech stack. After launch, I collected user feedback \n' +
      'and continued to improve the functionality, which significantly enhanced my soft \n' +
      'skills.',
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
    title: 'ISA - CRM System for the Academy',
    slug: 'isa',
    description: 'The company LLC “Information Technologies” offers programming courses for \n' +
      'children. Managers and teachers realized that most existing CRM systems did not \n' +
      'meet their needs, so the company decided to build its own CRM — ISA (Information \n' +
      'System of the Academy). Although the project had started before I joined the \n' +
      'company, it was eventually shelved. I found it interesting and revived it on my \n' +
      'own initiative. I created a new design in Figma and began rewriting the old \n' +
      'codebase, upgrading the project from Vue 2 to Vue 3, and also updating the Quasar \n' +
      'framework. ISA includes modules such as Schedule, Clients, Leads, Tasks, \n' +
      'Finances, and more. The company is currently working on registering the software \n' +
      'as an official product and becoming a vendor.',
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
    title: 'Course Platform “Quantum”',
    slug: 'quantum',
    description: 'This project was also started before I joined LLC “Information Technologies” and \n' +
      'was initially connected to the ISA CRM. We decided to reuse and adapt my existing \n' +
      'design with slight modifications. I chose a warmer color palette and changed \n' +
      'rounded elements to squares with subtle corner rounding. On this project, I’m \n' +
      'working as the lead front-end developer, responsible for project planning and \n' +
      'mentoring a front-end intern. This is my first experience leading a front-end \n' +
      'project.',
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
    title: 'Client Dashboard "HR CRM"',
    slug: 'hr',
    description: 'This is a custom interface for HR managers, allowing them to submit new requests, \n' +
      'view meetings with candidates, and record feedback for each candidate. The \n' +
      'interface includes sections like “Calendar” (with upcoming interviews), \n' +
      '“Account”, and “Requests”, where recruitment requests are organized in a tabular \n' +
      'format.',
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
    title: 'Telegram Native Ad Marketplace',
    slug: 'telemilk',
    description: 'Telegram ad marketplaces allow channel owners and advertisers to connect and \n' +
      'manage deals through a user-friendly interface. I worked on exactly such a \n' +
      'project. Our team consisted of five members: a project owner, project manager, \n' +
      'back-end developer, designer, and front-end developer (me).',
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
    title: 'Loyalty Program Module "Space Bonus"',
    slug: 'sb',
    description: 'A core module of a client ecosystem, this tool was designed to reward and retain \n' +
      'customers through discounts or bonuses for purchases. I worked on a system that \n' +
      'allows businesses to set up custom discount and loyalty rules and track marketing \n' +
      'performance, especially in terms of new client acquisition through loyalty \n' +
      'incentives.',
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
    title: 'Corporate Website for LLC “Information Technologies”',
    slug: 'intech',
    description: 'Our company needed a new corporate landing page, and I was tasked with designing \n' +
      'and developing it. I provided several design options, one of which was selected \n' +
      'and implemented. The final version features a dark theme and includes integration \n' +
      'with Bitrix24 CRM, sending form data directly to the system.',
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
]

const resume = {
  fio: 'Kurkina Ekaterina',
  position: 'Front-end developer',
  city: 'Saint-Petersburg, Russia | Open to relocation | Available for remote work',
  phone: '+7 (996) 590-14-45',
  email: 'kaylle@yandex.ru',
  linkedin: 'https://www.linkedin.com/in/kaylle',
  github: 'https://github.com/kaylle',
  birthday: 'January 9, 2000',
  about: 'I\'m passionate about <b>video games</b> — this hobby not only brings me joy ' +
    'but also helps me develop skills that I apply in my professional work. I ' +
    'also regularly practice <b>dancing</b> to stay in shape and maintain a ' +
    'healthy lifestyle. In addition, I have some experience with <b>neural ' +
    'networks</b> — for example, I used <b>Midjourney to design</b> this portfolio ' +
    'website. My dream is to work in a <b>large and progressive company</b> ' +
    'where I can be an <b>active contributor</b> to projects and team life. I’m ' +
    'sure this will help me grow both <b>professionally and personally</b>.',
  experience: [
    {
      period: 'May 2022 — present',
      totalPeriod: null,
      company: {
        name: 'LLS "Information Technologies"',
        city: 'Syktyvkar',
        website: 'it-rkomi.ru'
      },
      position: 'Front-end developer',
      description: 'At my current job, I’m involved in multiple tasks and projects. Right now, I’m ' +
        'leading <b>4 projects</b>, where I serve as the <b>lead front-end developer</b> on ' +
        'three of them. I also <b>mentor a front-end intern</b>, helping them improve and ' +
        'develop their skills. My <b>tech stack</b> includes widely used tools and ' +
        'frameworks such as <b>Vue 3, Pinia, Vue Router, Quasar Framework, Docker</b>, and ' +
        '<b>Node</b>. I work with <b>WebStorm, Figma, Postman</b>, and <b>Notion</b> on a ' +
        'daily basis. Previously, I took the initiative to <b>design and code UI/UX</b> for ' +
        'two related projects. All layouts I create are always <b>fully responsive</b>. I ' +
        'also implement designs from other <b>Figma</b> files provided by designers.'
    },
    {
      period: 'August 2020 — May 2022',
      totalPeriod: '1 year 10 months',
      company: {
        name: 'SP "Sidorov MA"',
        city: 'Syktyvkar',
        website: 'www.smaip.ru'
      },
      position: 'IT specialist',
      description: 'In my <b>previous role</b>, I worked with <b>Bitrix24 business processes</b>, ' +
        'including creating <b>custom activities</b>. I handled data import/export using ' +
        'the <b>CREST API</b> with <b>PHP</b> and <b>JavaScript</b>, which helped automate ' +
        'routine tasks and significantly reduce time spent on them. I also uploaded <b>' +
        'statistics into SQL tables</b> and displayed data from Bitrix and SQL on custom ' +
        'HTML pages. This required proficiency in <b>HTML5, CSS3</b>, and <b>JavaScript ' +
        '(ES6+)</b>, as well as working with various data types. I developed <b>internal ' +
        'tools</b> (web apps) for managers to help them complete tasks more efficiently — ' +
        'improving overall productivity. This involved designing <b>user-friendly ' +
        'interfaces</b> and understanding the needs of the <b>end user</b>. One of the key ' +
        'projects I worked on was a <b>client dashboard</b>, built with <b>Vue 3</b>, ' +
        'featuring a custom design and adaptive layout, allowing clients to manage their ' +
        'accounts and interact with our recycling services for farmers. This project ' +
        'required <b>deep front-end expertise</b> and the ability to create <b>complex UI ' +
        'components</b>.'
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
    type: 'Vocational Secondary Education',
    organization: 'Syktyvkar Cooperative College (2020)',
    qualification: 'Applied Informatics, Software Technician'
  }
}

const contactInfo = [
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
    text: 'Saint-Petersburg, Russia'
  },
  {
    icon: 'eva-pin-outline',
    text: 'Open to relocation | remote work'
  }
]

export { projectsData, resume, contactInfo }
