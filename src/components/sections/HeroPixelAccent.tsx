import { figmaAssets } from '@/assets/figma/assets'

export function HeroPixelAccent() {
  return (
    <div className="hero-pixel-accent" aria-hidden data-name="Pixel Accent">
      <img
        src={figmaAssets.icons.pixelAccentUp}
        alt=""
        className="hero-pixel-accent__img"
      />
    </div>
  )
}
