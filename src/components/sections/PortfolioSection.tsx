import { motion } from 'framer-motion'
import { portfolioProjects } from '@/data'
import type { PortfolioProject } from '@/types'

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group flex flex-col gap-4"
      data-name="Portfolio Card"
    >
      <div className="relative">
        <div className="h-[240px] overflow-hidden rounded-[20px] lg:h-[284px]">
          <img
            src={project.image}
            alt={project.title}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <span className="absolute bottom-0 left-1/2 z-10 flex size-[100px] -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-neutral-25 p-2 text-lg font-bold uppercase leading-8 text-neutral-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Visit
        </span>
      </div>
      <h3 className="text-xl font-bold leading-9 text-neutral-25 lg:text-2xl">{project.title}</h3>
      <p className="line-clamp-2 text-sm leading-7 text-neutral-400 lg:text-base lg:leading-[30px]">{project.description}</p>
    </motion.article>
  )
}

export function PortfolioSection() {
  return (
    <section id="projects" className="desktop-section-sm lg:scroll-mt-[62px]">
      <div className="desktop-container-wide">
        <div className="mx-auto max-w-[1184px] text-center">
          <p className="section-label uppercase">Portfolio</p>
          <h2 className="section-title mt-2 uppercase">Selected Work</h2>
        </div>

        <div className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
