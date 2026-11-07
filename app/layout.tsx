import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yaanz Official — SANTANIC Entertainment",
  description: "Personal portfolio of Yaanz Official, developer and founder of SANTANIC STORE.",
  metadataBase: new URL("https://santanic.id"),
  openGraph: {
    title: "Yaanz Official — SANTANIC",
    description: "Building digital experiences with purpose.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}