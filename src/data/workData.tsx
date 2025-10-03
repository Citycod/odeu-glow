import { WorkItem, WorkCategory } from '../types/work';


export const workCategories: WorkCategory[] = [
  {
    id: 'writing',
    name: 'Professional Writing',
    description: 'Published articles and sports journalism',
    icon: '📝'
  },
  {
    id: 'content',
    name: 'Content Creation',
    description: 'Creative content and media projects',
    icon: '🎬'
  },
  {
    id: 'social',
    name: 'Social Media',
    description: 'Social media presence and engagement',
    icon: '📱'
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Professional portfolio and clippings',
    icon: '💼'
  }
];

export const workItems: WorkItem[] = [
  {
    id: '1',
    title: 'Skabash Articles',
    description: 'Professional writing portfolio featuring various articles and thought pieces on Skabash platform',
    url: 'https://www.skabash.com/author/asukwo-oduo',
    platform: 'Skabash',
    category: 'writing',
    imageUrl: './assets/IMG-20251001-WA0081.jpg',
    date: '2023',
    tags: ['Writing', 'Articles', 'Blogging']
  },
  {
    id: '2',
    title: 'Pulse Sports Journalism',
    description: 'Sports journalism and analysis featured on Pulse Sports Nigeria platform',
    url: 'https://www.pulsesports.ng/author/asukwo-oduo-2023050910331374234',
    platform: 'Pulse Sports',
    category: 'writing',
    imageUrl: '/assets/IMG-20251001-WA0082.jpg',
    date: '2023',
    tags: ['Sports', 'Journalism', 'Analysis']
  },
  {
    id: '3',
    title: 'Amaka Studio Content 1',
    description: 'Creative content creation and media projects on Amaka Studio platform',
    url: 'https://amaka.studio/u/content/5_JU0ZPjpMlY76LfuUHiN',
    platform: 'Amaka Studio',
    category: 'content',
    imageUrl: '/assets/IMG-20251001-WA0084.jpg',
    date: '2023',
    tags: ['Content', 'Creative', 'Media']
  },
  {
    id: '4',
    title: 'Amaka Studio Content 2',
    description: 'Additional creative projects and content work on Amaka Studio',
    url: 'https://amaka.studio/u/content/PRdhfuh-A2-jFdz5odJV_',
    platform: 'Amaka Studio',
    category: 'content',
    imageUrl: '/assets/IMG-20251001-WA0076.jpg',
    date: '2023',
    tags: ['Content', 'Projects', 'Creative']
  },
  {
    id: '5',
    title: 'Punch Newspaper Feature',
    description: 'Featured article in Punch Newspaper discussing social distancing laws and public figures',
    url: 'https://punchng.com/funke-akindele-flouting-law-on-social-distancing',
    platform: 'Punch Newspaper',
    category: 'writing',
    imageUrl: '/assets/IMG-20251001-WA0073.jpg',
    date: '2020',
    tags: ['News', 'Journalism', 'Feature']
  },
  {
    id: '6',
    title: 'Twitter Profile',
    description: 'Professional Twitter presence as @profoduo featuring insights and engagement',
    url: 'https://twitter.com/profoduo',
    platform: 'Twitter/X',
    category: 'social',
    imageUrl: '/assets/IMG-20251001-WA0075.jpg',
    date: 'Present',
    tags: ['Social Media', 'Engagement', 'Networking']
  },
  {
    id: '7',
    title: 'Professional Portfolio',
    description: 'Complete professional portfolio showcasing writing samples and published work',
    url: 'https://www.clippings.me/asukwo',
    platform: 'Clippings.me',
    category: 'portfolio',
    imageUrl: '/assets/IMG-20251001-WA0070 copy.jpg',
    date: 'Present',
    tags: ['Portfolio', 'Writing', 'Samples']
  }
];