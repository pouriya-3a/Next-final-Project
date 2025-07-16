import CardImage from "@/Components/CardImage";
import Navbar from "@/Components/Navbar";
import SwiperCustom from "@/public/Components/SwiperCustom";
import AuthContext from "@/utils/AuthContext";
import { Stack } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Stack spacing={4} py={'32px'}>
      <SwiperCustom />
      <CardImage />
    </Stack>
  );
}
