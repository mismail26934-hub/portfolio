import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { navItems, siteConfig } from '@/data'
import { useUIStore } from '@/store/uiStore'
import { cn } from '@/lib/utils'
import headerLine from '@/assets/header-line.svg'

function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <a href="#home" onClick={onClick} className={cn('site-header__logo', className)}>
      <img
        src={headerLine}
        alt=""
        className="h-px w-6 shrink-0 lg:w-10"
        aria-hidden
      />
      <span className="site-header__brand">{siteConfig.name}</span>
    </a>
  )
}

function NavLink({
  href,
  label,
  onClick,
  className,
}: {
  href: string
  label: string
  onClick?: () => void
  className?: string
}) {
  return (
    <a href={href} onClick={onClick} className={cn('site-header__nav-link', className)}>
      {label}
    </a>
  )
}

export function Navbar() {
  const { isMobileMenuOpen, openMobileMenu, closeMobileMenu } = useUIStore()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    closeMobileMenu()
  }

  return (
    <>
      <header
        className={cn(
          'site-header border-neutral-800',
          isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent',
        )}
        data-name="Header / Mobile"
      >
        <div className="site-header__inner h-20 lg:h-20">
          <Logo />

          <nav className="hidden lg:contents" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <button
            type="button"
            className="ml-auto flex size-10 shrink-0 items-center justify-center text-white lg:hidden"
            onClick={openMobileMenu}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-black lg:hidden"
            data-node-id="20433:1010"
            data-name="Menu"
          >
            <div className="flex h-[80px] items-center justify-between border-b border-neutral-800 px-4" data-name="Header / Mobile">
              <Logo onClick={handleNavClick} />
              <button
                type="button"
                className="flex size-6 shrink-0 items-center justify-center text-white"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-[var(--spacing-md,0px)] px-4 pt-4"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className="p-2 text-base leading-[30px] text-white"
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function Footer() {
  return (
    <footer className="flex h-16 items-center justify-center border-t border-neutral-800 lg:h-20">
      <p className="text-center text-sm leading-7 text-neutral-400 lg:text-base lg:leading-[30px]">
        © {new Date().getFullYear()} {siteConfig.name} All rights reserved.
      </p>
    </footer>
  )
}
