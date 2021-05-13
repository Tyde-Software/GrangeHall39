import './App.css';
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
  CardMedia,
  Container,
  Grid,
  Hidden,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
  appbar: {
    alignItems: 'center',
    backgroundColor: '#383434',
    opacity: '95%',
  },
  card: {
    width: "100%",
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
  thumbnail: {
    height: "100%",
    width: "100%",
  }

}));

const Header = () => {
  const classes = useStyles();


  return (
    <AppBar className={classes.appbar} position="static">  
      <Toolbar>
        <img src={logo} className={classes.logo} alt="Grange Hall 39"/>
        <Button><Typography className={classes.link}>Home</Typography></Button>
        <Button><Typography className={classes.link}>About</Typography></Button>
        <Button><Typography className={classes.link}>Our Partners</Typography></Button>
        <Button><Typography className={classes.link}>Become A Partner</Typography></Button>
        <Button><Typography className={classes.link}>Contact</Typography></Button>
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
    <div style={{minWidth: "100vw", paddingLeft: '0', paddingRight: '0', paddingBottom: '0'}}>
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
  return (
    <Container style={{maxWidth: "80vw"}} alignItems="center">
      <Typography variant="h3">THROWBACKS TO THE PAST TO BRING YOU THE FUTURE OF BUENA PARK DINING</Typography>
      <Container style={{height: "50px"}}/>
      <Grid container spacing={2}>
        <Grid container item xs={12} sm={4}>
          Grange Hall 39 highlights an artisan collection of the area's brightest culinary talent & fresh, local ingredients
        </Grid>
        <Grid container item xs={12} sm={4}>
          Honoring the rich agricultural history
          of Buena Park & modeled after the
          communal halls where farmers would
          gather in the early 1900s
        </Grid>
        <Grid container item xs={12} sm={4}>
          Unique fare with exciting social dining
          experience along with entertainment
        </Grid>
      </Grid>
    </Container>
  );
}

function App() {
  return (
    <div className="App">
      <Container style={{minWidth: "100vw", paddingLeft: '0', paddingRight: '0', paddingBottom: '0'}}>
        <Header/>
        <img src={banner} alt="Eat at Grange Hall 39!" style={{width: "100%", height: "100%"}}/>
      </Container>
      <Container style={{height: "100px"}}/>
      <About/>
      <Container style={{height: "100px"}}/>
      <Partners/>
    </div>
  );
}

export default App;
