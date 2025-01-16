import Bounded from "@/components/Bounded";
import Div from "@/components/Div";
import Spacing from "@/components/Spacing";
import {WordCloud} from "@/slices/FunFact/components/WordCloud";
import {Content} from "@prismicio/client";
import {PrismicRichText, SliceComponentProps} from "@prismicio/react";
import "./funfact.scss";
/**
 * Props for `FunFact`.
 */
export type FunFactProps = SliceComponentProps<Content.FunFactSlice>;

/**
 * Component for "FunFact" Slices.
 */

const FunFact = ({ slice }: FunFactProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      style={{ marginTop: Number(slice.primary.top_offset) }}
    >
      <Spacing lg="150" md="40" />
      <Div
        className={
          slice.variation
            ? `cs-funfact_wrap ${slice.variation}`
            : "cs-funfact_wrap"
        }
      >
        <Div
          className="cs-funfact_shape"
          style={{ backgroundImage: "url(./images/funfact_shape_bg.svg)" }}
        />
        <Div className="cs-funfact_left">
          <Div className="cs-funfact_heading">
            <h2>
              <PrismicRichText field={slice.primary.heading} />
            </h2>
            {slice.primary.body &&<PrismicRichText field={slice.primary.body} />}
          </Div>
        </Div>
        <Div className="cs-funfact_right">
          <Div className="cs-funfacts">
            {/* {slice.items.map((item, index) => (
          <Div className="cs-funfact cs-style1" key={index}>
            <Div className="cs-funfact_number cs-primary_font cs-semi_bold cs-primary_color"><span/>{item.value}</Div>
            <Div className="cs-funfact_text">
              <span className="cs-accent_color">+</span>
              <p>{item.label}</p>
            </Div>
          </Div>
          ))} */}

            <WordCloud />
          </Div>
        </Div>
      </Div>
    </Bounded>
  );
};

export default FunFact;
