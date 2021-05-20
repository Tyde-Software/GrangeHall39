import './App.css';
import React from 'react';
import "react-slideshow-image/dist/styles.css";
import logo from './assets/img/logo.png';
import logoext from './assets/img/logo_ext.png'
import '@fontsource/raleway';

// Material UI Components
import {
  AppBar,
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import { Link } from "react-scroll";

import { Fade } from "react-slideshow-image";

import { createStyles, makeStyles, responsiveFontSizes } from "@material-ui/core/styles";

import Anime from 'react-anime';

// Icons
import hamburger from './assets/icons/hamburger.svg';
import drink from './assets/icons/drink.svg';
import chill from './assets/icons/chill.svg';
import MenuIcon from '@material-ui/icons/Menu'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkIcon from '@material-ui/icons/Link';
import TwitterIcon from '@material-ui/icons/Twitter';

// Slideshow
import img1 from './assets/img/slideshow/img1.jpg';
import img2 from './assets/img/slideshow/img2.jpg';
import img3 from './assets/img/slideshow/img3.jpg';

// Partners
import partner1 from './assets/img/partner1.png';
import partner2 from './assets/img/partner2.png';
import partner3 from './assets/img/partner3.png';
import partner4 from './assets/img/partner4.png';
import partner5 from './assets/img/partner5.png';
import bkg from './assets/img/partner-bkg.jpg';


// CSS stuff

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Raleway",
    ],
  },
});

theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => createStyles({
  appbar: {
    alignItems: 'center',
    backgroundColor: '#383434',
  },
  card: {
    display: 'inline-block',
    padding:0,
    minHeight: 0,
    minWidth: 0,
  },
  carousel: {
    backgroundColor: 'black',
    maxHeight: '80vh',
    minHeight: '20vh',
    maxWidth: '100vw',
    position: 'relative',
  },
  dialogImage: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  drawer: {
    backgroundColor: '#383434',
  },
  icon: {
    height: '30%',
    width: '30%',
  },
  link: {
    color: 'white',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  logo: {
    marginRight: theme.spacing(15),
    height: '12.5%',
    width: '12.5%',
  },
  slide: {
    margin: 'auto',
    overflow: 'hidden',
    width: '100%',
    maxHeight: '80vh',
  },
  slideImage: {
    opacity: "15%",
    width: '150%',
    marginLeft: '-25vw',
    marginTop: '-25vw',
  },
  thumbnail: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontWeight: '900',
  }

}));

//Menu Bar
const Header = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>

      {/* Desktop AppBar */}

      <Hidden smDown>
        <AppBar className={classes.appbar} position="fixed" style={{maxWidth: '100vw'}}> 
          <Toolbar>
            <img src={logo} className={classes.logo} alt="Grange Hall 39"/>
            <Link to="home" smooth={true}><Button><Typography className={classes.link}><Box fontWeight="bold" letterSpacing={1}>Home</Box></Typography></Button></Link>
            <Link to="about" smooth={true}><Button><Typography className={classes.link}><Box fontWeight="bold" letterSpacing={1}>About</Box></Typography></Button></Link>
            <Link to="partners" smooth={true}><Button><Typography className={classes.link}><Box fontWeight="bold" letterSpacing={1}>Our Partners</Box></Typography></Button></Link>
            <Link to="contact" smooth={true}><Button><Typography className={classes.link}><Box fontWeight="bold" letterSpacing={1}>Contact Us</Box></Typography></Button></Link>
          </Toolbar>
        </AppBar>
      </Hidden>
      
      {/* Mobile AppBar */}

      <Hidden mdUp>
        <AppBar position="fixed" style={{backgroundColor: '#383434', maxWidth: '100vw'}}>
          <Toolbar style={{justifyContent: 'space-between'}}>
            <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} aria-label="menu">
              <MenuIcon style={{color: 'white'}}/>
            </IconButton>
            <img src={logo} style={{height: '20%', width: '20%'}} alt="Grange Hall 39"/>
            <IconButton disabled={true}/>
          </Toolbar>
        </AppBar>
        <Drawer open={open} classes={{paper: classes.drawer}} onClose={handleDrawerClose}>
          <Container maxWidth="xs" style={{marginTop: 15}}>
            <img src={logo} style={{width: '100%'}}/>
          </Container>
          <Container align="center">
            <Container style={{height: '50px'}}/>
            <Link to="home" smooth={true} style={{ textDecoration: 'none' }}><Button onClick={handleDrawerClose}><Typography variant="h5"><Box letterSpacing='3px' color='white'>Home</Box></Typography></Button></Link>
            <Container style={{height: '10px'}}/>
            <Link to="about" smooth={true} style={{ textDecoration: 'none' }}><Button onClick={handleDrawerClose}><Typography variant="h5"><Box letterSpacing='3px' color='white'>About</Box></Typography></Button></Link>
            <Container style={{height: '10px'}}/>
            <Link to="partners" smooth={true} style={{ textDecoration: 'none' }}><Button onClick={handleDrawerClose}><Typography variant="h5"><Box letterSpacing='3px' color='white'>Our Partners</Box></Typography></Button></Link>
            <Container style={{height: '10px'}}/>
            <Link to="contact" smooth={true} style={{ textDecoration: 'none' }}><Button onClick={handleDrawerClose}><Typography variant="h5"><Box letterSpacing='3px' color='white'>Contact</Box></Typography></Button></Link>
          </Container>
        </Drawer>
      </Hidden>
    </>
    
  );
}

