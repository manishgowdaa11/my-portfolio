import { Project, SkillCategory, RoadmapMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "Manish Gowda H",
  role: "CS & AIML Specialist",
  subRole: "Computer Science Student | AIML Enthusiast | Developer in Progress",
  tagline: "Turning Curiosity into Code, and Ideas into Reality.",
  bio: "Passionate about technology, programming, and building meaningful digital experiences. Currently exploring AI, web development, and the endless possibilities of code.",
  aboutExtended: "I'm a B.Tech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I enjoy exploring new technologies, developing practical applications, and transforming ideas into working solutions.",
  email: "contact@manishgowda.dev",
  github: "https://github.com",
  githubHandle: "@manishgowda",
  linkedin: "https://linkedin.com",
  linkedinHandle: "in/manish-gowda-h",
  college: "Dayananda Sagar College of Engineering", // standard top engineering context in Bengaluru
  semester: "3rd Semester (Active)",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  specialization: "Artificial Intelligence and Machine Learning",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuASZpU9mPchf3f1H_3MJg9uI72foTwGvpcbg2SqkVyRMp_l5sJ8a0hfX6iynIOffLyNZ192uRqrgfsOgBU6SJsEi5sSs2XJM2KP7A-L1Wzmfk0yaNPY-0iHrSICldgcwrjn_aSCIwUklxoduhN7_kpiu5HrLhNy0YNO-GyqxekL2vaXLN3wHrDcGNqZ7kbSsKCHe_Wz87pEvk8JBivNRKneqTTHC_eF0iUyrxT0lmE"
};

