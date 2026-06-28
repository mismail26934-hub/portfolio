import { motion } from 'framer-motion';
import { ProfileRatingCard, RatingCard } from '@/components/ui/skill-bar';
import { figmaAssets } from '@/assets/figma/assets';
import heroLine from '@/assets/hero-line.svg';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='home' className='relative overflow-hidden'>
      {/* Grid guide lines — desktop */}
      <div
        className='hero-grid-lines pointer-events-none absolute inset-x-0 top-0 hidden h-[874px] lg:block'
        aria-hidden
      >
        <span className='hero-vline' style={{ left: '26.0417%' }} />
        <span className='hero-vline' style={{ left: '49.0972%' }} />
        <span className='hero-hline' />
      </div>
      {/* Grid guide lines — mobile */}
      <div
        className='hero-grid-lines pointer-events-none absolute inset-x-0 top-0 h-[874px] lg:hidden'
        aria-hidden
      >
        <span className='hero-vline' style={{ left: '50.13%' }} />
        <span className='hero-vline' style={{ left: '75.32%' }} />
        <span className='hero-hline' />
      </div>

      <div className='hero-layout__profile hidden lg:block'>
        <ProfileImageDesktop />
      </div>

      <div className='relative mx-auto max-w-[1440px]'>
        <div className='hero-layout relative'>
          <div className='relative z-10 px-4 pb-10 pt-[120px] lg:px-0 lg:pb-20 lg:pt-0'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='hero-section'
              data-name='Hero Section'
            >
              <div className='hero-section__content' data-name='Hero Content'>
                <div className='hero-section__header' data-name='Hero Header'>
                  <img
                    src={heroLine}
                    alt=''
                    className='hero-section__line'
                    aria-hidden
                  />
                  <p className='hero-section__greeting'>
                    Hi, I am Edwin Anderson Frontend Developer
                  </p>
                </div>

                <h1 className='hero-section__title' data-node-id='20414:1542'>
                  <span className='hero-section__title-line'>
                    Building Fast &amp;{' '}
                  </span>
                  <span className='hero-section__title-line'>
                    <span className='hero-section__title-accent'>
                      Interactive
                    </span>{' '}
                    Web{' '}
                  </span>
                  <span className='hero-section__title-line'>Experiences.</span>
                </h1>

                <p className='hero-section__subtitle'>
                  Bridging creativity and functionality to deliver stunning,
                  user-friendly web applications
                </p>
              </div>

              <button
                type='button'
                className='hero-section__cta'
                onClick={scrollToContact}
              >
                HIRE ME
              </button>
            </motion.div>
          </div>

          <ProfileImageMobile />
        </div>
      </div>
    </section>
  );
}

function ProfileImageDesktop() {
  return (
    <div className='profile-image' data-name='Profile Image'>
      <div className='profile-image__green-bar' aria-hidden />

      <div className='profile-image__portrait-wrap'>
        <div className='profile-image__portrait-rotate'>
          <div className='profile-image__portrait'>
            <img
              src={figmaAssets.profile}
              alt='Edwin Anderson portrait'
              className='profile-image__portrait-img'
            />
          </div>
        </div>
      </div>

      <div className='profile-image__gradient' aria-hidden />

      <div className='profile-image__rating'>
        <ProfileRatingCard />
      </div>
    </div>
  );
}

function ProfileImageMobile() {
  return (
    <div className='relative mx-auto max-w-[393px] px-4 pb-3 lg:hidden'>
      <div
        className='absolute right-8 top-3 h-[466px] w-[187px] bg-primary'
        aria-hidden
      />
      <div className='relative overflow-hidden'>
        <img
          src={figmaAssets.profile}
          alt='Edwin Anderson portrait'
          className='h-[462px] w-full object-cover object-top mix-blend-luminosity'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 p-4'>
          <RatingCard className='bg-black/90 backdrop-blur-sm' />
        </div>
      </div>
    </div>
  );
}
