import { motion } from 'framer-motion'
import { skillBars, techIcons } from '@/data'
import { SkillBarItem } from '@/components/ui/skill-bar'

function TechIconBadge({ name, image }: { name: string; image: string }) {
  return (
    <div
      className="flex size-12 items-center justify-center rounded-full border border-neutral-800 p-1.5 lg:size-16"
      title={name}
    >
      <div className="flex size-[38px] items-center justify-center rounded-full bg-black lg:size-[51px]">
        <img src={image} alt={name} className="size-[30px] object-contain lg:size-10" />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="desktop-section-sm lg:-scroll-mt-[5px]">
      <div className="desktop-container-wide">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[58px]">
          <div className="flex flex-1 flex-col gap-10 lg:gap-[58px]">
            <div className="space-y-2">
              <p className="section-label uppercase">Skills</p>
              <h2 className="section-title uppercase">Skills That Bring Ideas To Life</h2>
            </div>

            <div className="flex max-w-[440px] flex-col gap-6">
              <div className="flex flex-wrap gap-6">
                {techIcons.slice(0, 4).map((tech) => (
                  <TechIconBadge key={tech.name} name={tech.name} image={tech.image} />
                ))}
              </div>
              <div className="flex flex-wrap gap-6">
                {techIcons.slice(4).map((tech) => (
                  <TechIconBadge key={tech.name} name={tech.name} image={tech.image} />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex w-full max-w-[602px] flex-col gap-6"
          >
            {skillBars.map((skill) => (
              <SkillBarItem key={`${skill.name}-${skill.percentage}`} {...skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
