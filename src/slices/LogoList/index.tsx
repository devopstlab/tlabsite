import Bounded from "@/components/Bounded";
import Div from "@/components/Div";
import Spacing from "@/components/Spacing";
import {Content} from "@prismicio/client";
import {PrismicNextImage} from "@prismicio/next";
import {SliceComponentProps} from "@prismicio/react";
import "./logolist.scss";

/**
 * Props for `LogoList`.
 */
export type LogoListProps = SliceComponentProps<Content.LogoListSlice>;

/**
 * Component for "LogoList" Slices.
 */
const LogoList = ({ slice }: LogoListProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Spacing lg="180" md="40" />
      
      <h2 className="cs-partner_heading">Empresas y proyectos creados en Tlab</h2>
      
      
      <Div className="cs-partner_logo_wrap">
        {slice.items.map((item, index) => (
          <div className="cs-partner_logo" key={index}>
            <PrismicNextImage
              field={item.logo_image}
              alt={item.logo_image.alt as any}
            />
          </div>
        ))}
      </Div>
    </Bounded>
  );
};

export default LogoList;
