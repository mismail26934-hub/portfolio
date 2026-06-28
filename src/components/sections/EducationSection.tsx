import { figmaAssets } from '@/assets/figma/assets'
import { anotherTalent, workingWithMe } from '@/data'
import { Button } from '@/components/ui/button'
import type { ComparisonItem } from '@/types'

function ComparisonColumn({
  title,
  items,
  variant,
  avatar,
}: {
  title: string
  items: ComparisonItem[]
  variant: 'positive' | 'negative'
  avatar: 'photo' | 'placeholder'
}) {
  const sparkleIcon =
    variant === 'positive' ? figmaAssets.icons.sparkle : figmaAssets.icons.sparkleMuted

  return (
    <div className="flex flex-1 flex-col items-center gap-8">
      <h3 className="text-center text-2xl font-bold leading-9 text-neutral-25 uppercase lg:text-[28px] lg:leading-[38px]">
        {title}
      </h3>

      <div className="flex size-20 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
        {avatar === 'photo' ? (
          <img
            src={figmaAssets.profile}
            alt=""
            className="size-full object-cover"
            aria-hidden
          />
        ) : (
          <img
            src={figmaAssets.icons.profilePlaceholder}
            alt=""
            className="size-10"
            aria-hidden
          />
        )}
      </div>

      <div className="w-full space-y-0">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={index < items.length - 1 ? 'border-b border-neutral-800 py-6 first:pt-0 lg:py-8' : 'pt-6 lg:pt-8'}
          >
            <div className="flex items-center gap-3">
              <img src={sparkleIcon} alt="" className="size-8 shrink-0" aria-hidden />
              <p
                className={
                  variant === 'positive'
                    ? 'text-base font-bold leading-7 text-neutral-25 lg:text-xl lg:leading-[34px]'
                    : 'text-base font-normal leading-7 text-neutral-400 lg:text-2xl lg:leading-9'
                }
              >
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function EducationSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="desktop-section-sm">
      <div className="desktop-container">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="section-label uppercase">Working</p>
          <h2 className="section-title mt-2 uppercase">Why Choose Me?</h2>
        </div>

        <div className="mt-10 grid gap-12 lg:mt-12 lg:grid-cols-2 lg:gap-20">
          <ComparisonColumn
            title="Working With Me"
            items={workingWithMe}
            variant="positive"
            avatar="photo"
          />
          <ComparisonColumn
            title="Another Talent"
            items={anotherTalent}
            variant="negative"
            avatar="placeholder"
          />
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <Button size="xl" className="h-12 w-full max-w-[361px] lg:h-14 lg:w-[240px]" onClick={scrollToContact}>
            HIRE ME
          </Button>
        </div>
      </div>
    </section>
  )
}
