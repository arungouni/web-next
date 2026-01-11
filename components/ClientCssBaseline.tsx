"use client";

import { CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";

export default function ClientCssBaseline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <CssBaseline />;
}
