export interface NavItem {
  label: string
  href: string
}

export interface Service {
  id: string
  number: string
  title: string
  description: string
  icon: 'monitor' | 'layout' | 'code'
}

export interface SkillBar {
  name: string
  percentage: number
}

export interface TechIcon {
  name: string
  image: string
}

export interface EducationItem {
  id: string
  title: string
  institution: string
  logo?: string
  items: string[]
}

export interface WorkExperience {
  id: string
  company: string
  role: string
  period: string
  description: string
  image: string
  logo: string
}

export interface PortfolioProject {
  id: string
  title: string
  description: string
  image: string
  link?: string
}

export interface ComparisonItem {
  id: string
  label: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  logo?: string
  avatar?: string
  rating: number
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface SocialLink {
  name: string
  href: string
  icon: 'dribbble' | 'instagram' | 'linkedin'
}
