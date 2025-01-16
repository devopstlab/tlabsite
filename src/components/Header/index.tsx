"use client"
import {useEffect, useState} from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import './header.scss';

import Div from '@/components/Div';
import Image from 'next/image';
import Link from 'next/link';
import FooterLogo from '../../app/assets/images/footer_logo.svg';
import ImgLogo from '../../app/assets/images/logo.svg';

export default function Header({ variant }:any) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ''
        } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <Image src={ImgLogo} alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                {/* <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    
                    <li>
                      <Link
                        href="about"
                        onClick={() => setMobileToggle(false)}
                      >
                        Somos Tlab
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link
                        href="service"
                        onClick={() => setMobileToggle(false)}
                      >
                        Sectores
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Verticales tecnológicas
                              <p style={{fontSize: '10px', opacity: '0.5', lineHeight: '1.3', textTransform:'lowercase'}}>Nuestras áreas de especialización tecnologicas en diversas industrias y sectores de la sociedad.</p>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Servicios y soluciones
                              <p style={{fontSize: '10px', opacity: '0.5', lineHeight: '1.3', textTransform:'lowercase'}}>Descubre nuestra amplia gama de servicios y soluciones personalizadas diseñadas para impulsar la innovación.</p>
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li >
                      <Link
                        href="portfolio"
                        onClick={() => setMobileToggle(false)}
                      >
                        Nuestras marcas
                      </Link>
                      
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="blog" onClick={() => setMobileToggle(false)}>
                        TBuilder
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href="service"
                              onClick={() => setMobileToggle(false)}
                            >
                              Oportunidades de inversión
                              <p style={{fontSize: '10px', opacity: '0.5', lineHeight: '1.3', textTransform:'lowercase'}}>Accede a proyectos y startups en busca de financiación.</p>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Portafolio de Proyectos
                              <p style={{fontSize: '10px', opacity: '0.5', lineHeight: '1.3', textTransform:'lowercase'}}>Explora las soluciones y tecnologías que hemos desarrollado y financiado.</p>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/service/service-details"
                              onClick={() => setMobileToggle(false)}
                            >
                              Proceso de Inversión
                              <p style={{fontSize: '10px', opacity: '0.5', lineHeight: '1.3', textTransform:'lowercase'}}>Conoce cómo trabajamos y cómo puedes unirte a nuestras iniciativas de venture capital.</p>
                            </Link>
                            
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div> */}
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <Image src={FooterLogo} alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a project in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle="At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit."
              placeholder="example@gmail.com"
            />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
