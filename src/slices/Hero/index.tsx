import Button from "@/components/Button";
import Div from "@/components/Div";
import VerticalLinks from "@/components/VerticalLinks";
import {Content} from "@prismicio/client";
import {PrismicRichText, PrismicText, SliceComponentProps} from "@prismicio/react";
import './hero.scss';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const scrollDownId = " #scroll-down";
  const socialLinksHeading = "Seguinos en redes";
  const heroSocialLinks = [{name: "Facebook", links: "https://www.facebook.com/"}, {name: "Instagram", links: "https://www.instagram.com/"}] as any;
  return (
      // <Div
      //   className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      //   style={{ backgroundImage: `url(${slice.primary.image.url})` }}
      // >
      <Div
        className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      >

                <Div className='cs-vid'>
                    <video loop autoPlay muted>
                        <source src="https://res.cloudinary.com/dkur1dicq/video/upload/v1713889744/tlab/tlab_reel_2.mp4" type="video/mp4" ></source>
                    </video>
                </Div>
                <Div className='cs-vid-overlay'/>

              
   
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="container">
          <Div className="cs-hero_text">
            <h1 className="cs-hero_title"><PrismicText field={slice.primary.heading} />
            </h1>
            <Div className="cs-hero_info">
              <Div> <Button btnLink={slice.primary.button_link} btnText={slice.primary.button_label} /></Div>
              <Div>
                <Div className="cs-hero_subtitle"><PrismicRichText field={slice.primary.body} /></Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
         <a href={scrollDownId} className="cs-down_btn">
        </a> 
      </Div>
    
  );
};

export default Hero;
