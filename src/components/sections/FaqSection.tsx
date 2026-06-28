import { figmaAssets } from '@/assets/figma/assets'
import { faqItems } from '@/data'
import { SectionHeader } from '@/components/ui/section-header'
import type { FaqItem } from '@/types'

function FaqEntry({ item }: { item: FaqItem }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start gap-4">
        <img src={figmaAssets.icons.sparkleMuted} alt="" className="size-8 shrink-0" aria-hidden />
        <h3 className="text-xl font-bold leading-8 text-neutral-25 lg:text-2xl lg:leading-9">
          {item.question}
        </h3>
      </div>
      <p className="text-base leading-7 text-neutral-400 lg:leading-[30px]">{item.answer}</p>
    </div>
  )
}

export function FaqSection() {
  const pairs: FaqItem[][] = []
  for (let i = 0; i < faqItems.length; i += 2) {
    pairs.push(faqItems.slice(i, i + 2))
  }

  return (
    <section id="faq" className="desktop-section lg:scroll-mt-[22px]">
      <div className="desktop-container-wide">
        <SectionHeader
          label="FAQ"
          title="Frequently Asked Questions"
          align="center"
          className="mx-auto max-w-[790px]"
        />

        <div className="mx-auto mt-10 max-w-[1184px] lg:mt-16">
          <div className="hidden flex-col gap-10 lg:flex">
            {pairs.map((pair, rowIndex) => (
              <div key={rowIndex}>
                <div className="grid grid-cols-[1fr_1px_1fr] items-start gap-10">
                  <FaqEntry item={pair[0]} />
                  <div className="self-stretch bg-neutral-800" aria-hidden />
                  {pair[1] ? <FaqEntry item={pair[1]} /> : <div aria-hidden />}
                </div>
                {rowIndex < pairs.length - 1 && (
                  <div className="mt-10 h-px w-full bg-neutral-800" />
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-8 lg:hidden">
            {faqItems.map((item) => (
              <FaqEntry key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
