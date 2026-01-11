"use client";

import { type ReactNode, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Fade,
  useTheme,
  useMediaQuery,
  Button,
  Divider,
  Stack,
} from "@mui/material";
import {
  Extension,
  Psychology,
  CropSquare,
  VisibilityOff,
  Science,
  Visibility,
  LockOutlined,
  TuneOutlined,
  CheckOutlined,
  SchoolOutlined,
  ScienceOutlined,
  BusinessCenterOutlined,
  HubOutlined,
  SpeedOutlined,
  Height,
} from "@mui/icons-material";

/* ================= TOKENS ================= */

const BRAND = {
  primary: "#0064E0",
  primarySoft: "#1E7BF0",
};

const motionEase = "cubic-bezier(0.22, 1, 0.36, 1)";

/* ================= TYPES ================= */

interface SectionEnterProps {
  children: ReactNode;
  delay?: number;
}

interface ChecklistItemProps {
  children: ReactNode;
  delay?: number;
}

/* ================= PRIMITIVES ================= */

const SectionEnter = ({ children, delay = 0 }: SectionEnterProps) => (
  <Fade in timeout={800} style={{ transitionDelay: `${delay}ms` }}>
    <Box
      sx={{
        animation: `sectionIn 800ms ${motionEase} both`,
        "@keyframes sectionIn": {
          from: { opacity: 0, transform: "translateY(12px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {children}
    </Box>
  </Fade>
);

const ChecklistItem = ({ children, delay = 0 }: ChecklistItemProps) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      animation: `itemIn 420ms ${motionEase} both`,
      animationDelay: `${delay}ms`,
      "@keyframes itemIn": {
        from: { opacity: 0, transform: "translateY(6px)" },
        to: { opacity: 1, transform: "translateY(0)" },
      },
    }}
  >
    <CheckOutlined sx={{ fontSize: 18, color: BRAND.primary, opacity: 0.7 }} />
    <Typography color="text.secondary">{children}</Typography>
  </Box>
);

const headingSx = {
  fontSize: { xs: "1.8rem", sm: "2.5rem" },
  lineHeight: { xs: 1.25, sm: 1.15 },
  letterSpacing: { xs: "0.02em", sm: "0.02em" },
  fontWeight: 700,
};

// Standard section style for consistent look
const sectionBoxSx = {
  position: "relative",
  display: "flex",
  backgroundColor: "#fff",
  overflow: "hidden",
  py: { xs: 6, sm: 8 }, // Consistent vertical padding
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.08,
    pointerEvents: "none",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(2200px 1400px at 50% -35%, rgba(0,100,224,0.016), transparent 60%)",
    pointerEvents: "none",
  },
};

/* ================= STATUS ROTATOR ================= */

const statusLines = [
  { text: "Building core architecture", icon: <Extension fontSize="small" /> },
  { text: "Solving complex problems", icon: <Psychology fontSize="small" /> },
  { text: "Early development phase", icon: <CropSquare fontSize="small" /> },
  { text: "Stealth mode active", icon: <VisibilityOff fontSize="small" /> },
  { text: "Running experiments", icon: <Science fontSize="small" /> },
  { text: "Gathering insights", icon: <Visibility fontSize="small" /> },
];

/* ================= COMPONENT ================= */

