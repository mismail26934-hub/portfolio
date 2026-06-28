import { motion } from 'framer-motion'
import { figmaAssets } from '@/assets/figma/assets'
import { services, servicesIntro } from '@/data'
import type { Service } from '@/types'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col gap-3"
      data-name="Service Card"
    >
      <p className="text-base font-semibold leading-[30px] text-neutral-400">{service.number}</p>
      <div className="h-0 w-full">
        <img src={figmaAssets.line} alt="" className="block h-px w-full" aria-hidden />
      </div>
      <div className="size-8 overflow-clip" aria-hidden>
        <img src={figmaAssets.icons.monitor} alt="" className="size-full" />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="text-base leading-[30px] text-neutral-400">{service.description}</p>
    </motion.article>
  )
}

export function ServicesSection() {
  return (
    <section className="desktop-section">
      <div className="desktop-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-[509px] space-y-2">
            <p className="section-label uppercase">Service</p>
            <h2 className="section-title uppercase">My Service Expertise</h2>
          </div>
          <p className="max-w-[504px] text-base font-medium leading-7 text-neutral-400 lg:text-right lg:text-xl lg:leading-[34px]">
            {servicesIntro}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:mt-16 lg:grid lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
