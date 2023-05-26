// gitprofile.config.js

const config = {
  github: {
    username: 'Roge-l', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'Roge-l',
    twitter: 'roge_lam',
    facebook: 'roger.lam.jh',
    instagram: 'roge.lam',
    phone: '306 250 3681',
    email: 'roger.l.jiahao@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'Python',
    'HTML',
    'CSS',
    'Java',
    'SQL',
    'React.js',
    'FastAPI',
    'Django',
    'Express',
    'Node.js',
    'C++',
    'R',
  ],
  experiences: [
    {
      company: 'ServiceMiner',
      position: 'Software Developer',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://research.utoronto.ca/technology-opportunities/db/serviceminer-transforming-process-data-actionable-insights',
    },
    {
      company: 'Canvass AI',
      position: 'Software Engineering Intern',
      from: 'May 2022',
      to: 'May 2023',
      companyLink: 'https://www.canvass.io/',
    },
    {
      company: 'Mediacorp Canada Inc.',
      position: 'Programmer',
      from: 'May 2021',
      to: 'May 2022',
      companyLink: 'https://www.mediacorp.ca/',
    },
    {
      company: 'Translational Research Program',
      position: 'Webmaster',
      from: 'Oct 2022',
      to: 'May 2021',
      companyLink: 'https://trp.utoronto.ca/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Toronto - St. George Campus',
      degree: 'Bachelor of Science',
      from: '2019',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'GroupChatPhase',
      description:
        'Make video proposals to schedule and vote and hangout times.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://devpost.com/software/group-chat-phase/',
    },
    {
      title: 'RobinGood',
      description:
        'Invest your money on a democratic and community-based investment platform.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/Roge-L/RobinGood/',
    },
    {
      title: 'Throwback Shack',
      description:
        'Discover the top 10 songs of any given year.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://roge-l.github.io/throwback-shack/',
    },
  ],
//   // Display blog posts from your medium or dev account. (Optional)
//   blog: {
//     source: 'dev', // medium | dev
//     username: 'arifszn', // to hide blog section, keep it empty
//     limit: 2, // How many posts to display. Max is 10.
//   },
//   googleAnalytics: {
//     id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
//   },
//   // Track visitor interaction and behavior. https://www.hotjar.com
//   hotjar: {
//     id: '',
//     snippetVersion: 6,
//   },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

//   // Optional Footer. Supports plain text or HTML.
//   footer: `Made with <a 
//       class="text-primary" href="https://github.com/arifszn/gitprofile"
//       target="_blank"
//       rel="noreferrer"
//     >GitProfile</a> and ❤️`,
};

export default config;
