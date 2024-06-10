import Button from '../Button';
import Div from '../Div';
import Spacing from '../Spacing';

type SectionHeadingProps = {
  title?: any
  subtitle?: any
  btnLink?: any
  btnText?: any
  variant?: string
  children?: any
}

export default function SectionHeading({title, subtitle, btnLink, btnText, variant, children} : SectionHeadingProps) {
  return (
    <Div className={variant ? `cs-section_heading ${variant}` : `cs-section_heading cs-style1`}>
      <h3 className="cs-section_subtitle">{title}</h3>
      <h2 className="cs-section_title">{subtitle}</h2>
      {children}
      {btnText && (
        <>
          <Spacing lg='45' md='20'/>
          <Button btnLink={btnLink} btnText={btnText}/>
        </>
      )}
    </Div>
  )
}
