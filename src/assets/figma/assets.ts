import profileImg from './images/profile.png'
import about1 from './images/about-1.png'
import about2 from './images/about-2.png'
import about3 from './images/about-3.png'
import portfolio1 from './images/portfolio-1.png'
import portfolio2 from './images/portfolio-2.png'
import portfolio3 from './images/portfolio-3.png'
import portfolio4 from './images/portfolio-4.png'
import portfolio5 from './images/portfolio-5.png'
import portfolio6 from './images/portfolio-6.png'
import work1 from './images/work-1.png'
import work2 from './images/work-2.png'
import work3 from './images/work-3.png'
import work4 from './images/work-4.png'

import techJs from './icons/tech-js.png'
import techCss from './icons/tech-css.png'
import techHtml from './icons/tech-html.png'
import techExpress from './icons/tech-express.png'
import techMongo from './icons/tech-mongo.png'
import techReact from './icons/tech-react.png'
import techTs from './icons/tech-ts.png'
import techDocker from './icons/tech-docker.png'

import monitorIcon from './icons/monitor.svg'
import starIcon from './icons/star.svg'
import sparkleIcon from './icons/sparkle.svg'
import sparkleMutedIcon from './icons/sparkle-muted.svg'
import pixelAccent from './icons/pixel-accent.svg'
import pixelAccentHorizontal from './icons/pixel-accent-horizontal.svg'
import pixelAccentUp from './icons/pixel-accent-up.svg'
import skillBarLine from './icons/skill-bar-line.svg'
import skillBarStripes from './icons/skill-bar-stripes.svg'
import profilePlaceholder from './icons/profile-placeholder.svg'
// Source files are misnamed: arrow-left.svg points right (green), arrow-right.svg points left (gray).
// Map keys to their actual visual direction.
import arrowLeft from './icons/arrow-right.svg'
import arrowRight from './icons/arrow-left.svg'
import statusDot from './icons/status-dot.svg'
import thinLine from './icons/thin-line.svg'

// Source files are misnamed: trello.svg = Zoom, zoom.svg = Zapier, zapier.svg = Trello.
import upworkLogo from './logos/upwork.svg'
import zoomLogo from './logos/trello.svg'
import trelloLogo from './logos/zapier.svg'
import zapierLogo from './logos/zoom.svg'

import dribbbleIcon from './social/dribbble.svg'
import instagramIcon from './social/instagram.svg'
import linkedinIcon from './social/linkedin.svg'

export const figmaAssets = {
  profile: profileImg,
  about: [about1, about2, about3] as const,
  portfolio: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6] as const,
  work: [work1, work2, work3, work4] as const,
  tech: {
    js: techJs,
    css: techCss,
    html: techHtml,
    express: techExpress,
    mongo: techMongo,
    react: techReact,
    ts: techTs,
    docker: techDocker,
  },
  icons: {
    monitor: monitorIcon,
    star: starIcon,
    sparkle: sparkleIcon,
    sparkleMuted: sparkleMutedIcon,
    pixelAccent,
    pixelAccentHorizontal,
    pixelAccentUp,
    skillBarLine,
    skillBarStripes,
    profilePlaceholder,
    arrowLeft,
    arrowRight,
    statusDot,
  },
  line: thinLine,
  logos: {
    upwork: upworkLogo,
    trello: trelloLogo,
    zoom: zoomLogo,
    zapier: zapierLogo,
  },
  social: {
    dribbble: dribbbleIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon,
  },
}
