"use client"
import {Icon} from '@iconify/react';

//TODO: sacar a editor  
export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        {/* <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          +44 454 7800 112
        </li> */}
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          info@tlab.com.ar
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          1 de enero 65, Puerto Amarras - Torre 2<br/>Santa Fe, Argentina
        </li>
      </ul>
    </>
  )
}
