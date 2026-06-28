import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  value: string
  question: string
  answer: string
}

export function FaqAccordionItem({ value, question, answer }: AccordionItemProps) {
  return (
    <Accordion.Item value={value} className="border-b border-neutral-800 last:border-b-0">
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-start justify-between gap-4 py-6 text-left outline-none">
          <span className="text-base font-semibold text-neutral-25 md:text-lg">
            {question}
          </span>
          <ChevronDown
            className="size-5 shrink-0 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.2s_ease-out]">
        <p className="pb-6 text-sm leading-7 text-neutral-400 md:text-base">
          {answer}
        </p>
      </Accordion.Content>
    </Accordion.Item>
  )
}

interface FaqAccordionProps {
  items: AccordionItemProps[]
  className?: string
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={cn('w-full', className)}
    >
      {items.map((item) => (
        <FaqAccordionItem key={item.value} {...item} />
      ))}
    </Accordion.Root>
  )
}
