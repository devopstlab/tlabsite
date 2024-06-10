import Bounded from "@/components/Bounded";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import {Content} from "@prismicio/client";
import {PrismicNextImage, PrismicNextLink} from "@prismicio/next";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";

/**
 * Props for `WorkWithUs`.
 */
export type WorkWithUsProps = SliceComponentProps<Content.WorkWithUsSlice>;

/**
 * Component for "WorkWithUs" Slices.
 */
const WorkWithUs = ({ slice }: WorkWithUsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Spacing lg="150" md="40" />
      <Div className="row align-items-center ">
        <Div className="col-lg-5">
          <Div className="cs-image_layer cs-style1">
            <Div className="cs-image_layer_in">
              <PrismicNextImage
                field={slice.primary.main_image}
                className="w-100 cs-radius_15"
              />
            </Div>
          </Div>
        </Div>
        <Div className="col-lg-6 offset-lg-1">
          <Div className="cs-height_0 cs-height_lg_40" />
          <SectionHeading
            title={<PrismicRichText field={slice.primary.heading} />}
            subtitle={<PrismicRichText field={slice.primary.sub_heading} />}
            btnText={slice.primary.button_text}
            btnLink={
              <PrismicNextLink field={slice.primary.button_link}>
                Link
              </PrismicNextLink>
            }
          >
            <Spacing lg="30" md="20" />
            <PrismicRichText field={slice.primary.main_text} />
          </SectionHeading>
        </Div>
      </Div>
    </Bounded>
  );
};

export default WorkWithUs;
