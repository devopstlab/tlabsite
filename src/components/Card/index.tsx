import {PrismicNextImageProps} from '@prismicio/next'
import Link from 'next/link'
import Div from '../Div'
import './card.scss'

type CardProps = {
  title: string
  link: string
  img: PrismicNextImageProps
  
}

export default function Card({title, link, img}: CardProps) {
  return (
    <Link href={link} className="cs-card cs-style1">
      <>
        {img}
        <Div className="cs-card_overlay" />
        <Div className="cs-card_info">
          <span className=" cs-hover_layer3 cs-accent_bg" />
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </Link>
  )
}
