// gitprofile.config.js

const config = {
  github: {
    username: 'Roge-l', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['roge-l.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
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
      'https://drive.google.com/file/d/1VPHrr_I2uFurWRtlU4fpHRJvuZNxv_jm/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Usability Testing',
    'Market Research',
    'Figma',
    'Git',
    'Agile Development',
    'SQL',
    'Digital Marketing',
    'Python',
    'R'
  ],
  experiences: [
    {
      company: 'ServiceMiner',
      position: 'Software Developer',
      from: 'May 2023',
      to: 'July 2023',
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
  certifications: [
    {
      name: 'Meta Certified Digital Marketing Associate',
      body: 'Foundational proficiency in the skills, tools, advertising policies and best practices required to buy ads on the Facebook App, Instagram and Messenger.',
      year: 'July 2023',
      link: 'https://www.credly.com/badges/1649f148-6ce8-4246-bbfa-4809f4ad234d/public_url'
    },
    {
      name: 'Software Processes and Agile Practices',
      body: 'Learn and distinguish process models used in Software Development and apply the fundamentals of Agile software development and management practices.',
      year: 'August 2023',
      link: 'https://coursera.org/share/3522ae5cfddc9f9b86a65d2e642bdc4d'
    },
  ],
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
      title: 'LSM Key-Value Store',
      description:
        'Log-structured merge-tree key-value store with Bloom filters.',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/004/657/673/small/database-line-style-icon-free-vector.jpg',
      link: 'https://github.com/Roge-L/lsm-kv-store',
    },
    {
      title: 'Extent-Based File System',
      description:
        'Extent-based file system using first-fit data allocation.',
      imageUrl: 'https://www.researchgate.net/profile/Amar-More-2/publication/281446266/figure/fig2/AS:284599952396289@1444865324121/Extent-tree-for-sparse-file-in-EXT4-file-system.png',
      link: 'https://github.com/Roge-L/extent-based-fs',
    },
    {
      title: 'Throwback Shack',
      description:
        'Discover the top 10 songs of any given year.',
      imageUrl: 'https://www.usmagazine.com/wp-content/uploads/2021/01/The-Weeknd-Save-Your-Tears-Plastic-Surgery-Look-Is-Prosthetics-Feature.jpg?w=700&quality=86&strip=all',
      link: 'https://roge-l.github.io/throwback-shack/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

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
      'retro',
      'valentine',
      'halloween',
      'garden',
      'forest',
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
      'night',
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
