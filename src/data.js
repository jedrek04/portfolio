// all the content of the site lives here

export const profile = {
  name: 'Jedrek',
  tagline: {
    start: 'Data Science & AI student. I build ',
    highlight: 'AI tools and data pipelines',
    middle: ' and ',
    strong: 'keep systems up and running',
    end: '.',
  },
  email: 'jedrzejludwiczak@proton.me',
  cv: '/cv.pdf',
}

export const links = [
  { label: 'GitHub', short: 'github.com/jedrek04', url: 'https://github.com/jedrek04' },
  { label: 'git.jedrek.dev', short: 'git.jedrek.dev/jedrek', url: 'https://git.jedrek.dev/jedrek' },
  { label: 'LinkedIn', short: 'LinkedIn', url: 'https://www.linkedin.com/in/jedrzej-ludwiczak-5b5a0a357' },
]

export const tools = [
  'Python', 'GCP', 'Vertex AI', 'Looker', 'Application Integration', 'Git',
  'Azure', 'Entra ID', 'Intune', 'Microsoft 365', 'Power Automate', 'Power Platform',
  'Copilot Studio', 'Docker', 'Ollama', 'n8n', 'NixOS', 'Machine Learning',
]

// icon: chart, calendar, bot, terminal, snowflake (see components/Icon.jsx)
// color: cyan, pink, violet, blue, amber, green
// wide: takes two columns
export const projects = [
  {
    name: 'Risk',
    accent: 'Lens',
    description: 'A platform to analyze portfolio risk.',
    tech: [
      'Python', 'FastAPI', 'BigQuery', 'Cloud Run', 'Vertex AI',
      'GARCH', 'Monte Carlo VaR', 'Isolation Forest', 'FinBERT'],
    github: 'https://github.com/jedrek04/risklens',
    icon: 'chart',
    color: 'cyan',
    wide: true,
    featured: true,
    badge: 'in development',
  },
  {
    name: 'Telegram Calendar Bot',
    description: 'Turns messages and screenshots into calendar events.',
    tech: ['n8n', 'Ollama', 'Nextcloud', 'Fresh RSS'],
    github: 'https://github.com/jedrek04/n8n-telegram-calendar-bot',
    icon: 'calendar',
    color: 'pink',
  },
  {
    name: 'Ollama Docker Assistant',
    description: 'A Telegram bot that monitors and manages a Docker server.',
    tech: ['Python', 'Ollama', 'Docker'],
    github: 'https://github.com/jedrek04/ollama-docker-assistant',
    icon: 'bot',
    color: 'violet',
  },
  {
    name: 'NixOS Config',
    description: 'My NixOS setup, running a small self-hosted homelab.',
    tech: ['Nix', 'Linux'],
    github: 'https://github.com/jedrek04/nixos-config',
    icon: 'snowflake',
    color: 'blue',
    wide: true,
  },
]

export const experience = [
  {
    role: 'IT Support Intern',
    company: 'Studyportals',
    url: 'https://www.studyportals.com',
    period: 'Nov 2026 – now',
    current: true,
    color: 'blue',
    tools: ['Entra ID', 'Intune', 'Microsoft 365 Admin Center', 'Power Automate', 'Power Platform', 'Azure', 'Copilot Studio'],
  },
  {
    role: 'Gen AI Intern Developer',
    company: 'Crystalloids',
    url: 'https://www.crystalloids.com',
    period: 'Sep 2025 – Apr 2026',
    color: 'violet',
    tools: ['GCP', 'Vertex AI', 'Looker', 'Pipelines', 'Python', 'Git', 'Application Integration'],
  },
]

export const university = {
  school: 'Breda University of Applied Sciences',
  program: 'Data Science & AI',
  period: 'Sep 2023 – Feb 2027 (expected)',
  // status: done, current or next
  years: [
    { label: 'Year 1 · 23/24', status: 'done' },
    { label: 'Year 2 · 24/25', status: 'done' },
    { label: 'Year 3 · 25/26', status: 'done' },
    { label: 'Year 4 · now', status: 'current' },
  ],
}

export const highschool = {
  school: 'Karol Marcinkowski 1st High School in Poznan',
  program: 'Math & IT class',
  period: 'Sep 2019 – May 2023',
}
