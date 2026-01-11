"use client";

import dynamic from "next/dynamic";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { Footer } from "@/components/footer";
import ClientCssBaseline from "@/components/ClientCssBaseline";

/* Disable SSR for Header (already correct) */
const Header = dynamic(() => import("../components/header"), {
  ssr: false,
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <ClientCssBaseline />
      <Header />
      <main>{children}</main>
      <Footer legal />
    </ThemeProvider>
  );
}
