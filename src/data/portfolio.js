import {
  Braces,
  BriefcaseBusiness,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Hammer,
  Layers3,
  Mail,
  Palette,
  ServerCog,
  Wrench,
} from 'lucide-react'

export const profile = {
  name: 'Jose Heamir',
  title: 'Full Stack Developer',
  email: 'joseheamir.a@gmail.com',
  resumePath: '/src/assets/Jose_Heamir_FullStack_Developer_Resume.pdf',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 'Lead Developer', label: 'Engineering leadership' },
  { value: 'Java + Spring Boot', label: 'Backend expertise' },
  { value: 'HRMS, Payroll', label: 'Domain experience' },
]

export const highlights = [
  'Java backend development with Spring Boot and REST APIs',
  'Payroll, HRMS, attendance, and employee administration workflows',
  'Microservices thinking with practical delivery and team leadership',
  'React interface development for clean, recruiter-visible product demos',
]

export const skillCategories = [
  {
    title: 'Backend',
    description: 'Service architecture, APIs, and enterprise business logic.',
    icon: ServerCog,
    accent: 'sky',
    skills: [
      { name: 'Java', level: 95, icon: Code2 },
      { name: 'Spring Boot', level: 92, icon: ServerCog },
      { name: 'Microservices', level: 88, icon: Layers3 },
    ],
  },
  {
    title: 'Frontend',
    description: 'Clean, responsive interfaces for product workflows.',
    icon: Braces,
    accent: 'cyan',
    skills: [
      { name: 'React', level: 82, icon: Braces },
      { name: 'JavaScript', level: 80, icon: FileCode2 },
      { name: 'HTML', level: 86, icon: Code2 },
      { name: 'CSS', level: 84, icon: Palette },
    ],
  },
  {
    title: 'Database',
    description: 'Relational data modeling and query-backed features.',
    icon: Database,
    accent: 'emerald',
    skills: [{ name: 'MySQL', level: 86, icon: Database }],
  },
  {
    title: 'Tools',
    description: 'Delivery tooling for versioning, builds, and containers.',
    icon: Wrench,
    accent: 'indigo',
    skills: [
      { name: 'Git', level: 90, icon: GitBranch },
      { name: 'Docker', level: 82, icon: BriefcaseBusiness },
      { name: 'Maven', level: 85, icon: Hammer },
    ],
  },
]

export const experience = [
  {
    role: 'Lead Developer',
    company: 'Java Backend and Product Engineering',
    period: 'Present',
    details: [
      'Lead engineering work across backend services, payroll workflows, API integrations, and production-ready delivery.',
      'Design maintainable Spring Boot services with clear boundaries, resilient data flows, and practical release discipline.',
      'Partner with product and engineering teams to turn business requirements into scalable technical plans.',
    ],
    focus: ['Architecture', 'Delivery', 'Mentorship'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Enterprise Application Development',
    period: 'Earlier',
    details: [
      'Built and maintained REST APIs, MySQL-backed features, and service integrations for business-critical applications.',
      'Improved reliability through clean code practices, version control hygiene, and collaborative debugging.',
    ],
    focus: ['REST APIs', 'MySQL', 'Git'],
  },
]

export const projects = [
  {
    name: 'HRMS Payroll System',
    type: 'Payroll Platform',
    description:
      'Employee management, payroll processing, leave management, attendance tracking.',
    highlights: [
      'Centralized HR and payroll operations',
      'Handled leave, attendance, and employee records',
      'Designed for reliable administrative workflows',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    name: 'AIS Integration',
    type: 'Government Integration',
    description: 'Government payroll submission integration.',
    highlights: [
      'Connected payroll product flows to external submission requirements',
      'Focused on request validation and API reliability',
      'Supported structured government payroll reporting',
    ],
    stack: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    name: 'Employee Management System',
    type: 'Administration System',
    description: 'CRUD operations, reporting and employee administration.',
    highlights: [
      'Managed employee lifecycle data',
      'Supported reporting for administrative decisions',
      'Built around maintainable CRUD workflows',
    ],
    stack: ['Java', 'Spring Boot', 'MySQL'],
  },
]

export const contactMethods = [
  {
    label: 'Email Jose',
    value: profile.email,
    href: `mailto:${profile.email}?subject=Portfolio%20Opportunity%20for%20Jose`,
    icon: Mail,
  },
]
