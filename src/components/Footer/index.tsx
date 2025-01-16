import ContactInfoWidget from "@/components/Widget/ContactInfoWidget";
import SocialWidget from "@/components/Widget/SocialWidget";
import logo from "../../app/assets/images/footer_logo.svg";
import Div from "../Div";
import TextWidget from "../Widget/TextWidget";
import "./footer.scss";
const copyrightLinks = [
  {
    title: "Terms of Use",
    href: "/",
  },
  {
    title: "Privacy Policy",
    href: "/",
  },
];

const serviceMenu = [
  {
    title: "UI/UX design",
    href: "/service/service-details",
  },
  {
    title: "WP development",
    href: "/service/service-details",
  },
  {
    title: "Digital marketing",
    href: "/service/service-details",
  },
  {
    title: "React development",
    href: "/service/service-details",
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }: any) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-6 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc={logo}
                  logoAlt="Logo"
                  text={`Bienvenidos a nuestra
              revolución`}
                />
                <SocialWidget />
              </Div>
            </Div>
            {/* <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                {/* <MenuWidget
                  menuItems={serviceMenu}
                  menuHeading="Services"
                  variant={"cs-style1"}
                /> 
              </Div>
            </Div> */}
            <Div className="col-lg-6 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contáctanos" withIcon={true} />
              </Div>
            </Div>
            {/* <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div> */}
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2025 Tlab.</Div>
          </Div>
          {/* <Div className="cs-bottom_footer_right">
            <MenuWidget
              menuItems={copyrightLinks}
              variant=" cs-style2"
              menuHeading={"Copyright Links"}
            />
          </Div> */}
        </Div>
      </Div>
    </footer>
  );
}
