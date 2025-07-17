"use client";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/Media/Gamingpic.jpg",
    title: "COD Modern WarFar III",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.er conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdg elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputateetur adipiscing elit. Nunc vulputate libero et velit interd",
  },
  {
    image: "/Media/price.jpg",
    title: "COD Modern WarFar II",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.er conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdg elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputateetur adipiscing elit. Nunc vulputate libero et velit interde",
  },
  {
    image: "/Media/Gamingpic.jpg",
    title: "COD Modern WarFar I",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.er conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdg elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputateetur adipiscing elit. Nunc vulputate libero et velit interd",
  },
];
const sliders = slides.map((slide, index) => (
  <SwiperSlide key={index}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Box
        component="img"
        src={slide?.image}
        alt={slide?.title}
        sx={{
          height: "400px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: 1,
          marginBottom: 2,
        }}
      />
      <Box sx={{width:'100%'}}>
        <Typography
          variant="h5"
          color="darkOrange"
          textAlign={"left"}
          fontWeight={"bold"}
          sx={{ mb: 1 }}
        >
          {slide?.title}
        </Typography>
        <Typography textAlign={"left"} variant="subtitle2">{slide?.description}</Typography>
      </Box>
    </Box>
  </SwiperSlide>
));
export default function SwiperCustom() {
  return (
    <Box 
    className={'my-Container'}
      sx={{
        backgroundColor: "#170C40",
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {sliders}
      </Swiper>
    </Box>
  );
}