export const PROJECTS_DATA: Record<string, Project> = {
  'project-01': {
    id: 'project-01',
    projectNumber: 'PROJECT 01',
    category: 'WEB APPLICATION',
    status: 'Production Live',
    title: 'Personal Portfolio Website',
    tagline: 'Modern Glassmorphic Developer Hub with Responsive Component Layout',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtcaxJIgMOwgnd632KotOsWeYWzQVJ2fijJUAiyynwHopkZ_q-yptnneliGw2xFQO1Bq_LJ4bDR_1z-8Oh6UmrtXfqELlUiKZcLcRT_lH1Gi07TL6TKsp7voFbmmPUi_W5F5AGutU51n45VtRICqwPgzQQ03jljeJlLseWYmWxut-10soJ4Ahi_lPsuBifsLZJyvSKmzSNdPe0t4LtLaHhi_jlgsDdma0o9WYlcdg',
    description: 'A bespoke digital portfolio built from the ground up to establish an authentic personal brand for Manish Gowda H. It communicates foundational mastery in Computer Science, highlights core academic progress in AI/ML, and provides recruiters with interactive access to featured codebases, live previews, and developmental milestones.',
    learnings: 'Implementing fluid responsive typography across varying viewports while maintaining strict contrast compliance was an eye-opener. I learned how to structure semantic HTML5 hierarchies, write performant CSS backdrop-filter glassmorphism without CPU frame drops, and coordinate modular JavaScript state loops for seamless overlay modals.',
    academicContext: '3rd Sem B.Tech CSE (AIML)',
    features: [
      'Ultra-sleek dark theme powered by Tailwind CSS tokens and neon cyan/purple ambient glows.',
      'High-performance glassmorphism overlays with zero layout thrashing.',
      'Modular architecture prepared for ongoing integration with AI model demo widgets.',
      'Zero bloated dependencies — built for instant sub-second initial load speeds.'
    ],
    stack: [
      { label: 'Markup', value: 'HTML5 Semantic', role: 'Accessible DOM Core' },
      { label: 'Styling', value: 'Tailwind CSS', role: 'Custom Palette & Layout' },
      { label: 'Logic', value: 'Vanilla JavaScript', role: 'Interactive Dialog Engine' },
      { label: 'Typography', value: 'Space Grotesk & Inter', role: 'Cyberpunk Editorial' }
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveLink: '#',
    githubLink: 'https://github.com'
  },
  'project-02': {
    id: 'project-02',
    projectNumber: 'PROJECT 02',
    category: 'SYSTEM UTILITY',
    status: 'Active Prototype',
    title: 'Restaurant Management System',
    tagline: 'Streamlined Point-of-Sale Order Calculation and Live Table Billing Dashboard',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_53BtknDn78h1p2J_KWyPiBMUQaZQJL74yBkdvdGukPZIydPXUvvwpgechVhugytIFv1-FyLsa_I0veHT44lpAXt0KBcZuw5e7FBVW85I7GxxH60l3QPr9sIRntdEydq7WjmJyfqhASQLG_LA3gV3rsOcwZNrqMVCisBZ-jpNQMl-3aqkWdGOVXgQq4Msbig3683k2xSxVKCDlBDHwA_8hBwDec3VJTX636ZZNS8',
    description: 'A basic web-based application designed to simplify restaurant operations and manage essential restaurant activities. Incorporates dynamic item listing, order calculations, responsive tables, and interactive state management through DOM logic.',
    learnings: 'Managing dynamic cart state using vanilla DOM manipulation reinforced fundamental algorithmic concepts like event delegation, data binding without heavy frameworks, and input sanitization. This directly contributed to my understanding of how stateful React applications operate under the hood.',
    academicContext: 'B.Tech Software Engineering Project',
    features: [
      'Real-time automated tax, gratuity, and total calculation with instant DOM feedback.',
      'Dynamic food catalog filtering by category (Appetizers, Mains, Beverages, Desserts).',
      'Interactive Kitchen Order Ticket (KOT) status and active table occupancy ledger.',
      'Lightweight local session persistence to prevent accidental order state loss.'
    ],
    stack: [
      { label: 'Architecture', value: 'Stateful DOM', role: 'Reactive Event Dispatch' },
      { label: 'Styling', value: 'CSS Grid & Flexbox', role: 'Dual-pane POS Interface' },
      { label: 'Data Logic', value: 'JS Collections', role: 'Menu Arrays & Cart Objects' },
      { label: 'Validation', value: 'Client Sanitization', role: 'Precision Math & Ledger' }
    ],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
    liveLink: '#',
    githubLink: 'https://github.com',
    hasInteractiveDemo: true
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    icon: 'terminal',
    accentColor: 'secondary',
    skills: [
      { name: 'C Language', status: 'Active', level: 85, description: 'Procedural logic, pointers, memory allocation, and basic algorithms' },
      { name: 'Python', status: 'Active', level: 90, description: 'Scripting, data handling, scientific libraries, automation, ML foundations' },
      { name: 'Java', status: 'Learning', level: 65, description: 'Object-oriented programming, class hierarchies, and JVM concepts' }
    ]
  },
  {
    title: 'Web Dev',
    icon: 'web',
    accentColor: 'tertiary',
    skills: [
      { name: 'HTML5', status: 'Active', level: 92, description: 'Semantic tags, accessible hierarchy, meta headers, modern web standards' },
      { name: 'CSS3', status: 'Active', level: 88, description: 'Flexbox, CSS Grid, animations, glassmorphism, responsive breakpoints' },
      { name: 'JavaScript (ES6+)', status: 'Active', level: 82, description: 'DOM manipulation, asynchronous fetch, array transforms, modular patterns' }
    ]
  },
  {
    title: 'Tools & Tech',
    icon: 'build',
    accentColor: 'primary',
    skills: [
      { name: 'Git & GitHub', status: 'Active', level: 85, description: 'Version control, commit hygiene, branches, pull requests, collaboration' },
      { name: 'React.js', status: 'Learning', level: 70, description: 'Component lifecycle, hooks, reactive props, state managers, Vite toolchain' },
      { name: 'SQL / DBMS', status: 'Learning', level: 68, description: 'Relational data models, normalization, table joins, basic indexing' }
    ]
  },
  {
    title: 'Focus Areas',
    icon: 'psychology',
    accentColor: 'secondary',
    skills: [
      { name: 'Artificial Intelligence', status: 'Focus', level: 75, description: 'Search strategies, heuristic optimization, agents, knowledge graphs' },
      { name: 'Machine Learning', status: 'Focus', level: 72, description: 'Supervised/unsupervised models, scikit-learn, loss functions, neural nets' },
      { name: 'DSA & Backend', status: 'Active', level: 78, description: 'Time/space complexity analysis, linked lists, trees, backend API concepts' }
    ]
  }
];

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    number: '01',
    title: 'Data Structures & Algorithms',
    status: 'Practicing',
    statusColor: 'secondary',
    description: 'Arrays, Linked Lists, Trees, Sorting, and Time Complexity optimization.',
    detailedTopics: ['Dynamic Arrays & Strings', 'Linked Lists & Stacks/Queues', 'Binary Search Trees & Traversal', 'Sorting: Quicksort/Mergesort', 'Big-O Space & Time Analysis']
  },
  {
    number: '02',
    title: 'Object-Oriented Programming',
    status: 'Coursework',
    statusColor: 'tertiary',
    description: 'Encapsulation, Polymorphism, Inheritance, and Clean Modular Architecture.',
    detailedTopics: ['Classes, Objects & Constructors', 'Inheritance & Abstract Classes', 'Polymorphic Interfaces', 'SOLID Principles in Practice', 'Clean Code Guidelines']
  },
  {
    number: '03',
    title: 'Artificial Intelligence',
    status: 'Exploring',
    statusColor: 'primary',
    description: 'Search algorithms, Heuristic strategies, Knowledge representation, Agents.',
    detailedTopics: ['A* & Heuristic Search', 'Minimax & Game Trees', 'Constraint Satisfaction Problems', 'Knowledge Graphs & Logic Inference', 'Intelligent Agent Architectures']
  },
  {
    number: '04',
    title: 'Machine Learning',
    status: 'Exploring',
    statusColor: 'primary',
    description: 'Supervised vs Unsupervised models, Scikit-learn, Neural model concepts.',
    detailedTopics: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'K-Means Clustering & PCA', 'Perceptrons & Backpropagation', 'Model Validation & ROC-AUC']
  },
  {
    number: '05',
    title: 'Database & SQL',
    status: 'Coursework',
    statusColor: 'tertiary',
    description: 'Relational models, ER diagrams, Normalization, Query performance.',
    detailedTopics: ['Entity-Relationship Modeling', '1NF, 2NF, 3NF Normalization', 'Complex JOIN Operations', 'Transactions & ACID Guarantees', 'Indexing & Query Optimization']
  },
  {
    number: '06',
    title: 'Full-Stack Web Dev',
    status: 'Practicing',
    statusColor: 'secondary',
    description: 'React component life cycles, RESTful endpoints, state flows.',
    detailedTopics: ['Modern Component Composition', 'Client-side State Management', 'REST API Design & Integration', 'Authentication & JWT Flow', 'Deployment to Cloud Platforms']
  },
  {
    number: '07',
    title: 'Problem Solving & Debugging',
    status: 'Daily Habit',
    statusColor: 'secondary',
    description: 'Practicing coding puzzles, analyzing algorithmic edge cases, and sharpening analytical intuition daily.',
    detailedTopics: ['LeetCode / HackerRank problems', 'Edge case stress-testing', 'Systematic debugging with GDB/Chrome DevTools', 'Recursive thinking & Memoization', 'Continuous code refactoring']
  }
];

export const ACADEMIC_SUBJECTS = [
  { code: 'CS301', name: 'Data Structures and Applications', semester: 'Sem 3', credits: 4, grade: 'In Progress' },
  { code: 'CS302', name: 'Analog and Digital Electronics', semester: 'Sem 3', credits: 3, grade: 'In Progress' },
  { code: 'CS303', name: 'Computer Organization & Architecture', semester: 'Sem 3', credits: 3, grade: 'In Progress' },
  { code: 'CS304', name: 'Discrete Mathematical Structures', semester: 'Sem 3', credits: 3, grade: 'In Progress' },
  { code: 'CS305', name: 'Object Oriented Programming with Java', semester: 'Sem 3', credits: 3, grade: 'In Progress' },
  { code: 'AI301', name: 'Introduction to AI and Python for ML', semester: 'Sem 3', credits: 3, grade: 'In Progress' },
];
