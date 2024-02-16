import React, { useState } from "react";
import styled from '@emotion/styled'
import { Box, IconButton, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

const Image = styled(Box)({
  backgroundPosition: "center",
  backgroundSize: "cover",
  color: "white",
  height: "50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function Banner() {
  const images = [
    "https://images.unsplash.com/photo-1620570623737-efc0ec4ab486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const texts = [
    "Craft Your Voice: Start Writing, Start Exploring!",
    "Your Words, Your Community: Create and Discover Blogs with Ease.",
    "From Stories to Sagas: Join the Journey of Writing and Reading.",
  ];

  const [currentText, setCurrentText] = useState(texts[0]);

  const CustomPrevArrow = ({ onClick }) => (
    <IconButton
      style={{
        position: "absolute",
        top: "50%",
        left: 15,
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
      onClick={onClick}
    >
      <ArrowBack />
    </IconButton>
  );

  const CustomNextArrow = ({ onClick }) => (
    <IconButton
      style={{
        position: "absolute",
        top: "50%",
        right: 15,
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
      onClick={onClick}
    >
      <ArrowForward />
    </IconButton>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => {
      setCurrentText(texts[next]);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Slider {...settings} css={{ width: "100%", overflow: "hidden" }}>
        {images.map((image, index) => (
          <div
            key={index}
            css={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image style={{ backgroundImage: `url('${image}')` }}>
              <Typography
                variant="h4"
                fontWeight="600"
                fontFamily="cursive"
                textAlign="center"
                style={{
                  fontFamily: "Georgia, serif",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {currentText}
              </Typography>
            </Image>
          </div>
        ))}
      </Slider>
    </div>
  );
}
