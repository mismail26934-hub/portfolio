import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { figmaAssets } from '@/assets/figma/assets'
import { siteConfig, socialLinks } from '@/data'
import { SectionHeader } from '@/components/ui/section-header'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useContactMutation } from '@/hooks/useContactMutation'
import { useUIStore } from '@/store/uiStore'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const socialIconMap = {
  dribbble: figmaAssets.social.dribbble,
  instagram: figmaAssets.social.instagram,
  linkedin: figmaAssets.social.linkedin,
}

export function ContactSection() {
  const { mutate, isPending } = useContactMutation()
  const { openSuccessModal } = useUIStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  const onSubmit = (data: ContactFormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset()
        openSuccessModal()
      },
    })
  }

  return (
    <section id="contact" className="contact-section lg:scroll-mt-[22px]">
      <div className="desktop-container-wide">
        <div className="grid gap-10 lg:grid-cols-[421px_1fr] lg:items-start lg:gap-[122px]">
          <div className="relative mx-auto w-full max-w-[421px] lg:mx-0 lg:pt-[21px]">
            <div className="relative overflow-hidden">
              <img
                src={figmaAssets.profile}
                alt="Edwin Anderson"
                className="h-[462px] w-full object-cover object-top mix-blend-luminosity lg:h-[557px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>
            <div className="relative -mt-[38px] flex flex-col items-center gap-6 lg:gap-[24px]">
              <div className="contact-social-media">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label={link.name}
                  >
                    <img
                      src={socialIconMap[link.icon]}
                      alt=""
                      className="contact-social-link__icon"
                      aria-hidden
                    />
                  </a>
                ))}
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold leading-[34px] text-neutral-25">
                  Edwin Anderson
                </p>
                <div className="mt-1 flex items-center justify-center gap-3">
                  <img
                    src={figmaAssets.icons.statusDot}
                    alt=""
                    className="size-3"
                    aria-hidden
                  />
                  <span className="text-base leading-[30px] text-neutral-25">
                    {siteConfig.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader label="Contact" title="Let's Get In Touch" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 flex flex-col gap-6 lg:mt-12"
              noValidate
            >
              <Input
                label="Name"
                placeholder="Your name"
                error={errors.name?.message}
                {...register('name')}
              />
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                error={errors.email?.message}
                {...register('email')}
              />
              <Textarea
                label="Message"
                placeholder="Tell me about your project..."
                error={errors.message?.message}
                {...register('message')}
              />
              <Button type="submit" size="lg" className="h-12 lg:h-14" disabled={isPending}>
                {isPending ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
