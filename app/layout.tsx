import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Providers from "./providers";

/* Fonts */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-fraunces",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

/* Metadata */
export const metadata: Metadata = {
  title: {
    default: "frictionlab",
    template: "%s · frictionlab",
  },
  icons: {
  icon: "/icon.png",
},
  description: "Building in stealth, with intent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable}`}
    >
      <title>frictionlab</title>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
