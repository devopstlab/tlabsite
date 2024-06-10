
import Image from 'next/image'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <Image src={logoSrc} alt={logoAlt} />
      <p>{text}</p>
    </Div>
  )
}
