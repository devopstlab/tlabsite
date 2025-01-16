import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

import Header from "@/components/Header";
import {repositoryName} from "@/prismicio";
import {PrismicPreview} from "@prismicio/next";
import "bootstrap/dist/css/bootstrap.min.css";
import {DM_Sans, Poppins} from "next/font/google";
import "../scss/index.scss";

const dmSans = DM_Sans({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const poppins = Poppins({
  weight: ['400', '600', '700'],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={`${dmSans.variable} ${poppins.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <CustomCursor />
        <Footer
          copyrightText={"Copyright © 2022."}
          logoAlt={"Logo"}
          logoSrc={"/images/footer_logo.svg"}
          text={
            "Welcome to arino sed ut perspiciae omunde omnis iste natus error sitort voluptatem accusantium."
          }
        />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
