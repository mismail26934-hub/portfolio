import { figmaAssets } from '@/assets/figma/assets'

export function ContactPixelAccent() {
  return (
    <>
      <div className="contact-pixel-accent contact-pixel-accent--left" aria-hidden data-name="Pixel Accent">
        <img
          src={figmaAssets.icons.pixelAccentHorizontal}
          alt=""
          className="contact-pixel-accent__img"
        />
      </div>
      <div className="contact-pixel-accent contact-pixel-accent--right" aria-hidden data-name="Pixel Accent">
        <img
          src={figmaAssets.icons.pixelAccentHorizontal}
          alt=""
          className="contact-pixel-accent__img contact-pixel-accent__img--right"
        />
      </div>
    </>
  )
}
