import { cn } from '@/lib/utils'
import { figmaAssets } from '@/assets/figma/assets'

interface SkillBarItemProps {
  name: string
  percentage: number
  className?: string
}

export function SkillBarItem({ name, percentage, className }: SkillBarItemProps) {
  const isFull = percentage >= 100

  return (
    <div className={cn('flex items-center gap-4 lg:gap-6', className)}>
      <div className="flex w-[467px] max-w-full flex-1 items-center">
        <div
          className={cn(
            'relative flex h-10 min-w-0 items-center overflow-hidden bg-[#3a6601] px-4 lg:h-16 lg:px-6',
            isFull ? 'rounded-2xl' : 'rounded-[20px]',
          )}
          style={{ width: `${percentage}%`, minWidth: '120px' }}
        >
          <span className="diagonal-stripes absolute inset-0 opacity-60" aria-hidden />
          <span className="relative z-10 text-sm font-semibold leading-7 text-neutral-25 lg:text-lg lg:leading-8">
            {name}
          </span>
        </div>
        {!isFull && <div className="h-px min-w-[24px] flex-1 bg-neutral-800 lg:min-w-[40px]" />}
      </div>
      <span className="w-10 shrink-0 text-right text-base font-semibold leading-7 text-neutral-25 lg:w-12 lg:text-xl lg:leading-[34px]">
        {percentage}%
      </span>
    </div>
  )
}

interface StarRatingProps {
  rating?: number
  size?: 'sm' | 'md'
}

export function StarRating({ rating = 5, size = 'md' }: StarRatingProps) {
  const iconSize = size === 'sm' ? 'size-6' : 'size-8'

  return (
    <div className="flex items-center gap-0">
      {Array.from({ length: rating }).map((_, i) => (
        <img
          key={i}
          src={figmaAssets.icons.star}
          alt=""
          className={iconSize}
          aria-hidden
        />
      ))}
    </div>
  )
}

interface RatingCardProps {
  className?: string
}

export function RatingCard({ className }: RatingCardProps) {
  return (
    <div className={cn('rounded-[20px] border border-neutral-800 bg-black p-5', className)}>
      <p className="font-display text-[32px] font-bold leading-[44px] tracking-[-0.64px] text-neutral-25 lg:text-[40px] lg:leading-[56px] lg:tracking-[-0.8px]">
        5.0
      </p>
      <div className="mt-2">
        <StarRating rating={5} size="md" />
      </div>
      <p className="mt-2 text-base font-semibold leading-7 text-neutral-25 lg:text-xl lg:leading-[34px]">
        Many Client Trust with me
      </p>
    </div>
  )
}

export function ProfileRatingCard({ className }: RatingCardProps) {
  return (
    <div className={cn('profile-rating-card', className)}>
      <p className="profile-rating-card__score">5.0</p>
      <div className="profile-rating-card__stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <img key={i} src={figmaAssets.icons.star} alt="" aria-hidden />
        ))}
      </div>
      <p className="profile-rating-card__label">Many Client Trust with me</p>
    </div>
  )
}
