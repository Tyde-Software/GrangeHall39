import './App.css';
import logo from './assets/img/logo.png';
import banner from './assets/img/banner.jpg'

// Material UI Components
import {
  AppBar,
  Button,
  Container,
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
  link: {
    color: 'white',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  logo: {
    marginRight: theme.spacing(15),
    height: '12.5%',
    width: '12.5%',
  }

}));

const Header = () => {
  const classes = useStyles();


  return (
    <AppBar className={classes.appbar} position="absolute">  
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

function App() {
  return (
    <div className="App" style={{minHeight:"100vh", maxHeight:"100vh"}}>
      <Container style={{minWidth: "100vw", paddingLeft: '0', paddingRight: '0', paddingBottom: '0'}}>
      <Header/>
      <img src={banner} alt="Eat at Grange Hall 39!" style={{width: "100%", height: "100%"}}/>
      </Container>
    </div>
  );
}

export default App;
