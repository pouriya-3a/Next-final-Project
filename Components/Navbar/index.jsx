"use client";
import { authContext } from "@/utils/AuthContext";
import { Box, Button, List, ListItem, styled, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const GradientBox = styled(Box)({
  background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default function Navbar() {
  const { token, handleToken } = useContext(authContext);
  const path = usePathname();

  if (path === "/login") {
    return null;
  }

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Box
          component={"img"}
          src={path == "/about-us" ? "/Media/Gamingpic.jpg" : "/Media/price.jpg"}
          alt="header-img"
          sx={{ objectPosition: "top", width: "100%", height: "480px", objectFit: "cover" }}
        />
        <Box>
          <Typography
            sx={{
              display: "flex",
              position: "absolute",
              top: "90%",
              left: "50%",
              transform: "translate(-50%)",
              gap:'8px'
            }}
            variant="h4"
            color="white"
          >
            Lets Play With
            <Typography variant="h4" component={'span'} color="darkOrange">
              Soul
            </Typography>
            And
            <Typography variant="h4" component={'span'} color="gold">
              Mind
            </Typography>
          </Typography>
        </Box>
      </Box>
      <GradientBox>
        <Box
          className="my-Container"
          sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
        >
          <List
            sx={{
              display: "flex",
              bgcolor: "transparent",
              padding: 0,
              margin: 0,
            }}
          >
            <ListItem sx={{ width: "auto" }}>
              <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </ListItem>
            <ListItem sx={{ width: "auto" }}>
              <Link href="/about-us" style={{ textDecoration: "none", color: "white" }}>
                About Us
              </Link>
            </ListItem>
            <ListItem sx={{ width: "auto" }}>
              <Link href="/games" style={{ textDecoration: "none", color: "white" }}>
                Games
              </Link>
            </ListItem>
          </List>

          <Box>
            {!token ? (
              <Link href="/login" style={{ textDecoration: "none" }}>
                <Button variant="outlined" sx={{ color: "gold", borderColor: "gold" }}>
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                variant="outlined"
                onClick={() => handleToken(null)}
                sx={{ color: "red", borderColor: "red" }}
              >
                LogOut
              </Button>
            )}
          </Box>
        </Box>
      </GradientBox>
    </>
  );
}
