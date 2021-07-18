// Assets
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkIcon from "@material-ui/icons/Link";

// Components
import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import "@fontsource/raleway";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

// Models
import PartnerList from "../models/PartnerList";

// Styles
const useStyles = makeStyles((theme) => ({
  card: {
    display: "inline-block",
    padding: 0,
    minHeight: 0,
    minWidth: 0,
  },
  dialogImage: {
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  partners: {
    backgroundColor: "white",
  },
}));

const PartnerCard = (props) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <Container maxWidth="false" style={{ maxWidth: "100vw" }}>
      <Button
        disableElevation={true}
        onClick={() => setOpen(true)}
        className={classes.card}
      >
        <img
          alt={props.artisan.name}
          src={props.artisan.image}
          style={{ width: "100%", height: "100%" }}
        />
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth="lg"
        style={{ maxHeight: "80vh" }}
      >
        <DialogContent>
          <Container style={{ height: "20px" }} />
          <Grid container direction="row">
            <Grid item container xs={12} sm={4} align="center" justify="center">
              <Grid container>
                <Grid item xs={12} />
                <Grid item xs={12} position="fixed">
                  <Container maxWidth="xs">
                    <img
                      alt={props.artisan.name}
                      className={classes.dialogImage}
                      src={props.artisan.image}
                    />
                  </Container>
                  <Typography variant="body1">
                    <Box fontWeight="bold" color="black">
                      Hours: {props.artisan.hours}
                    </Box>
                  </Typography>
                  <Container />
                  <Typography variant="body1">
                    <Box fontWeight="bold" color="black">
                      Contact: {props.artisan.phone}
                    </Box>
                  </Typography>
                  {props.artisan.instagram !== "TBA" ||
                  props.artisan.website !== "TBA" ? (
                    <Container style={{ height: "20px" }} />
                  ) : null}
                  {props.artisan.instagram !== "TBA" ? (
                    <a
                      href={props.artisan.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconButton>
                        <InstagramIcon
                          fontSize="large"
                          style={{ color: "black" }}
                        />
                      </IconButton>
                    </a>
                  ) : null}
                  {props.artisan.website !== "TBA" ? (
                    <a
                      href={props.artisan.website}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <IconButton>
                        <LinkIcon fontSize="large" style={{ color: "black" }} />
                      </IconButton>
                    </a>
                  ) : null}
                </Grid>
                <Grid item xs={12} />
              </Grid>
            </Grid>
            <Hidden smUp>
              <Grid item container xs={12}>
                <Container style={{ height: "20px" }} />
              </Grid>
            </Hidden>
            <Grid item container xs={12} sm={8} alignItems="center">
              {props.artisan.description}
            </Grid>
          </Grid>
          <Container style={{ height: "20px" }} />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

const Partners = () => {
  const classes = useStyles();

  return (
    <div className={classes.partners}>
      <Container align="center">
        <Container style={{ height: "100px" }} />
        <Typography variant="h3">
          <Box fontWeight="bold">OUR ARTISAN PARTNERS</Box>
        </Typography>
        <Container style={{ height: "100px" }} />
        <Container maxWidth="lg">
          <Grid container spacing={0} justify="center">
            {PartnerList.map(function (item, index) {
              return (
                <Grid item xs={6} md={4}>
                  <PartnerCard artisan={item} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Container style={{ height: "100px" }} />
      </Container>
    </div>
  );
};

export default Partners;
