import * as React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {
  AppBar,
  Container,
  Button,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  ListItemButton,
  ListItemText,
} from '@mui/material'

import logo from '../../assets/img/logo.png'

import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({
  header: {
    margin: 0,
    backgroundColor: 'primary.main',
  },
  logo: {
    [theme.breakpoints.down('md')]: {
      height: 205,
      top: -18,
    },
    [theme.breakpoints.up('md')]: {
      height: 410,
      top: -34,
    },
  },
  navWrapper: {
    flex: 1,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  btnWrapper: {
    display: 'flex',
    marginTop: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
}))

function Header() {
  const classes = useStyles()

  //react useState hook pour l'état ouverture/fermeture
  const [open, setState] = React.useState(null)

  const openDrawer = Boolean(open)

  //fonction appelée quand le tiroir s'ouvre ou se ferme
  const toggleDrawer = (open) => (event) => {
    //change l'état de la fonction suivant la valeur de open
    setState(open)
  }

  return (
    <AppBar position="static" className={classes.header}>
      <Container maxWidth="xl" disableGutters>
        <Toolbar>
          <Link to="/">
            <Box
              component="img"
              position="absolute"
              className={classes.logo}
              alt="Spiderwolf"
              src={logo}
            />
          </Link>
          <Box component="div" position="static" className={classes.navWrapper}>
            <Navbar />
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="ouvrir tiroir"
            onClick={toggleDrawer(true)}
            sx={{
              marginLeft: 'auto',
              display: {
                xs: 'block',
                md: 'none',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            //emplacement tiroir
            anchor="right"
            //si ouvert--> afficher tirroir
            open={openDrawer}
            //fonction quand le tiroir se ferme
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: 'secondary.main',
              }}
            >
              {/* en cliquant sur l'icône--> appelle de la fonction toggleDrawer et fermeture du tiroir */}
              <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                <CloseIcon sx={{ color: 'light.main' }} />
              </IconButton>

              <Divider sx={{ mb: 2, borderColor: 'light.main' }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton to="/games">
                  <ListItemText primary="Jeux" sx={{ color: 'light.main' }} />
                </ListItemButton>

                <ListItemButton to="/#news">
                  <ListItemText
                    primary="Nouveautés"
                    sx={{ color: 'light.main' }}
                  />
                </ListItemButton>

                <ListItemButton to="/#about">
                  <ListItemText
                    primary="A propos de nous"
                    sx={{ color: 'light.main' }}
                  />
                </ListItemButton>
              </Box>

              <Box component="div" className={classes.btnWrapper}>
                <Button
                  variant="contained"
                  sx={{
                    m: 1,
                    width: 1,
                    backgroundColor: 'light.main',
                    color: 'secondary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      color: 'light.main',
                    },
                  }}
                >
                  Se connecter
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    m: 1,
                    width: 1,
                    backgroundColor: 'light.main',
                    color: 'secondary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      color: 'light.main',
                    },
                  }}
                >
                  Créer un compte
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
