// Assets
import bkg from "../assets/img/partner-bkg.png";

// Components
import React from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  partnerWrapper: {
    backgroundImage: "url(" + bkg + ")",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxWidth: "100vw",
  },
});

const BecomePartner = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="false"
      disableGutters={true}
      className={classes.partnerWrapper}
    >
      <Grid container>
        <Grid item container xs={1} xl={1} />
        <Grid item container xs={10} xl={6} align="left">
          <Container style={{ height: "100px" }} />
          <Typography variant="h3">
            <Box fontWeight="bold" color="white">
              NOW ACCEPTING EXCEPTIONAL CONCEPTS!
            </Box>
          </Typography>
          <Container style={{ height: "100px" }} />

          <Typography variant="h5">
            <Box color="white">
              Do you own a restaurant or food truck that you're ready to take to
              the next level?
            </Box>
          </Typography>
          <Typography variant="h5">
            <Box color="white">
              Contact us to become a part of the future of Buena Park dining at
              Grange Hall 39!
            </Box>
          </Typography>

          <Typography variant="h5">
            <Box color="white">
              We'll set up a consultation about the requirements of becoming a
              tenant.
            </Box>
          </Typography>
          <Typography variant="h5">
            <Box color="white">
              We're looking for a mix of talented chef-owners to join us.
            </Box>
          </Typography>
          <Container style={{ height: "100px" }} />
        </Grid>
        <Grid item container xs={1} xl={1} />
        <Grid item container xs={0} xl={6} />
      </Grid>
    </Container>
  );
};

export default BecomePartner;
