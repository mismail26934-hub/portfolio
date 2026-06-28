import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-neutral-25"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'min-h-[156px] w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-25 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary',
            error && 'border-red-500',
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