//Artisan Constructor
class Artisan {
  constructor(image, hours, contact, instagram, website, description) {
    this.image = image; // Thumbnail
    this.hours = hours; // Hours as a string
    this.contact = contact; // Email
    this.instagram = instagram; // Instagram link
    this.website = website; // Website
    this.description = description; // Excerpt for the restauraunt
  }
}

//Some detail of ArtisanCard
function ArtisanCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen= () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const classes = useStyles();

  return (
    <Container maxWidth="false" style={{maxWidth: '100vw'}}>
      <Button onClick={handleClickOpen} className={classes.card}>
        <img src={props.artisan.image} style={{width: "100%", height: "100%"}}/>
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth="lg" style={{maxHeight: '80vh'}}>
        <DialogContent>
          <Container style={{height: '20px'}}/>
          <Grid container direction="row">
            <Grid item container xs={12} sm={4} align="center" justify="center">
              <Grid container>
                <Grid item xs={12}/>
                <Grid item xs={12} position="fixed">
                  <Container maxWidth="xs">
                    <img className={classes.dialogImage} src={props.artisan.image}/>
                  </Container>
                  <Typography variant="body1"><Box fontWeight='bold' color='black'>Hours: {props.artisan.hours}</Box></Typography>
                  <Container/>
                  <Typography variant="body1"><Box fontWeight='bold' color='black'>Contact: {props.artisan.hours}</Box></Typography>
                  {props.artisan.instagram != "TBA" || props.artisan.website != "TBA" ? <Container style={{height: '20px'}}/> : null}
                  {props.artisan.instagram != "TBA" ? <a href={props.artisan.instagram} target="_blank" rel="noreferrer noopener"><IconButton><InstagramIcon fontSize="large" style={{color: 'black'}}/></IconButton></a> : null}
                  {props.artisan.website != "TBA" ? <a href={props.artisan.website} target="_blank" rel="noreferrer noopener"><IconButton><LinkIcon fontSize="large" style={{color: 'black'}}/></IconButton></a> : null}
                </Grid>
                <Grid item xs={12}/>
              </Grid>  
            </Grid>
            <Hidden smUp>
              <Grid item container xs={12}>
                <Container style={{height: '20px'}}/>
              </Grid>
            </Hidden>
            <Grid item container xs={12} sm={8} alignItems="center">
              {props.artisan.description}
            </Grid>
          </Grid>
          <Container style={{height: '20px'}}/>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

//Partners
function Partners() {

  const artisans = {
    BurgerMonster : new Artisan(
      partner1,
      "TBA",
      "714-886-9627",
      "https://www.instagram.com/ocburgermonster/",
      "http://burgermonster.net",
      [<Container>
        <Typography variant="body1">Burger Monster began with a simple concept: to provide bold flavors with a focus on standard of quality. Our standard of quality began with distilled wisdom of the industry and of the people we represent- our guest. The standards maintained at Burger Monster are not based on ‘rules’ rather, we offer ways to do things better. Where others fall short, Burger Monster would achieve.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">We strive to conceptualize, through our menu, the origins of the food truck boom. Continuously elevating and creating unique culinary interpretations, resulting in a refined and more demanding experience among Burger loving Monsters. With a significant focus on freshness and quality, Burger Monster sought to hand craft each burger.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">Finally, Burger Monster is more than a food truck committed to quality food and exceptional service. We are a group of monsters dedicated to the common goal of making Monster memories for our guest and ourselves, elevating the standards and expectations of the food truck/restaurant/catering industry and developing a secure and ideal work environment. To achieve these goals, Burger Monster’s unflagging pursuit of excellence, we fearlessly focus on the following values deeply imbedded in our core.</Typography>
      </Container>],
    ),
    ChubbeeMonkee : new Artisan (
      partner2,
      "TBA",
      "TBA",
      "https://www.instagram.com/chubbeemonkee/",
      "https://www.chubbeemonkee.com/",
      [<Container>
        <Typography variant="body1">It's simple. We LOVE food!</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">In his "previous life", Chef/Owner Sam worked for a large corporation in a lucrative, cushy office job. He spent 18 years climbing the corporate ladder and had achieved great success. The problem was, he always knew that he wanted something else. Something more.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">What started out as a passion to eat amazing food turned into a bonafide obsession to create his version of the food he loves. This is how Chubbee Monkee was born. We wouldn't put out food that we wouldn't eat ourselves and we pride ourselves on that fact. In saying that, we hope you can taste the love we put into our food and embrace the fact that...</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">...There's a Chubbee Monkee in all of us!</Typography>
        
      </Container>],
      
    ),
    EggSlice : new Artisan (
      partner3,
      "7AM - 7PM",
      "714-276-1113",
      "https://www.instagram.com/eggslice/",
      "https://www.eggslice.com/",
      [<Container>
        <Typography variant="body1">I’m Chef Bill, the founder of Eggslice. After popping up at restaurants in Orange County, we're egg-cited to share that our new location in Grange Hall 39 in Buena Park is opening October 2020! Our crew is ready to welcome you again and perfectly craft our breakfast sandwiches that you've been patiently waiting for.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">My special sandwich was born at local Farmers Markets in Sydney, Australia more than 18 years ago. Over the years I’ve enjoyed making thousands of sandwiches for our loyal Aussie customers featuring our unique locally made Chilli Jam, combined with fresh, local ingredients. Our OC fans are discovering just how good my all day breakfast sandwiches are.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">We pledge that you will get your sandwich piping hot, stacked with flavor and served with a reverence towards sustainable, local ingredients in a timely manner.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">I truly hope you enjoy your sandwich and we thank you for supporting Eggslice.</Typography>
        
      </Container>],
      
    ),
    PitaGrill : new Artisan(
      partner4,
      "12PM - 7PM",
      "714-276-1180",
      "https://www.instagram.com/californiapitagrill/",
      "https://www.californiapitagrills.com/",
      [<Container>
        <Typography variant="body1">California Pita Grill was founded by entrepreneur Amer Taha, as a healthy alternative to fast food while maintaining an authentic approach to delicious Mediterranean cuisine.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">Nutrition is one of the hottest “buzz words” these days. At California Pita Grill, the driving philosophy is built around one word: FRESHNESS! When it comes to the nutritional value of the food you eat, one of the essential components is incorporating a diet built around fresh produce and meats.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">When the founders of California Pita Grill sat down to design their menu, the goal was to prepare their salads from scratch and to make them daily. They cook all meat to order —nothing is pre-processed or sitting under heat lamps. It is with these high standards that California Pita Grill hopes to build a loyal following of “fans of freshness” and good food. Give it a try.</Typography>
        <Container style={{height: '20px'}}/>
        <Typography variant="body1">You’ve Never Tasted Fresh Like This!</Typography>
        
      </Container>],
    ),
    
    PhoDessert : new Artisan(
      partner5,
      "TBA",
      "TBA",
      "https://www.instagram.com/signature_pho_seafood/",
      "TBA",
      [<Container>
        <Typography variant="body1">Provides a unique experience to customers by introducing a family own Pho and Seafood house all fresh made..</Typography>   
      </Container>],
    ),
  }

  return (
    <Container maxWidth="lg" style={{maxWidth: '100vw', backgroundColor: 'white'}}>
      <Container style={{height: "100px"}}/>
      <Typography variant="h3"><Box fontWeight="bold">OUR ARTISAN PARTNERS</Box></Typography>
      <Container style={{height: "100px"}}/>
      <Grid container>
        <Grid item xs={6} sm={4}>
          <ArtisanCard artisan={artisans.BurgerMonster}/>
        </Grid>
        <Grid item xs={6} sm={4}>
          <ArtisanCard artisan={artisans.ChubbeeMonkee}/>
        </Grid>
        <Grid item xs={6} sm={4}>
          <ArtisanCard artisan={artisans.EggSlice}/>
        </Grid>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={6} sm={4}>
          <ArtisanCard artisan={artisans.PitaGrill}/>
        </Grid>
        <Hidden smUp>
          <Grid item xs={3}/>
        </Hidden>
        <Grid item xs={6} sm={4}>
          <ArtisanCard artisan={artisans.PhoDessert}/>
        </Grid>
        <Grid item xs={3} sm={2}/>
      </Grid>
      <Container style={{height: "100px"}}/>
    </Container>
  );
}

//About
const About = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="false" style={{backgroundColor: '#ece6cc', maxWidth: '100vw'}} alignItems="center">
      <Container style={{height: "100px"}}/>
      <Typography className={classes.title} variant="h3"><Box>THE FUTURE OF BUENA PARK DINING</Box></Typography>
      <Container style={{height: "100px"}}/>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid container item xs={12} sm={4} justify="center">
            <List>
              <img src={hamburger} className={classes.icon}/>
              <Container style={{height: '15px'}}/>
              <Typography variant="h5" className={classes.title}>EAT</Typography>
              <Container style={{height: '15px'}}/>
              <Typography variant="h6">Grange Hall 39 highlights an artisan collection of the area's brightest culinary talent & fresh, local ingredients</Typography>
            </List>
          </Grid>
          <Grid container item xs={12} sm={4} justify="center">
            <List>
              <img src={drink} className={classes.icon}/>
              <Container style={{height: '15px'}}/>
              <Typography variant="h5" className={classes.title}>DRINK</Typography>
              <Container style={{height: '15px'}}/>
              <Typography variant="h6">Honoring the rich agricultural history
                of Buena Park & modeled after the
                communal halls where farmers would
                gather in the early 1900s</Typography>
            </List>
          </Grid>
          <Grid container item xs={12} sm={4} justify="center">
            <List>
              <img src={chill} className={classes.icon}/>
              <Container style={{height: '15px'}}/>
              <Typography variant="h5" className={classes.title}>CHILL</Typography>
              <Container style={{height: '15px'}}/>
              <Typography variant="h6">Unique fare with exciting social dining
                experience along with entertainment</Typography>
            </List>
          </Grid>
        </Grid>
      </Container>
      <Container style={{height: "100px"}}/>
    </Container>
  );
}

