import { figmaAssets } from '@/assets/figma/assets'
import type {
  ComparisonItem,
  FaqItem,
  NavItem,
  PortfolioProject,
  Service,
  SkillBar,
  SocialLink,
  TechIcon,
  Testimonial,
  WorkExperience,
} from '@/types'

export const siteConfig = {
  name: 'Edwin Anderson.',
  title: 'Edwin Anderson - Frontend Developer Portfolio',
  email: 'edwin@example.com',
  availability: 'Available for Work',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skill', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const services: Service[] = [
  {
    id: '1',
    number: '01',
    title: 'Custom Website Development',
    description: 'Building responsive, fast, and scalable websites tailored to your needs.',
    icon: 'monitor',
  },
  {
    id: '2',
    number: '02',
    title: 'Web Performance Optimization',
    description: 'Enhancing website speed, SEO, and overall performance for better results.',
    icon: 'monitor',
  },
  {
    id: '3',
    number: '03',
    title: 'Website Maintenance & Debugging',
    description: 'Fixing bugs, improving UI, and ensuring smooth performance over time.',
    icon: 'monitor',
  },
]

export const servicesIntro =
  'Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations.'

export const aboutDescription =
  'I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences.'

export const skillBars: SkillBar[] = [
  { name: 'React JS', percentage: 50 },
  { name: 'HTML', percentage: 80 },
  { name: 'Tailwind CSS', percentage: 90 },
  { name: 'HTML', percentage: 100 },
  { name: 'Docker', percentage: 70 },
  { name: 'Javascript', percentage: 90 },
]

export const techIcons: TechIcon[] = [
  { name: 'JavaScript', image: figmaAssets.tech.js },
  { name: 'CSS3', image: figmaAssets.tech.css },
  { name: 'HTML5', image: figmaAssets.tech.html },
  { name: 'Express', image: figmaAssets.tech.express },
  { name: 'MongoDB', image: figmaAssets.tech.mongo },
  { name: 'React', image: figmaAssets.tech.react },
  { name: 'TypeScript', image: figmaAssets.tech.ts },
  { name: 'Docker', image: figmaAssets.tech.docker },
]

export const workingWithMe: ComparisonItem[] = [
  { id: '1', label: 'React Expert' },
  { id: '2', label: 'Precise Website Implementation' },
  { id: '3', label: 'TypeScript Proficiency' },
  { id: '4', label: 'Clean, Maintainable Code' },
  { id: '5', label: 'Responsive Website Development' },
  { id: '6', label: 'UI Design Proficiency (Figma)' },
]

export const anotherTalent: ComparisonItem[] = [
  { id: '1', label: 'Basic React Knowledge' },
  { id: '2', label: 'Inconsistent Design Translation' },
  { id: '3', label: 'Little to No TypeScript Knowledge' },
  { id: '4', label: 'Unstructured Code' },
  { id: '5', label: 'Inconsistent Responsiveness' },
  { id: '6', label: 'No Design Skills' },
]

const workDescription =
  'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences'

export const workExperiences: WorkExperience[] = [
  {
    id: '1',
    company: 'Upwork',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: workDescription,
    image: figmaAssets.work[0],
    logo: figmaAssets.logos.upwork,
  },
  {
    id: '2',
    company: 'Trello',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: workDescription,
    image: figmaAssets.work[1],
    logo: figmaAssets.logos.trello,
  },
  {
    id: '3',
    company: 'Zoom',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: workDescription,
    image: figmaAssets.work[2],
    logo: figmaAssets.logos.zoom,
  },
  {
    id: '4',
    company: 'Zapier',
    role: 'Frontend Developer',
    period: '2020 - 2022',
    description: workDescription,
    image: figmaAssets.work[3],
    logo: figmaAssets.logos.zapier,
  },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Dashboard SaaS Task Management',
    description: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: figmaAssets.portfolio[0],
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: figmaAssets.portfolio[1],
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    description: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: figmaAssets.portfolio[2],
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: figmaAssets.portfolio[3],
  },
  {
    id: '5',
    title: 'SaaS Landing Page',
    description: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: figmaAssets.portfolio[4],
  },
  {
    id: '6',
    title: 'Restaurant Booking',
    description: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: figmaAssets.portfolio[5],
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Thom Haye',
    role: 'Project Manager',
    company: 'Upwork',
    logo: figmaAssets.logos.upwork,
    content:
      'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Emily Carter',
    role: 'Head of Product',
    company: 'Trello',
    logo: figmaAssets.logos.trello,
    content:
      'An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sarah Lee',
    role: 'Engineering Manager',
    company: 'Zapier',
    logo: figmaAssets.logos.zapier,
    content:
      'An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!',
    rating: 5,
  },
  {
    id: '4',
    name: 'Michael Brown',
    role: 'Lead Developer',
    company: 'Zoom',
    logo: figmaAssets.logos.zoom,
    content:
      'A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!',
    rating: 5,
  },
]

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.',
  },
  {
    id: '2',
    question: 'Do you work on both design and development?',
    answer:
      'I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.',
  },
  {
    id: '3',
    question: 'Can you optimize an existing website for better performance?',
    answer:
      'Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.',
  },
  {
    id: '4',
    question: 'Do you take freelance or contract-based projects?',
    answer:
      'Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!',
  },
  {
    id: '5',
    question: 'How do you approach a new project?',
    answer:
      'I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.',
  },
  {
    id: '6',
    question: 'How can we collaborate?',
    answer:
      "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let's create something awesome together!",
  },
]

export const socialLinks: SocialLink[] = [
  { name: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
]
