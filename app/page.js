import CardImage from "@/Components/CardImage";
import Navbar from "@/Components/Navbar";
import CustomBanner from "@/public/Components/BannerCustom";
import SwiperCustom from "@/public/Components/SwiperCustom";
import AuthContext from "@/utils/AuthContext";
import { Grid, Stack } from "@mui/material";
import React from "react";

export default function Home() {
  return (
    <Stack  spacing={4} py={'32px'}>
      <SwiperCustom />
      <Grid container >
        <CardImage image="/Media/Gamingpic.jpg" title={'cod gaming mode'} description={'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti so'} />
        <CardImage image="/Media/price.jpg" title={'god mode cod'} description={'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti so'} />
      </Grid>
      <CustomBanner img={'/Media/Gamingpic.jpg'} />
    </Stack>
  );
}
