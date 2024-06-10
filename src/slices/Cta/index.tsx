import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Div from "@/components/Div";
import Spacing from "@/components/Spacing";
import {Content} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import './cta.scss';

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta = ({ slice }: CtaProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Spacing lg="150" md="40" />
      <Div
        className={`cs-cta cs-style1 cs-bg text-center cs-shape_wrap_1 cs-position_1 ${slice.variation ? slice.variation : ""}`}
        style={{ backgroundImage: `url(${slice.primary.background_image.url})` }}
      >
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="cs-cta_in">
          <h2 className="cs-cta_title cs-semi_bold cs-m0"><PrismicRichText field={slice.primary.title} /></h2>
          {slice.primary.button_text && (
            <>
              <Spacing lg="70" md="30" />
              <Button btnLink={slice.primary.button_link} btnText={slice.primary.button_text} />
            </>
          )}
        </Div>
      </Div>
    </Bounded>
  );
};

export default Cta;
