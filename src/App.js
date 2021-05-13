import './App.css';
import "react-slideshow-image/dist/styles.css";
import logo from './assets/img/logo.png';
import banner from './assets/img/banner.jpg'
import apple from './assets/img/apple-login.png';
import '@fontsource/roboto';

// Material UI Components
import {
  AppBar,
  Button,
  Card,
  CardActionArea,
  Container,
  Divider,
  Grid,
  List,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { Link } from "react-scroll";

import { Fade } from "react-slideshow-image";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// Icons
import hamburger from './assets/icons/hamburger.svg';
import drink from './assets/icons/drink.svg';
import chill from './assets/icons/chill.svg';

// Slideshow
import img1 from './assets/img/slideshow/img1.jpg';
import img2 from './assets/img/slideshow/img2.jpg';
import img3 from './assets/img/slideshow/img3.jpg';


const useStyles = makeStyles((theme: Theme) => createStyles({
  appbar: {
    alignItems: 'center',
    backgroundColor: '#383434',
  },
  card: {
    width: "100%",
  },
  carousel: {
    opacity: "50%",
    backgroundColor: 'black',
  },
  icon: {
    height: '30%',
    width: '30%',
  },
  link: {
    color: 'white',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    fontFamily: 'Roboto',
  },
  logo: {
    marginRight: theme.spacing(15),
    height: '12.5%',
    width: '12.5%',
  },
  slideImage: {
    opacity: "50%",
    width: "100%",
    display: "block",
    margin: "auto",
  },
  thumbnail: {
    height: "100%",
    width: "100%",
  }

}));

const Header = () => {
  const classes = useStyles();


  return (
    <AppBar className={classes.appbar} position="fixed">  
      <Toolbar>
        <img src={logo} className={classes.logo} alt="Grange Hall 39"/>
        <Link to="home" smooth={true}><Button><Typography className={classes.link}>Home</Typography></Button></Link>
        <Link to="about" smooth={true}><Button><Typography className={classes.link}>About</Typography></Button></Link>
        <Link to="partners" smooth={true}><Button><Typography className={classes.link}>Our Partners</Typography></Button></Link>
        <Link to="apply" smooth={true}><Button><Typography className={classes.link}>Become A Partner</Typography></Button></Link>
        <Link to="contact" smooth={true}><Button><Typography className={classes.link}>Contact</Typography></Button></Link>
      </Toolbar>
    </AppBar>
  );
}

class Artisan {
  constructor(image, link) {
    this.image = image;
    this.link = link;
  }
}

function ArtisanCard(props) {
  const classes = useStyles();

  return (
    <Card style={{backgroundColor: props.color}} className={classes.card}>
      <img src={props.artisan.image} style={{width: "100%", height: "100%"}}/>
    </Card>
  );
}

function Partners() {

  const artisans = {
    BurgerMonster : new Artisan(
      apple,
      "https://google.com",
    )
  }

  return (
    <div>
      <Typography variant="h3">
        Our Artisan Partners
      </Typography>
      <Container style={{height: "50px"}}/>
      <Grid container>
        <Grid container item md={1} lg={2}/>
        <Grid container item xs={12} md={10} lg={8}>
          <Grid item xs={6} sm={4}>
            <ArtisanCard artisan={artisans.BurgerMonster} color="#383434"/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <ArtisanCard artisan={artisans.BurgerMonster} color="white"/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <ArtisanCard artisan={artisans.BurgerMonster} color="#383434"/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <ArtisanCard artisan={artisans.BurgerMonster} color="white"/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <ArtisanCard artisan={artisans.BurgerMonster} color="#383434"/>
          </Grid>
          <Grid item xs={6} sm={4}>
            <ArtisanCard artisan={artisans.BurgerMonster} color="white"/>
          </Grid>
        </Grid>
        <Grid container item md={1} lg={2}/>
      </Grid>
    </div>
  );
}

const About = () => {
  const classes = useStyles();

  return (
    <Container style={{maxWidth: "85vw"}} alignItems="center">
      <Typography variant="h3">THROWBACKS TO THE PAST TO BRING YOU THE FUTURE OF BUENA PARK DINING</Typography>
      <Container style={{height: "50px"}}/>
      <Grid container spacing={10}>
        <Grid container item xs={12} sm={4} justify="center">
          <List>
            <img src={hamburger} className={classes.icon}/>
            <h2>EAT</h2>
            <Divider/>
            <p>Grange Hall 39 highlights an artisan collection of the area's brightest culinary talent & fresh, local ingredients</p>
          </List>
        </Grid>
        <Grid container item xs={12} sm={4} justify="center">
          <List>
            <img src={drink} className={classes.icon}/>
            <h2>DRINK</h2>
            <Divider/>
            <p>Honoring the rich agricultural history
              of Buena Park & modeled after the
              communal halls where farmers would
              gather in the early 1900s</p>
          </List>
        </Grid>
        <Grid container item xs={12} sm={4}>
          <List>
            <img src={chill} className={classes.icon}/>
            <h2>CHILL</h2>
            <Divider/>
            <p>Unique fare with exciting social dining
              experience along with entertainment</p>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

const Home = () => {

  const classes = useStyles();

  const properties = {
    duration: 200,
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
    <div style={{backgroundColor: 'black'}}>
      <div className="slide-container">
        <Fade {...properties}>
          {images.map((each, index) => (
            <div key={index}>
              <img position="absolute" className={classes.slideImage} src={each} alt="Banner"/>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <a id="home"/>
      <Header/>
      {/* <Container style={{minWidth: "100vw", paddingLeft: '0', paddingRight: '0', paddingBottom: '0'}}>
        <img src={banner} alt="Eat at Grange Hall 39!" style={{width: "100%", height: "100%"}}/>
      </Container> */}
      <Home/>
      <a id="about"/><Container style={{height: "100px"}}/>
      <About/>
      <a id="partners"/><Container style={{height: "100px"}}/>
      <Partners/>
    </div>
  );
}

export default App;
