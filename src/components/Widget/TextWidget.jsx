
import Image from 'next/image'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text}) {
  return (
    <Div className="cs-text_widget">
      <Image src={logoSrc} alt={logoAlt} width={150} height={100} style={{marginBottom: "-20px", filter: "brightness(0) invert(1)"}}/>
      <p>{text}</p>
    </Div>
  )
}
