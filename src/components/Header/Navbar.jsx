import * as React from 'react'
import { Link } from 'react-router-dom'
import { Person } from '@mui/icons-material'
import { Button, Box, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'

import SearchBox from './SearchBox'

const NavbarBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  [theme.breakpoints.up('md')]: {
    marginLeft: 250,
  },
}))

export default function Navbar() {
  //react useState hook pour l'état ouverture/fermeture
  const [open, setState] = React.useState(null)

  const openMenu = Boolean(open)
  const idMenu = openMenu ? 'simple-menu' : undefined

  //fonction appelée quand le menu s'ouvre
  const handleMenuClick = (event) => {
    setState(event.currentTarget)
  }
  //fonction appelée quand le menu se ferme
  const handleMenuClose = () => {
    setState(null)
  }

  return (
    <NavbarBox component="div" position="static">
      <Button
        component={Link}
        to="/games"
        id="games-button"
        sx={{ color: 'light.main' }}
        aria-haspopup="false"
      >
        Jeux
      </Button>

      <Button
        component={Link}
        to="/#news"
        id="news-button"
        sx={{ color: 'light.main' }}
        aria-haspopup="false"
      >
        Nouveautés
      </Button>

      <Button
        component={Link}
        to="/#about"
        id="news-button"
        sx={{ color: 'light.main' }}
        aria-haspopup="false"
      >
        A propos de nous
      </Button>

      <Button
        component={Link}
        to="/account"
        id="navbar-register-button"
        variant="contained"
        aria-haspopup="false"
        sx={{
          borderRadius: 50,
          backgroundColor: 'light.main',
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.main',
            color: 'light.main',
          },
        }}
      >
        Créer un compte
      </Button>

      <SearchBox />

      <Box component="div">
        <Button
          id={idMenu}
          aria-controls={openMenu ? 'menu-controls' : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? 'true' : undefined}
          onClick={handleMenuClick}
          sx={{ color: 'white' }}
        >
          <Person sx={{ fontSize: '2rem' }}></Person>
        </Button>

        <Menu
          id={idMenu}
          aria-labelledby="demo-positioned-button"
          anchorEl={open}
          open={openMenu}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <MenuItem onClick={handleMenuClose}>Mon compte</MenuItem>
          <MenuItem onClick={handleMenuClose}>Se déconnecter</MenuItem>
        </Menu>
      </Box>
    </NavbarBox>
  )
}
