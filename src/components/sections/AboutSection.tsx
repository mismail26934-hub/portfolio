import { figmaAssets } from '@/assets/figma/assets'
import { aboutDescription } from '@/data'

export function AboutSection() {
  return (
    <section id="about" className="desktop-section relative overflow-hidden lg:scroll-mt-[22px]">
      <div className="desktop-container-wide">
        <div className="relative mx-auto flex max-w-[1184px] flex-col items-center gap-10 text-center lg:gap-16">
          <div className="relative w-full">
            <p className="section-label mb-2 uppercase">About Me</p>

            <h2 className="section-title uppercase">
              Crafting Seamless
              <br />
              <span className="text-primary">High-Performance Web</span>
              <br />
              Experiences
            </h2>
          </div>

          <p className="max-w-[996px] text-base font-medium leading-7 text-neutral-400 lg:text-xl lg:leading-[34px]">
            {aboutDescription}
          </p>
        </div>

        <img
          src={figmaAssets.icons.pixelAccent}
          alt=""
          className="pointer-events-none absolute bottom-20 left-[92px] hidden size-[46px] lg:block"
          aria-hidden
        />
      </div>
    </section>
  )
}
