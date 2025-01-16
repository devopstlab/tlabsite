import Card from "@/components/Card";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import {Content} from "@prismicio/client";
import {PrismicNextImage} from "@prismicio/next";
import {SliceComponentProps} from "@prismicio/react";

/**
 * Props for `SolutionsSummary`.
 */
export type SolutionsSummaryProps =
  SliceComponentProps<Content.SolutionsSummarySlice>;

/**
 * Component for "SolutionsSummary" Slices.
 */
const SolutionsSummary = ({ slice }: SolutionsSummaryProps): JSX.Element => {
  return (
    <section
      className="container"
      id="nuestra-huella"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Start Servide Section */}

      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title={"Nuestra huella"}
                subtitle="Innovación que transforma"
                btnText="Todas nuestras soluciones"
                btnLink="/services"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                {slice.items.map((item, index) => {
                  if(index <= 3)
                  return (
                    <>
                      {index < 2 && (
                        <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                      )}
                      <Div className="col-lg-3 col-sm-6">
                        <Card
                          title={item.item_title as any}
                          link={item.item_link as any}
                        
                          img={
                            (
                              <PrismicNextImage
                                field={item.item_image}
                                alt={item.item_image.alt as any}
                              />
                            ) as any
                          }
                        />
                        <Spacing lg="0" md="30" />
                      </Div>
                      {index >= 2 && (
                        <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                      )}
                    </>
                  );
                })}
              </Div>
              </Div>
              <Div className="col-xl-8">
{/* 
              <Div className="row">
                {slice.items.map((item, index) => {
                  if(index >= 4)
                  return (
                    <>
                      {index < 2 && (
                        <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                      )}
                      <Div className="col-lg-3 col-sm-6">
                        <Card
                          title={item.item_title as any}
                          link={item.item_link as any}
                          img={
                            (
                              <PrismicNextImage
                                field={item.item_image}
                                alt={item.item_image.alt as any}
                              />
                            ) as any
                          }
                        />
                        <Spacing lg="0" md="30" />
                      </Div>
                      {index >= 2 && (
                        <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                      )}
                    </>
                  );
                })}
              </Div> */}
             
            </Div>
          </Div>
        </Div>
      </Div>

      {/* End Servide Section */}
    </section>
  );
};

export default SolutionsSummary;
