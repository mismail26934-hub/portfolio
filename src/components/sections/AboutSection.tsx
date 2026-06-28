import { figmaAssets } from '@/assets/figma/assets';
import { aboutDescription } from '@/data';
import { AboutPixelAccent } from '@/components/sections/AboutPixelAccent';

export function AboutSection() {
  return (
    <section
      id='about'
      className='desktop-section relative overflow-visible lg:scroll-mt-[22px]'
    >
      <AboutPixelAccent />
      <div className='desktop-container-wide'>
        <div className='relative mx-auto flex max-w-[1184px] flex-col items-center gap-10 text-center lg:gap-16'>
          <div className='relative w-full'>
            <p className='section-label mb-2 uppercase'>About Me</p>

            <div className='about-section__details' data-name='About Details'>
              <img
                src={figmaAssets.about[0]}
                alt=''
                className='about-section__image about-section__image--left'
                data-node-id='20414:1446'
                aria-hidden
              />
              <img
                src={figmaAssets.about[1]}
                alt=''
                className='about-section__image about-section__image--right'
                data-node-id='20414:1447'
                aria-hidden
              />

              <h2 className='about-section__title section-title uppercase'>
                Crafting Seamless
                <br />
                <span className='text-primary'>High-Performance Web</span>
                <br />
                Experiences
              </h2>

              <img
                src={figmaAssets.about[2]}
                alt=''
                className='about-section__image about-section__image--accent'
                data-node-id='20414:1448'
                aria-hidden
              />
            </div>
          </div>

          <div className='about-section__text relative mx-auto w-full max-w-[996px]'>
            <p className='text-base font-medium leading-7 text-neutral-400 lg:text-xl lg:leading-[34px]'>
              {aboutDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
