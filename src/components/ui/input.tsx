import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-25"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={cn(
            'h-12 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 text-sm text-neutral-25 outline-none transition-colors placeholder:text-neutral-400 focus:border-primary',
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
Input.displayName = 'Input'

export { Input }
