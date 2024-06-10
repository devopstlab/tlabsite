import {Content} from "@prismicio/client";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `Separator`.
 */
export type SeparatorProps = SliceComponentProps<Content.SeparatorSlice>;

/**
 * Component for "Separator" Slices.
 */
const Separator = ({ slice }: SeparatorProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div style={{height: Number(slice.primary.height)}}/>
    </section>
  );
};

export default Separator;
