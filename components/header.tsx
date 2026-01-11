"use client";

import {
  Box,
  Container,
  Typography,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ================= TOKENS ================= */

const navItems = [
  { label: "Company", href: "/" },
  { label: "Collaborate", href: "/collaborate" },
  { label: "Updates", href: "/updates" },
];

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const BRAND = { primary: "#0064E0" };
const TEXT = { title: "#0B1020", nav: "#1F2937" };

/* ================= TYPES ================= */

interface HeaderProps {
  scrollBehavior?: "hide-on-scroll-down" | "always-visible";
  scrollThreshold?: number;
}

/* ================= COMPONENT ================= */

export default function Header({
  scrollBehavior = "always-visible",
  scrollThreshold = 10,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [drawerReady, setDrawerReady] = useState(false);
  const [ready, setReady] = useState(false);
  const [activeItem, setActiveItem] = useState("Company");
  const [elevated, setElevated] = useState(false);
  const [visible, setVisible] = useState(true);

  /* Entry animation */
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* Scroll behavior */
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      setElevated(currentScrollY > 10);

      if (scrollBehavior === "hide-on-scroll-down") {
        const diff = currentScrollY - lastScrollY;

        if (Math.abs(diff) > scrollThreshold) {
          if (diff > 0 && currentScrollY > 100) setVisible(false);
          else if (diff < 0) setVisible(true);
        }

        if (currentScrollY < 50) setVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollBehavior, scrollThreshold]);

  return (
    <>
      {/* ================= Header Shell ================= */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 12,
          left: "50%",
          transform: visible
            ? "translateX(-50%)"
            : "translate(-50%, -120%)",
          zIndex: 1000,
          minWidth: { xs: "calc(100% - 32px)", sm: "auto" },
          px: 3,
          py: 0.5,
          borderRadius: 999,
          bgcolor: "rgba(255,255,255,0.5)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0,0,0,0.06)",
          boxShadow: elevated
            ? "0 12px 34px -10px rgba(0,0,0,0.15)"
            : "0 4px 20px -5px rgba(0,0,0,0.05)",
          transition: `all 400ms ${EASE}`,
          opacity: visible ? 1 : 0,
        }}
      >
        <Container maxWidth={false} sx={{ px: 1 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={{ xs: 2, sm: 4 }}
          >
            {/* Logo */}
              <img style={{height:20}} src="/icon.png"/>
            {/* <Typography
              fontWeight={700}
              color="#334155"
              letterSpacing={"0.03rem"}
              sx={{
                opacity: ready ? 1 : 0,
                transform: ready ? "translateY(0)" : "translateY(-4px)",
                transition: `all 600ms ${EASE}`,
                fontSize: { xs: "1.15rem", md: "1.2rem" },
                display: "flex",
                alignItems: "center"
              }}
            >
              <Box component="span" sx={{ fontFamily: "Fraunces", fontWeight: 600 }}>
                f
              </Box>
              rictionlab
            </Typography> */}

            {/* Desktop Nav */}
            <Box
              display={{ xs: "none", sm: "flex" }}
              alignItems="center"
              gap={0.5}
            >
              {navItems.map((item, i) => (
               <Box
               key={item.href}  
  component={Link}
  href={item.href}
  onClick={() => setActiveItem(item.label)}
  sx={{
    minWidth: 80,
    textAlign: "center",
    fontSize: "0.825rem",
    fontWeight: 500,
    cursor: "pointer",
    textDecoration: "none", // 🔑 removes underline
    color:
      activeItem === item.label
        ? TEXT.title
        : "text.secondary",
    px: 1.5,
    py: 0.4,
    borderRadius: 999,
    opacity: ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(-4px)",
    transition: `all 240ms ${EASE}`,
    transitionDelay: `${100 + i * 50}ms`,
    backgroundColor:
      activeItem === item.label
        ? "rgba(0,0,0,0.04)"
        : "transparent",
    border: "1px solid",
    borderColor:
      activeItem === item.label
        ? "rgba(0,0,0,0.08)"
        : "transparent",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.06)",
      color: TEXT.title,
    },
  }}
>
  {item.label}
</Box>

              ))}
            </Box>

            {/* Mobile Toggle */}
            <IconButton
              onClick={() => {
                setOpen(true);
                setDrawerReady(false);
              }}
              sx={{ display: { xs: "flex", sm: "none" }, p: 1 }}
            >
              <Image
                src="/icons/menu.png"
                alt="menu"
                width={20}
                height={20}
              />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* ================= Mobile Drawer ================= */}
      <Drawer
        anchor="top"
        open={open}
        onClose={() => {
          setOpen(false);
          setDrawerReady(false);
        }}
        SlideProps={{
          timeout: 400,
          onEntered: () => setDrawerReady(true),
        }}
        PaperProps={{
          sx: {
            mt: 2,
            mx: 2,
            borderRadius: 2,
            py: 4,
            bgcolor: "rgba(255,255,255,0.68)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          },
        }}
      >
        <Stack spacing={2} alignItems="center">
          {navItems.map((item, i) => (
            <Typography
  key={item.label}
  component={Link}
  href={item.href}
  onClick={() => {
    setActiveItem(item.label);
    setOpen(false);
  }}
  sx={{
    fontSize: "1rem",
    fontWeight: 400,
    cursor: "pointer",
    px: "20px",
    textDecoration: "none", // ✅ removes underline
    borderRadius: 999,
    color: "inherit",
    backgroundColor:
      activeItem === item.label
        ? "rgba(0,0,0,0.04)"
        : "transparent",
    border: "1px solid",
    borderColor:
      activeItem === item.label
        ? "rgba(0,0,0,0.08)"
        : "transparent",
    opacity: drawerReady ? 1 : 0,
    transform: drawerReady ? "translateY(0)" : "translateY(10px)",
    transition: `all 400ms ${EASE} ${i * 60}ms`,
    "&:hover": {
      textDecoration: "none", // extra safety
    },
  }}
>
  {item.label}
</Typography>

          ))}
        </Stack>
      </Drawer>
    </>
  );
}
