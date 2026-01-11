import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";

interface FooterProps {
  support?: boolean;
  legal?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  support = false,
  legal = false,
}) => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        mt: "auto",
        backgroundColor: "rgb(241, 245, 249)", // content-like surface
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          px: { xs: 2, sm: 4, md: 6 },
          py: 3,
        }}
      >
        {/* Support Section */}
        {support && (
          <Box mb={legal ? 2.5 : 0}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              gap={{ xs: 1, sm: 2 }}
              flexWrap="wrap"
            >
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.primary"
                sx={{ letterSpacing: "0.04em" }}
              >
                Support
              </Typography>

              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { xs: "none", sm: "block" },
                  borderColor: "divider",
                }}
              />

              {[
                "Reset Two-Factor Access",
                "Recover Account Access",
                "Contact Support",
                "Developer Resources",
              ].map((item) => (
                <Link
                  key={item}
                  underline="hover"
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Box>
        )}

        {/* Section Divider */}
        {support && legal && (
          <Divider sx={{ my: 2, borderColor: "rgba(0,0,0,0.06)" }} />
        )}

        {/* Legal Section */}
        {legal && (
          <Box
          id="footer-legal"
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={{ xs: 1, sm: 2 }}
            flexWrap="wrap"
            textAlign="center"
          >
            {[
              "Privacy Policy",
              "Terms of Service",
              "Security Practices",
              "System Status",
            ].map((item, i) => (
              <React.Fragment key={item}>
                <Link
                  underline="hover"
                  variant="body2"
                  sx={{
                    color: "#334155",
                    "&:hover": {
                      color: "text.primary",
                      cursor:"pointer"
                    },
                  }}
                >
                  {item}
                </Link>

                {i < 3 && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      display: { xs: "none", sm: "block" },
                      borderColor: "divider",
                    }}
                  />
                )}
              </React.Fragment>
            ))}

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                display: { xs: "none", sm: "block" },
                borderColor: "divider",
              }}
            />

            
          </Box>
        
        )}
        <Box textAlign={"center"}>
   <Typography mt={1} variant="body2" color="#334155">
              4 Floor, Oval building, Madhapur, Hyderabad, India, 500081
            </Typography>
            <br/>
            <Typography
              variant="body2"
              color="#334155"
              sx={{ whiteSpace: "nowrap" }}
            >
              © {new Date().getFullYear()} Friction Lab. All rights reserved.
            </Typography>
            <br/>
     
        </Box>
       
      </Box>
    </Box>
  );
};
