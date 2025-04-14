import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "./Components/Common/AnimationWrapper";


export const metadata: Metadata = {
  title: "VA Concepts",
  description: "VA Concepts - Design, Product Sourcing & Stretch Ceilings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AppWrapper> {children} </AppWrapper>
        
      </body>
    </html>
  );
}
