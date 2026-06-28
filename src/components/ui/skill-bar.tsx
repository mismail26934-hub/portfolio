import { cn } from '@/lib/utils'
import { figmaAssets } from '@/assets/figma/assets'

interface SkillBarItemProps {
  name: string
  percentage: number
  figmaNodeId: string
  className?: string
}

export function SkillBarItem({
  name,
  percentage,
  figmaNodeId,
  className,
}: SkillBarItemProps) {
  const isFull = percentage >= 100

  return (
    <div
      className={cn('skill-bar', className)}
      data-name="Skill Bar"
      data-node-id={figmaNodeId}
    >
      <div className="skill-bar__content" data-name="Skill Bar Content">
        <div
          className="skill-bar__label"
          data-name="Skill Bar Label"
          style={{ width: `${percentage}%` }}
        >
          <span className="skill-bar__stripes" aria-hidden />
          <span className="skill-bar__name">{name}</span>
        </div>
        {!isFull && (
          <div className="skill-bar__connector" aria-hidden>
            <span className="skill-bar__line" />
          </div>
        )}
      </div>
      <span className="skill-bar__percentage">{percentage}%</span>
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