export default function Company() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [index, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % statusLines.length);
        setVisible(true);
      }, 250);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const current = statusLines[index];

  return (
    <>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          ...sectionBoxSx,
          py: { xs: 8, sm: 8}, // Hero gets slightly more air
          "&::after": {
            ...sectionBoxSx["&::after"],
            backgroundImage: "url(/keyboard.jpg)",
            opacity: 0.15,
            transform: "scale(1.05)",
            animation: "bgFloat 28s ease-in-out infinite alternate",
          },
          "@keyframes bgFloat": {
            from: { transform: "scale(1.05) translateY(0px)" },
            to: { transform: "scale(1.12) translateY(-30px)" },
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Box textAlign="center" px={isMobile ? 1 : 0}>
            <SectionEnter>
              <Typography sx={headingSx} color="text.secondary">
                Building in stealth, with intent
              </Typography>
            </SectionEnter>

            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.2,
                py: 0.6,
                mt: 2,
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.92)",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  padding: "0.75px",
                  borderRadius: 999,
                  background:
                    "linear-gradient(120deg, rgba(0,100,224,0.60), rgba(64,120,255,0.55), rgba(124,92,255,0.50), rgba(170,90,255,0.48), rgba(220,90,200,0.46), rgba(255,120,90,0.44), rgba(255,170,60,0.42), rgba(255,220,80,0.40), rgba(140,220,120,0.42), rgba(0,224,164,0.48), rgba(0,198,255,0.50))",
                  backgroundSize: "300% 300%",
                  animation: "softGradient 10s ease infinite",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  pointerEvents: "none",
                },
                "@keyframes softGradient": {
                  "0%": { backgroundPosition: "0% 50%" },
                  "100%": { backgroundPosition: "300% 50%" },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  transform: visible ? "translateY(0)" : "translateY(2px)",
                  opacity: visible ? 1 : 0,
                  transition:
                    "transform 420ms cubic-bezier(.2,.8,.2,1), opacity 320ms ease-out",
                }}
              >
                {current.icon}
              </Box>
              <Typography
                variant="caption"
                fontWeight={600}
                sx={{
                  transform: visible ? "translateY(0)" : "translateY(3px)",
                  opacity: visible ? 1 : 0,
                  filter: visible ? "blur(0)" : "blur(3px)",
                  transition:
                    "transform 520ms cubic-bezier(.2,.8,.2,1), opacity 360ms ease-out, filter 520ms ease-out",
                  transitionDelay: "60ms",
                  willChange: "transform, opacity",
                }}
              >
                {current.text}
              </Typography>
            </Box>

            <SectionEnter delay={6}>
              <Typography
                color="text.secondary"
                lineHeight={1.8}
                sx={{ mt: 3 }}
              >
                Right now, our focus is on understanding the problem space
                deeply, testing assumptions, iterating quickly and laying strong
                foundations.
              </Typography>
              <Typography color="text.secondary" lineHeight={1.8} sx={{ mt: 2 }}>
                More will surface when it's ready.
              </Typography>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  mt: 2,
                  fontWeight: "400",
                  borderRadius: 999,
                  px: 3,
                  textTransform: "none",
                  backgroundColor: BRAND.primary,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: BRAND.primarySoft,
                    transform: "translateY(-3px)",
                    boxShadow: "none",
                  },
                }}
              >
                Get in touch
              </Button>
            </SectionEnter>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* ================= DATA & PRIVACY ================= */}
      <SectionEnter>
        <Box
          sx={{
            ...sectionBoxSx,
            "&::after": {
              ...sectionBoxSx["&::after"],
              backgroundImage: "url(/dataprivacy.png)",
            },
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center">

<img style={{height:38, marginBottom:1.5, opacity:0.85}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFM0lEQVR4nO2d249eUxiHnzFaU+0oehDHBCEx7UUHfwHhpg4zBkFLxAVBDeMQIkMrIqFCaK8qxIXTBXEjQiMuqr1h2pKOIqQ0mNEyMzQYZmRmyUreJpNJO2vtb39r7XftvZ/kl0y+0/q979rfmrXX6YOampqamhrdnArcBGwCtgLfAWPApGhMHrPPvSivte+pycEy4D5gF2Aa1ABwr3xWjSdnAZuB8RyJn61x+facWXRwmpknV+ufTUz8kSpiA9BWdLDaWAF8GTDxszUIdBQdtBZuBP6OmPzD+gu4noqzDpgqIPmHNQ08QEW5q8DEz1YfFWx2pjImaRjYAqwFOoElwLGiJfKYfe4l4JeMnz1VpeZoRcY2fxuwGmjNUIZ97RXA9oz/Ey6g5ByXobczDHQ1ocweYMizzD3AfErMYxnuYE9vYrn2Tvhjz7IfpcR3uD53t+8CCwKUb6/sdzzKt83jGZSQzR7BfxYo+TMrweebYAf0SsUyj6t/uMnNztFYLmXN5WW8bAN4fR5XXVdEP9d6+LmHErHLo6sZm+0ezWEpOM3jaltdgK8rPYYpTqEErPFo+1sL8GXLPODwdgMlYJMjyC0FenvZ4e0FSsBWR5BrC/R2i8PbB5SAfY4gOwv0dpHDm53oT55RR5AnF+htqcPbCCVgwhHkvAK9zXd4s96Tx9UFdbEYuBR4BHgb2AHsld7TP6JheWyHvOZh4BJ5b2h/6mkkwPOBx2XyfNrjM+bqy++Rzzqvif6SwjfANuBuYGeOhLu0U6ZCZy5LqXwFzAduB34OmPjZOijNlB15rXwFDEVMfCNlJ49JXMlTdAJNXQFpK3mKTqCpKyBtJU2LggSanLIxJMsGBQk0ObWeRLm64JXPpkmalkn85BZhHVKQPNMk/ZHS9ibbZn6oIGmmyfoolf8HtylIlgmkW1HOIo9VZylrCFiIYtYrSJIJrH6UcrzH/G8ZNKb1W7BOQXJMJN2JQr6OFPznkoCVsqJiofzdF3Gv8Vco48IIQU/KLNYxjuWGvfLa0H5WoYinAwf7H3BZBj+XR6iEp6hQ83N/A556A3uyKzZUsDzn0hHj0O4G70Bbpa0O5Wta9icXzjWBr7Q7Au/MyaOrUMCTgYPsyOFtZWBvT6CAtwIH2ZbDW3tgb2+ggAHFFbAgsLdPUcCPipugjsDe9qOAscBB9ubw9lBgb3bsS/36/7za2+AmPvueHwJ7m6hCBZgGb8T6I/j6FwWMRAh0Us7/8aU70oKA31DA/giBmhmDcT5LYWKtxvgeBYTcUGGOIBcxvag4zuDNClfAa1RwHthF5eaHeypcAd1UYDjaKK2AKdnorYLBClbAbhTxfAUrYCOKuLiCFbAKZcRqhlzE8GDHp9TxYKTg2+fwsDiSh0bGpoLTHmFo2ji6fjG6xCOyCLmyW5K+OcoZQ/axbyOUb49fVstJwK8RkvATcB1wgqgnUvIPeB6BUyhl3qBxMwnQIgcnmZJpWypblCznysY2UxL9DpxDYvicz2wSkV39lyTPKUieyalnSBjbZr6qIIkmx8q3ufYjJIE9lvJ9Bck0GfVewUdqNhX7U1OvKEiqyTDVWJrkz2yOnlWQXDOHpqXNT6a72QhdkcaMTEYdqtKPudk+9ScKkj7zJutsKkaLHB9/sMDEj8qZpaVuclycKEcLx9xlPyKjmuoH1mKySCY6Qm62HpR9Y2rH87XQKT2mL3Ku85ySnfUbNc7hpsJSGYvplzvTAflVjlFZGj8hf++T516X13ZrWrdTU1NTU1PDLP4HZ1fBfzsyGvAAAAAASUVORK5CYII=" alt="lock-2"/>
      <Typography sx={headingSx}>Data & Privacy</Typography>
              <Stack alignItems="center" spacing={0.5} mt={3}>
                <ChecklistItem delay={80}>
                  Data is processed only for its intended purpose.
                </ChecklistItem>
                <ChecklistItem delay={160}>
                  Never for personalization or secondary processing.
                </ChecklistItem>
              </Stack>
              <Button
                size="medium"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  fontWeight: 550,
                  mt: 2,
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                }}
              >
            Read principles
              </Button>
            </Box>
          </Container>
        </Box>
      </SectionEnter>

      <Divider />

      {/* ================= PERSPECTIVE & CONTROL ================= */}
      <SectionEnter delay={120}>
        <Box
          sx={{
            ...sectionBoxSx,
            "&::after": {
              ...sectionBoxSx["&::after"],
              backgroundImage: "url(/percpective.jpg)",
            },
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center">

<img style={{marginBottom:1.5, opacity:0.85, height:38}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACS0lEQVR4nO2by0oDQRBFLyjpj4hZuXAjiP8V81+6EXErLo2zih8iYh5LpSTQAZE8mHZ6qlJ1D/QmkKnbdYaZJJUBCCGEEEIIOXpOAZywXv9cA3gG8A3gC8ATgCvW64dzAEsA8metX7tkvfo8bAm3WY+sV5/VnoAL1quPHFisVxnvDREKiFWvNd4bIlYEJAATAK8Hbky71iq/9yYfq5SQAoYA3gqavmvN8jFLCCcgddz83xJSQZ5wAiYVmr9Z44I84QQ0FQVMC/KEE7Dtd5Cu1rIgDwV0uOYFecIJ4CUIugJuKgoYF+QJJyDlj4xdN38GYFCQJ5wA5C9NXUrgF7ECBvmSMS28Ma/f85KPUXLmI7oAKwgF6CIUoItQgC5CAboIBegiFKCLUIAuQgE+G5KMzLxDChgamnmHE5CMzbzDCZhUaP5/fm4PJ6AxNnAKJ2BpbObdGgpApzPvcAIaXoJ061mbeYcTkIzNvMMJsDbzDinA0sw7rICjhQKUoQBlKEAZClCGApShAGUoQBnvM1qxLtz7jFaiCUjGZrThBEwqNP+YHolSD9gEfyhQPeAy+HPJrgXMDeyvc3gJUsb7jFaiCUjGZrThBFib0YYUYGlGG1aAFczvz3xA7/szH9D7/swH9L4/8wG97898QO/7Mx/Q+/7MB/S+v74DivN6rfHeEKGAWPVa470hQgGx6rXGe0OEAmLVa433hoh1AYs94T5Zrz73ewLesl59LgB8bAn3DuCM9fphBOAu//Fpns+MmuFGzusRQgghhBBC4Jcfs05v3e2aZlUAAAAASUVORK5CYII=" alt="vertical-settings-mixer"/>
      <Typography sx={headingSx}>Percpective & Control</Typography>
              <Typography color="text.secondary" mt={2}>
                Multiple perspectives inform the system.
              </Typography>
              <Stack alignItems="center" spacing={1.2} mt={3}>
                <ChecklistItem delay={80}>Plural inputs</ChecklistItem>
                <ChecklistItem delay={160}>Explicit control</ChecklistItem>
                <ChecklistItem delay={240}>No silent defaults</ChecklistItem>
              </Stack>
              <Button
                size="medium"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  fontWeight: 550,
                  mt: 2,
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                }}
              >
              View Details
              </Button>
            </Box>
          </Container>
        </Box>
      </SectionEnter>

      <Divider />

      {/* ================= Performance & Scale ================= */}
      <SectionEnter delay={120}>
        <Box
          sx={{
            ...sectionBoxSx,
            "&::after": {
              ...sectionBoxSx["&::after"],
              backgroundImage: "url(/scalep.jpg)",
            },
          }}
        >
          <Container maxWidth="md">
            <Box textAlign="center">


<img style={{marginBottom:1.5, opacity:1.5, height:38}} src="data:image/png;base64,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" alt="ookla-speedtest"/>

   <Typography sx={headingSx}>Performance & Scale</Typography>

              <Typography color="text.secondary" mt={2}>
                Built to stay reliable as usage and complexity grow.
              </Typography>
              <Stack alignItems="center" spacing={1.2} mt={3}>
                <ChecklistItem delay={80}>
                  Predictable behavior under load
                </ChecklistItem>
                <ChecklistItem delay={160}>
                  Designed to grow without rework
                </ChecklistItem>
                <ChecklistItem delay={240}>
                  Failures are visible and understandable
                </ChecklistItem>
              </Stack>
              <Button
                size="medium"
                sx={{
                  textTransform: "none",
                  borderRadius: 999,
                  fontWeight: 550,
                  mt: 2,
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                }}
              >
View Details
              </Button>
            </Box>
          </Container>
        </Box>
      </SectionEnter>

      {/* ================= DOMAIN LINE ================= */}
      <Box sx={{ py: { xs: 6, sm: 8 }, backgroundColor: "rgb(241, 245, 249)" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 5, sm: 0 },
              textAlign: "center",
            }}
          >
            <Box>

<img style={{height:50, opacity:0.85}} src="data:image/png;base64,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" alt="financial-growth-analysis--v1"/>
              <Typography
                sx={{
                  letterSpacing:"0.05rem",
                  mt: 1,
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                Research
              </Typography>
            </Box>
            <Box>
              <img style={{height:50, opacity:0.85}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQklEQVR4nO2dX4iOWRzHP+3MxNhF/sRq82eIXG0mN5vNotxuMVZZISmi5EpLcUEuLNbFltSmiM3uplDsxazWjuRPZJJSLjRqSLHD2KzFLLtHp37qTWbmfeec55znPM/vU9/SO+X5fX+/5/297/M85/xeUBRFURRFURRFyT8TgfVAK/BI1Cqv2b8pnvkAmAlsA64B/wOmD3UA3wPzgfrYwafKEOBL4Afgfj8J70v23XEMWAEMj20q70wE1gCngZcOSe9Nr4ALwCZgWmyzKbYW41mlbFW+WovxrEK3qqxbi9FWla/WYsrYqj4CWoCDwMMASfkTOAx8JTosr2V93IfisUU8l6q1dFSciQ05eOcFb1WhDb6uMDh9APFOiniCeG9V9tvBvQAmuipayzCP8Q+raFVdAXzcBZb5Cn5lxsHeBHYCnwN1ZE+dHGunHDtLb8t9BNyRs9bimyxb1W0fweW5tfgmi1Y13iWgcQm1lry2qrGugVyp8kA9wBlgA9BE8WgSb2fEazU5uezjwDOAJ4m3lhitqhv41Gf1vwOuApcSby1ZtqpLkqM98vmpKIqiKIqiKIqipMrHwD7gFtAJ3ADagBPAAXlKZp8bzJOr5iJeIdcDk8XjSvF8QHLQJjnplBztk5x5YfwAnoa9ANrlXslGYDbQSDoMlpg3iod28VRLDmzOPvERzI+e7ov3yL2SXXIWNZAfGiSmb4GLNdzt7E9HfATX7SmYd/UUOA58DXxIeOyykqXSQp5m5PGxj0BNAP0D/CRv+6z5AvhZjhnCmzMmsK7LM1q7jtQXg4DF8oAktB9nTCR1ATscF8sOl/8jxFKUwhXAVPTRTfLNpJYP1TWBlkkWvgBGZJfHLKgiXrtu804O4i1cAYzIruMf/Z44R8i+g9jxFb4ABngAzKmIca68Fjuu0hTAAP8Ca4F18u/Y8ZSuACYRaQHQApRazsQ2YBKXFgAtQKnlTGwDJnFpAdAClFrOxDZgEpcWAC1AqeVMbAMmcWkB0AKUWs7ENmASlxYALUCp5UxsAyZxaQHQApRazsQ2YBKXFgAtQKnlTGwDJnFpAdAClFrOxDZgEpczofZSmQLqbx8F+DUHRkyiOuWjAFOlkrHNmMRkt75OwRN2OvjvwH85MGZyLpuj3+TE9c5gmQbYLDvL7X6s1cB22dLfJnu5ilio1zKK2J6Ih2RWxCrZtzZHRlROkC2x0WmUUfd2qMVemRWdws+XGNFz4DywWwZwN9e4SzOX2DNjFrAZOJezbUU9wFngG+CznM2xyIyhwCLgF+BZhKTbLxZHgYV5+DmS2AyRwRkXAiTetpYliY3PCUqz7Pf1eQH4UkbH2DnYSpWMBrYCfzkk3g4d3wKMim0mZUbKIKUXNX6o2nfRmNjBF4km4GQVybdDoHRyeYYs7uVH27plQooSgLFy1f02+X9ouwlPA7BfVIoLJ0VRFIVC8QbgzzCWP87XBAAAAABJRU5ErkJggg==" alt="school"/>

              <Typography
                sx={{
                  letterSpacing:"0.05rem",
                  mt: 1,
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                Education
              </Typography>
            </Box>
            <Box>
<img style={{opacity:0.85}} width="50" height="50" src="https://img.icons8.com/ios-filled/50/for-experienced.png" alt="for-experienced"/>              <Typography
                sx={{
                  letterSpacing:"0.05rem",
                  mt: 1,
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                System&nbsp;Intelligence
              </Typography>
            </Box>
            <Box>
<img style={{height:50, opacity:0.85}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACO0lEQVR4nO2dS27UQBRFzwCFRRDGICXsA7ZGACUSn41AGMEiCGwgrADIiI8eMjISA5xI/arsqupzpDu05XeP2u7uksogIiIiIiIiIiKyzAPgDPgIXAHReK7maz0FjumY28BL4FcDpcaOma79BXBAh+W/b6DAKJR3vUl41UBpUTjP6eie3/NtJxbyEziiA84aKCsq5Rkd8KmBoqJSLuiAbw0UFZXylQ6IwdM8WxcUChg7zbN1QaGAsdM8WxcUChg7zbN1QaGAXF4Dd/5z3kPgfIXj11hvmH5RPwXutyhgKmqJuyscv2Z+zCJutSQge/6biAZzXlKCAtgp0yehCApg59vRvQL9K4Dd86RA/+mL2KeHcNRYbyjxQDpcKO/tCsd3v94QgydL7fNvXlAoYOxkUQAK6DpZFIACuk4WBaCAIdcDPgOPCvSTZp//irgs0E+a7BC1B4jKqX391QesPUAoQAGhABSwFB/CSfZ1PeASeFignzQxeLIoAAV0nSwKQAFdJ4sCUEDXyaIAFHBtXA9Ikh3EvyKSZIfInv8magpY4/qrD1h7gFCAAkIBKGApPoSTZIdwPSBJDJ4sCkABXSeLAlBA18miABTQdbIogMEFjLxxa1TOlxICRt66OCrnQwkBpw0MEp3mcQkBx/NW71sPE53le6ntaphf+7H1QNFZTijIwfzaj62Hik7ypvS+cX8lTK/98HbEtbtkndQo/1+O5jdPTJsR+RWVPx1czMUXu+eLiIiIiIiIiAjD8Rtm9TvYiH1PAAAAAABJRU5ErkJggg==" alt="organization"/>
              <Typography
                sx={{
                  letterSpacing:"0.05rem",
                  mt: 1,
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                Business
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}