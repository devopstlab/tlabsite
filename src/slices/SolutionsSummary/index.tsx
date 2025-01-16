import Card from "@/components/Card";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import {Content} from "@prismicio/client";
import {PrismicNextImage} from "@prismicio/next";
import {SliceComponentProps} from "@prismicio/react";
import './solutionsSummary.scss';

/**
 * Props for `SolutionsSummary`.
 */
export type SolutionsSummaryProps =
  SliceComponentProps<Content.SolutionsSummarySlice>;

/**
 * Component for "SolutionsSummary" Slices.
 */
const SolutionsSummary = ({ slice }: SolutionsSummaryProps): JSX.Element => {
  // Paso 1: dividimos los ítems en grupos de a 3 para generar las filas
  const chunkedItems = [];
  for (let i = 0; i < slice.items.length; i += 3) {
    chunkedItems.push(slice.items.slice(i, i + 3));
  }

  return (
    <section
      className="container"
      id="nuestra-huella"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Nuestra huella"
                subtitle="Innovación que transforma"
                btnText=""
                btnLink=""
              />
              <Spacing lg="45" md="45" />
              <span>Desarrollos que potencian avances estratégicos y generan valor tangible en sectores clave, redefiniendo estándares y abriendo nuevas oportunidades. <br/><br/>Cada solución actúa como un motor de transformación, posicionando el cambio sostenible como eje central en el progreso de la industria.</span>
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              {/* Paso 2: Recorrer cada “fila” */}
              {chunkedItems.map((rowItems, rowIndex) => (
                <Div className={`row ${rowIndex % 2 == 0 ? 'cs-offset' : ''}`} key={rowIndex}>
                  {/* Agrego una columna fantasma a la izquierda 
                      (ajustá col-lg-2, col-lg-3, etc. a tu gusto) */}
                  <Div className="col-lg-2 col-sm-6 cs-hidden_mobile"></Div>
                  
                  {rowItems.map((item, itemIndex) => (
                    <Div className="col-lg-3 col-sm-6" key={itemIndex}>
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
                      <Spacing lg="30" md="30" />
                    </Div>
                  ))}

                  {/* Otra columna fantasma a la derecha */}
                  <Div className="col-lg-2 col-sm-6 cs-hidden_mobile"></Div>
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
      </Div>
    </section>
  );
};

export default SolutionsSummary;