"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation , Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // 2. Import autoplay CSS

const slides = [
  {
    image: "/Media/Gamingpic.jpg",
    title: "COD Modern WarFar III",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.er conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdg elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputateetur adipiscing elit. Nunc vulputate libero et velit interd", // (your original long text)
  },
  {
    image: "/Media/price.jpg",
    title: "COD Modern WarFar II",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.er conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdg elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputateetur adipiscing elit. Nunc vulputate libero et velit interd", // (your original long text)
  },
  {
    image: "/Media/Gamingpic.jpg",
    title: "COD Modern WarFar I",
    description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.er conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdg elit. Nunc vulputate libero et velit interder conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputate libero et velit interdetur adipiscing elit. Nunc vulputateetur adipiscing elit. Nunc vulputate libero et velit interd", // (your original long text)
  },
];

export default function SwiperCustom() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  const items = slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          padding: isMobile ? 1 : 2,
        }}
      >
        <Box
          component="img"
          src={slide.image}
          alt={slide.title}
          sx={{
            height: isMobile ? 250 : 400,
            width: "100%",
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: 1,
            marginBottom: isMobile ? 1 : 2,
          }}
        />
        <Box sx={{ width: '100%' }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            color="darkOrange"
            textAlign={"left"}
            fontWeight={"bold"}
            sx={{ mb: 1 }}
          >
            {slide.title}
          </Typography>
          <Typography 
            textAlign={"left"} 
            variant={isMobile ? "caption" : "subtitle2"}
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: isMobile ? 3 : 10,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {slide.description}
          </Typography>
        </Box>
      </Box>
    </SwiperSlide>
  ))
  return (
    <Box 
      sx={{
        backgroundColor: "#170C40",
        padding: isMobile ? 2 : 4,
        borderRadius: 2,
        margin: isMobile ? 0 : '0 16px',
      }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={isMobile ? 10 : 30}
        autoplay={{
          delay: 1500, // 4. Set 1.5s delay (1500ms)
          disableOnInteraction: false, // Allows manual navigation during autoplay
        }}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          paddingBottom: isMobile ? 20 : 0
        }}
      >
        {items}
      </Swiper>
    </Box>
  );
}