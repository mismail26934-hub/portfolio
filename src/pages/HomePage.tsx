import { Navbar, Footer } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { HeroPixelAccent } from '@/components/sections/HeroPixelAccent'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { WorkExperienceSection } from '@/components/sections/WorkExperienceSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { ContactPixelAccent } from '@/components/sections/ContactPixelAccent'
import { SuccessModal } from '@/components/ui/success-modal'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-area">
          <HeroSection />
          <HeroPixelAccent />
        </div>
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <WorkExperienceSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <div className="contact-area">
          <ContactPixelAccent />
          <ContactSection />
        </div>
      </main>
      <Footer />
      <SuccessModal />
    </>
  )
}
