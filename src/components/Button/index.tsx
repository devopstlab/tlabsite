"use client"
import {Icon} from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function Button({ btnLink, btnText, variant, icon }: any) {
  return (
    <Link
      href={btnLink}
      className={variant ? `cs-text_btn ${variant}` : "cs-text_btn"}
    > 
      <>
        <span>{btnText}</span>
         {icon ? icon : <Icon icon="bi:arrow-right" />} 
      </>
    </Link>
  );
}
