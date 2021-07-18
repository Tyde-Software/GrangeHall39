// Assets
import img1 from "../assets/img/slideshow/img1.jpg";
import img2 from "../assets/img/slideshow/img2.jpg";
import img3 from "../assets/img/slideshow/img3.jpg";
import img4 from "../assets/img/slideshow/img4.jpg";
import img5 from "../assets/img/slideshow/img5.jpg";
import img6 from "../assets/img/slideshow/img6.jpg";
import "react-slideshow-image/dist/styles.css";

// Components
import React from "react";

import { Container, makeStyles } from "@material-ui/core";

import { Slide } from "react-slideshow-image";

const useStyles = makeStyles((theme) => ({
  carousel: {
    overflow: "hidden",
    margin: "auto",
  },
  slide: {
    position: "relative",
  },
  slideImage: {
    margin: "auto",
    width: "100%",
    height: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();

  const properties = {
    duration: 1500,
    autoplay: true,
    transitionDuration: 1500,
    arrows: true,
    infinite: true,
    easing: "ease",
  };

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <Container
      disableGutters={true}
      maxWidth="false"
      className={classes.carousel}
    >
      <Container
        disableGutters={true}
        style={{ zIndex: "0", maxWidth: "100vw" }}
      >
        <Slide {...properties}>
          {images.map((each, index) => (
            <div key={index} className={classes.slide}>
              <img className={classes.slideImage} src={each} alt="Banner" />
            </div>
          ))}
        </Slide>
      </Container>
    </Container>
  );
};

export default Home;
