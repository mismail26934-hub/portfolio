import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { figmaAssets } from '@/assets/figma/assets'
import { testimonials } from '@/data'
import { SectionHeader } from '@/components/ui/section-header'
import { StarRating } from '@/components/ui/skill-bar'
import { Button } from '@/components/ui/button'
import type { Testimonial } from '@/types'

function TestimonialCard({
  item,
  index,
}: {
  item: Testimonial
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col gap-4 rounded-[20px] border border-neutral-800 bg-black p-5 lg:min-h-[270px] lg:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-bold leading-7 text-neutral-25 lg:text-xl lg:leading-8">
            {item.name}
          </p>
          <p className="text-sm leading-6 text-neutral-400 lg:text-base">{item.role}</p>
        </div>
        {item.logo && (
          <img
            src={item.logo}
            alt={item.company}
            className="h-[48px] w-[114px] shrink-0 object-contain object-right"
          />
        )}
      </div>

      <StarRating rating={item.rating} size="md" />

      <p className="text-sm leading-7 text-neutral-400 lg:text-base lg:leading-[30px]">
        &ldquo;{item.content}&rdquo;
      </p>
    </motion.article>
  )
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const testimonial = testimonials[current]

  return (
    <section className="desktop-section">
      <div className="desktop-container-wide">
        <SectionHeader
          label="Testimonials"
          title="People Says About Me"
          align="center"
          className="mx-auto max-w-[592px]"
        />

        <div className="mt-10 lg:mt-16">
          <div className="hidden gap-6 lg:grid lg:grid-cols-2">
            {testimonials.map((item, index) => (
              <TestimonialCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="mt-0 hidden justify-center gap-4 pt-10 lg:flex">
            <Button variant="outline" size="icon" className="size-14" onClick={prev} aria-label="Previous testimonial">
              <img src={figmaAssets.icons.arrowLeft} alt="" className="size-6" aria-hidden />
            </Button>
            <Button variant="outline" size="icon" className="size-14" onClick={next} aria-label="Next testimonial">
              <img src={figmaAssets.icons.arrowRight} alt="" className="size-6" aria-hidden />
            </Button>
          </div>

          <div className="lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <TestimonialCard item={testimonial} index={0} />
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-4">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                <img src={figmaAssets.icons.arrowLeft} alt="" className="size-5" aria-hidden />
              </Button>
              <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                <img src={figmaAssets.icons.arrowRight} alt="" className="size-5" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
