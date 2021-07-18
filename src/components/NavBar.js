// Assets
import logo from "../assets/img/logo.png";
import MenuIcon from "@material-ui/icons/Menu";

// Components
import React, { useState } from "react";
import { Link } from "react-scroll";

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    alignItems: "center",
    backgroundColor: "#383434",
  },
  drawer: {
    backgroundColor: "#383434",
  },
  icon: {
    height: "30%",
    width: "30%",
  },
  link: {
    color: "white",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  logo: {
    marginRight: theme.spacing(15),
    height: "12.5%",
    width: "12.5%",
  },
}));

const DesktopAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.appbar}
      position="fixed"
      style={{ maxWidth: "100vw" }}
    >
      <Toolbar>
        <img src={logo} className={classes.logo} alt="Grange Hall 39" />
        <Link to="home" smooth={true}>
          <Button>
            <Typography className={classes.link}>
              <Box fontWeight="bold" letterSpacing={1}>
                Home
              </Box>
            </Typography>
          </Button>
        </Link>
        <Link to="about" smooth={true}>
          <Button>
            <Typography className={classes.link}>
              <Box fontWeight="bold" letterSpacing={1}>
                About
              </Box>
            </Typography>
          </Button>
        </Link>
        <Link to="partners" smooth={true}>
          <Button>
            <Typography className={classes.link}>
              <Box fontWeight="bold" letterSpacing={1}>
                Our Partners
              </Box>
            </Typography>
          </Button>
        </Link>
        <Link to="contact" smooth={true}>
          <Button>
            <Typography className={classes.link}>
              <Box fontWeight="bold" letterSpacing={1}>
                Contact Us
              </Box>
            </Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

const MobileAppBar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "#383434", maxWidth: "100vw" }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setOpen(true)}
            aria-label="menu"
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <img
            src={logo}
            style={{ height: "20%", width: "20%" }}
            alt="Grange Hall 39"
          />
          <IconButton disabled={true} />
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        classes={{ paper: classes.drawer }}
        onClose={() => setOpen(false)}
      >
        <Container maxWidth="xs" style={{ marginTop: 15 }}>
          <img src={logo} style={{ width: "100%" }} alt="Grange Hall 39" />
        </Container>
        <Container align="center">
          <Container style={{ height: "50px" }} />
          <Link to="home" smooth={true} style={{ textDecoration: "none" }}>
            <Button onClick={() => setOpen(false)}>
              <Typography variant="h5">
                <Box letterSpacing="3px" color="white">
                  Home
                </Box>
              </Typography>
            </Button>
          </Link>
          <Container style={{ height: "10px" }} />
          <Link to="about" smooth={true} style={{ textDecoration: "none" }}>
            <Button onClick={() => setOpen(false)}>
              <Typography variant="h5">
                <Box letterSpacing="3px" color="white">
                  About
                </Box>
              </Typography>
            </Button>
          </Link>
          <Container style={{ height: "10px" }} />
          <Link to="partners" smooth={true} style={{ textDecoration: "none" }}>
            <Button onClick={() => setOpen(false)}>
              <Typography variant="h5">
                <Box letterSpacing="3px" color="white">
                  Our Partners
                </Box>
              </Typography>
            </Button>
          </Link>
          <Container style={{ height: "10px" }} />
          <Link to="contact" smooth={true} style={{ textDecoration: "none" }}>
            <Button onClick={() => setOpen(false)}>
              <Typography variant="h5">
                <Box letterSpacing="3px" color="white">
                  Contact
                </Box>
              </Typography>
            </Button>
          </Link>
        </Container>
      </Drawer>
    </div>
  );
};

const NavBar = () => {
  return (
    <div>
      <Hidden smDown>
        <DesktopAppBar />
      </Hidden>
      <Hidden mdUp>
        <MobileAppBar />
      </Hidden>
    </div>
  );
};

export default NavBar;
