import { motion } from 'framer-motion'
import { workExperiences } from '@/data'
import { figmaAssets } from '@/assets/figma/assets'
import { cn } from '@/lib/utils'
import type { WorkExperience } from '@/types'

function CompanyLogo({ logo, company }: { logo: string; company: string }) {
  return (
    <img
      src={logo}
      alt={company}
      className="h-8 w-auto max-w-[120px] shrink-0 object-contain object-right"
    />
  )
}

function ExperienceCard({
  experience,
  className,
}: {
  experience: WorkExperience
  className?: string
}) {
  return (
    <div className={cn('rounded-[20px] border border-neutral-800 bg-black p-6', className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-medium leading-8 text-neutral-400">{experience.period}</p>
          <h3 className="mt-1 text-2xl font-bold leading-9 text-neutral-25">{experience.role}</h3>
        </div>
        <CompanyLogo logo={experience.logo} company={experience.company} />
      </div>
      <p className="mt-4 text-base leading-[30px] text-neutral-400">{experience.description}</p>
    </div>
  )
}

function StepNode({ step }: { step: number }) {
  return (
    <div className="flex size-10 items-center justify-center rounded-full border border-primary bg-black text-sm font-bold text-primary">
      {step}
    </div>
  )
}

function WorkRow({
  experience,
  index,
}: {
  experience: WorkExperience
  index: number
}) {
  const cardOnRight = index % 2 === 0
  const step = index + 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative grid min-h-[286px] grid-cols-2 items-center gap-x-16"
    >
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <StepNode step={step} />
      </div>

      {cardOnRight ? (
        <>
          <div aria-hidden />
          <ExperienceCard experience={experience} className="w-full max-w-[622px]" />
        </>
      ) : (
        <>
          <ExperienceCard experience={experience} className="ml-auto w-full max-w-[622px]" />
          <div aria-hidden />
        </>
      )}
    </motion.div>
  )
}

export function WorkExperienceSection() {
  return (
    <section className="desktop-section-sm relative overflow-hidden">
      <div className="desktop-container-wide">
        <div className="mx-auto max-w-[509px] text-center">
          <p className="section-label uppercase">Experience</p>
          <h2 className="section-title mt-2 uppercase">Profesional Work</h2>
        </div>

        <div className="relative mt-10 lg:mt-16">
          <div className="relative hidden lg:block">
            <div
              className="pointer-events-none absolute left-1/2 top-[143px] bottom-[143px] w-px -translate-x-1/2 bg-neutral-800"
              aria-hidden
            />
            <div className="flex flex-col">
              {workExperiences.map((exp, index) => (
                <WorkRow key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:hidden">
            {workExperiences.map((exp, index) => (
              <div key={exp.id} className="flex items-start gap-4">
                <StepNode step={index + 1} />
                <ExperienceCard experience={exp} className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        <img
          src={figmaAssets.icons.pixelAccent}
          alt=""
          className="pointer-events-none absolute bottom-20 right-[92px] hidden size-[46px] rotate-180 lg:block"
          aria-hidden
        />
      </div>
    </section>
  )
}