// Banner
const Home = () => {

  const classes = useStyles();

  const properties = {
    duration: 2500,
    autoplay: true,
    transitionDuration: 2500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  const images = [
    img1,
    img2,
    img3,
  ];

  return (
    <Container disableGutters={true} maxWidth="false" className={classes.carousel}>
      <Container disableGutters={true} style={{zIndex: '0', maxWidth: '100vw'}}>
        <Fade {...properties}>
          {images.map((each, index) => (
            <div key={index} className={classes.slide}>
              <img className={classes.slideImage} src={each} alt="Banner"/>
            </div>
          ))}
        </Fade>
      </Container>
      <Container disableGutters={true} className="title">
        <Anime easing="linear" duration={500} opacity={[0, 1]} delay={500}>
          <Container maxWidth="md">
            <img src={logoext} alt="Grange Hall 39" style={{height: '100%', width: '100%'}}/>
          </Container>
        </Anime>
        <Container style={{height: '72px'}}/>
        <Anime easing="linear" duration={500} opacity={[0, 1]} scale={[.75, 1]} delay={1000}>
          <Hidden xsDown>
            <Typography variant="h2" style={{display: 'inline-block'}}><Box fontWeight="bold" color="white">Eat • Drink • Chill</Box></Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h3" style={{display: 'inline-block'}}><Box fontWeight="bold" color="white">Eat • Drink • Chill</Box></Typography>
          </Hidden>
        </Anime>
        </Container>
    </Container>
  );
}

const BecomePartner = () =>
{
  const classes = useStyles();

  return (
    <Container maxWidth = "false" alignItems = "center" style={{backgroundColor: 'black', maxWidth: '100vw'}}>
      <Container style = {{height: "100px"}}/>
      <Grid container>
        <Grid item container xs={0} md={1}/>
        <Grid item container xs={12} md={6} align="left">

          <Typography variant="h3"><Box fontWeight="bold" color="white">NOW ACCEPTING </Box></Typography><p/>
          <Typography variant="h3"><Box fontWeight="bold" color="white">EXCEPTIONAL CONCEPTS!</Box></Typography>
          <Container style={{height: "100px"}}/>

          <Typography variant="h5"><Box color="white">Do you own a restaurant or food truck that you're ready to take to the next level?</Box></Typography>
          <Typography variant="h5"><Box color="white">Contact us to become a part of the future of Buena Park dining at Grange Hall 39!</Box></Typography>

          <Typography variant="h5"><Box color="white">We'll set up a consultation about the requirements of becoming a tenant.</Box></Typography>
          <Typography variant="h5"><Box color="white">We're looking for a mix of talented chef-owners to join us.</Box></Typography>

          <Container style={{height: "100px"}}/>

        </Grid>
        <Grid item container xs={0} md={1}/>
        <Grid item container xs={0} md={6}/>
      </Grid>
      <Container style = {{height: "100px"}}/>
    </Container>
  );
}

const Contact = () => {
  return (
    <Container maxWidth="false" style={{backgroundColor: '#161616', maxWidth: '100vw'}}>
      <Container  style = {{height: "100px"}}/>
      <Grid container spacing={4}>
        <Grid item container xs = {12} md = {4} justify="center">
          <Typography variant = "h3"><Box fontWeight = "bold" color="white">VISIT US</Box></Typography>
          <Container style={{height: '20px'}}/>
          <Typography variant = "h6"><Box color="white">8340 La Palma Ave. Buena Park, CA 90620</Box></Typography>
        </Grid>
        <Grid item container xs = {12} md = {4} justify="center">
          <Typography variant = "h3"><Box fontWeight = "bold" color="white">LEASING INFO</Box></Typography>
          <Container style={{height: '20px'}}/>
          <Typography variant = "h6"><Box color = "white">714-503-5000</Box></Typography>
          <Container style={{height: '5px'}}/>
          <Typography variant = "h6"><Box color = "white">contact@grange39.com</Box></Typography>
        </Grid>
        <Grid item container xs = {12} md = {4} justify="center">
          <Typography variant = "h3"><Box fontWeight = "bold" color="white">FOLLOW US</Box></Typography>
          <Container style={{height: '20px'}}/>
          <a href="https://www.instagram.com/grangehall39/" target="_blank" rel="noopener noreferrer"><IconButton><InstagramIcon style={{color: 'white'}} fontSize="large"/></IconButton></a>
          <a href = "https://twitter.com/grangehall39" target = "_blank" rel = "noopener noreferrer"><IconButton><TwitterIcon style={{color: 'white'}} fontSize="large"/></IconButton></a>
        </Grid>
      </Grid>
      <Container style={{height: '100px'}}/>
      <Typography variant="subtitle"><Box color='white'>©2020 Buena Park Downtown. Grange Hall 39. All rights reserved.</Box></Typography>
      <Container style={{height: '15px'}}/>
    </Container>
  );
}

//Main 
class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container disableGutters={true} style={{maxWidth: '100vw'}} className="App">
          <a id="home"/>
          <Container style={{height: 50}}/>
          <Header/>
          <Home/>
          <a id="about"/>
          <About/>
          <a id="partners"/>
          <Partners/>
          <a id="contact"/>
          <BecomePartner/>
          <Contact/>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
