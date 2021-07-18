// Assets
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";

// Components
import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";

const Footer = () => {
  return (
    <Container
      align="center"
      maxWidth="false"
      style={{ backgroundColor: "#161616", maxWidth: "100vw" }}
    >
      <Container style={{ height: "100px" }} />
      <Grid container spacing={4}>
        <Grid item container xs={12} md={4} justify="center">
          <Typography variant="h3">
            <Box fontWeight="bold" color="white">
              VISIT US
            </Box>
          </Typography>
          <Container style={{ height: "20px" }} />
          <Typography variant="h6">
            <Box color="white">8340 La Palma Ave. Buena Park, CA 90620</Box>
          </Typography>
        </Grid>
        <Grid item container xs={12} md={4} justify="center">
          <Typography variant="h3">
            <Box fontWeight="bold" color="white">
              LEASING INFO
            </Box>
          </Typography>
          <Container style={{ height: "20px" }} />
          <Typography variant="h6">
            <Box color="white">714-503-5000</Box>
          </Typography>
          <Container style={{ height: "5px" }} />
          <Typography variant="h6">
            <Box color="white">contact@grange39.com</Box>
          </Typography>
        </Grid>
        <Grid item container xs={12} md={4} justify="center">
          <Typography variant="h3">
            <Box fontWeight="bold" color="white">
              FOLLOW US
            </Box>
          </Typography>
          <Container style={{ height: "20px" }} />
          <a
            href="https://www.instagram.com/grangehall39/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram style={{ color: "white" }} fontSize="large" />
            </IconButton>
          </a>
          <a
            href="https://twitter.com/grangehall39"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Twitter style={{ color: "white" }} fontSize="large" />
            </IconButton>
          </a>
        </Grid>
      </Grid>
      <Container style={{ height: "100px" }} />
      <Typography variant="subtitle">
        <Box color="white">
          ©2020 Buena Park Downtown. Grange Hall 39. All rights reserved.
        </Box>
      </Typography>
      <Container style={{ height: "15px" }} />
    </Container>
  );
};

export default Footer;
