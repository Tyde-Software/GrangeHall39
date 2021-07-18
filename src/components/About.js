// Assets
import hamburger from "../assets/icons/hamburger.svg";
import drink from "../assets/icons/drink.svg";
import chill from "../assets/icons/chill.svg";

// Components
import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  about: {
    backgroundColor: "#ece6cc",
  },
  icon: {
    height: "30%",
    width: "30%",
  },
  title: {
    fontWeight: "900",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.about}>
      <Container alignItems="center" align="center">
        <Container style={{ height: "100px" }} />
        <Typography className={classes.title} variant="h3">
          <Box>THE FUTURE OF BUENA PARK DINING</Box>
        </Typography>
        <Container style={{ height: "100px" }} />
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid container item xs={12} sm={4} justify="center">
              <List>
                <img src={hamburger} className={classes.icon} alt="eat"/>
                <Container style={{ height: "15px" }} />
                <Typography variant="h5" className={classes.title}>
                  EAT
                </Typography>
                <Container style={{ height: "15px" }} />
                <Typography variant="h6">
                  Grange Hall 39 highlights an artisan collection of the area's
                  brightest culinary talent & fresh, local ingredients
                </Typography>
              </List>
            </Grid>
            <Grid container item xs={12} sm={4} justify="center">
              <List>
                <img src={drink} className={classes.icon} alt="drink"/>
                <Container style={{ height: "15px" }} />
                <Typography variant="h5" className={classes.title}>
                  DRINK
                </Typography>
                <Container style={{ height: "15px" }} />
                <Typography variant="h6">
                  Honoring the rich agricultural history of Buena Park & modeled
                  after the communal halls where farmers would gather in the
                  early 1900s
                </Typography>
              </List>
            </Grid>
            <Grid container item xs={12} sm={4} justify="center">
              <List>
                <img src={chill} className={classes.icon} alt="chill"/>
                <Container style={{ height: "15px" }} />
                <Typography variant="h5" className={classes.title}>
                  CHILL
                </Typography>
                <Container style={{ height: "15px" }} />
                <Typography variant="h6">
                  Unique fare with exciting social dining experience along with
                  entertainment
                </Typography>
              </List>
            </Grid>
          </Grid>
        </Container>
        <Container style={{ height: "100px" }} />
      </Container>
    </div>
  );
};

export default About;
