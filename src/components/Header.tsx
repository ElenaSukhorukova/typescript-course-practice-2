import { type PropsWithChildren } from "react";

type HeaderType = PropsWithChildren<{ image: { src: string, alt: string } }>;

export default function Header({image, children}: HeaderType) {
  return <header>
    <img {...image} />
    {children}
  </header>
}
