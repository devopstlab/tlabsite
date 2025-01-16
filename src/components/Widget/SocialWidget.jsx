"use client"
import {Icon} from '@iconify/react';
import Link from 'next/link';
import Div from '../Div';

//TODO: sacar a editor
export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://www.linkedin.com/company/somostlab/' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      {/* <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link>
      <Link href='/' className="cs-center">
        <Icon icon="fa6-brands:youtube" />              
      </Link> */}
      <Link href='https://www.instagram.com/somostlab/' target='_blank' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
    </Div>
  )
}
