import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  Paper,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import darkForest from '../../assets/img/dark-forest.png'

import pirateDice from '../../assets/img/pirate-s-dices.png'

import ReactPlayer from 'react-player'

import './player.scss'

const Item = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${pirateDice})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: '300px',
  '&:hover': {
    boxShadow: '0 10px 71px rgba(47,91,234,.175)',
    transform: 'scale(1.1)',
    cursor: 'pointer',
  },
  transition: 'transform 0.3s',
}))

const Details = () => {
  const navigate = useNavigate()
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/')
  }

  return (
    <Box component="main" position="static">
      <Box
        component="section"
        id="game-details"
        position="static"
        sx={{
          backgroundColor: 'dark.main',
          backgroundImage: `url(${darkForest})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '100%',
          py: 5,
        }}
      >
        <Container maxWidth="lg" position="static" sx={{ py: 5 }}>
          <Stack
            direction={{ sm: 'column', md: 'row' }}
            justifyContent="space-between"
            textAlign={{ sm: 'center', md: 'left' }}
          >
            <Box component="div" sx={{ flex: 1, my: 5 }}>
              <Grid
                item
                xs={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: 400,
                }}
              >
                <img
                  src={pirateDice}
                  alt=""
                  height="400"
                  sx={{ height: '100%' }}
                />
              </Grid>
            </Box>
            <Box component="div" sx={{ flex: 1, my: 5, color: 'light.main' }}>
              <Typography variant="h3" component="h1" sx={{ mb: 5 }}>
                PIRATE'S DICES
              </Typography>
              <Box>
                <Typography variant="h6" component="h5">
                  DEVELOPPEUR:
                </Typography>
                <Typography variant="h6" component="h5">
                  EDITEUR:
                </Typography>
                <Typography variant="h6" component="h5">
                  DATE DE SORTIE:
                </Typography>
                <Typography variant="h6" component="h5">
                  GENRE:
                </Typography>
              </Box>
              <Button
                component={Link}
                to="#"
                id="details-game-button"
                variant="contained"
                aria-haspopup="false"
                sx={{
                  mt: 5,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h5" component="h5" fontWeight={500}>
                  JOUER
                </Typography>
              </Button>
            </Box>
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-between"
            textAlign="center"
          >
            <Box
              component="div"
              sx={{
                flex: 1,
                color: 'light.main',
                my: 5,
              }}
            >
              <Typography variant="h3" component="h2">
                A propos du jeu
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                flex: 1,
                color: 'light.main',
                my: 5,
              }}
            >
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque eu ultrices vitae auctor eu augue. Bibendum ut
                tristique et egestas quis ipsum. At ultrices mi tempus imperdiet
                nulla malesuada pellentesque elit. Platea dictumst vestibulum
                rhoncus est pellentesque elit ullamcorper. Id velit ut tortor
                pretium. Facilisis magna etiam tempor orci eu lobortis
                elementum. Ullamcorper morbi tincidunt ornare massa eget egestas
                purus viverra. Placerat vestibulum lectus mauris ultrices eros
                in cursus. Maecenas accumsan lacus vel facilisis volutpat. Dolor
                magna eget est lorem. Morbi non arcu risus quis varius quam.
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                my: 5,
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dEu5XGRfSDA"
                className="player"
                width="100%"
                height="100%"
              />
            </Box>
          </Stack>
          <Stack
            direction="column"
            justifyContent="space-between"
            textAlign="center"
          >
            <Box
              component="div"
              sx={{
                flex: 1,
                color: 'light.main',
                my: 5,
              }}
            >
              <Typography variant="h3" component="h2">
                Autres Jeux
              </Typography>
            </Box>
            <Stack
              direction={{ sm: 'column', md: 'row' }}
              spacing={2}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Box
                component={Link}
                sx={{ flex: 1, mb: 5, p: 2 }}
                onClick={navigateHome}
              >
                <Item></Item>
              </Box>
              <Box
                component={Link}
                sx={{ flex: 1, mb: 5, p: 2 }}
                onClick={navigateHome}
              >
                <Item></Item>
              </Box>
              <Box
                component={Link}
                sx={{ flex: 1, mb: 5, p: 2 }}
                onClick={navigateHome}
              >
                <Item></Item>
              </Box>
            </Stack>
          </Stack>
          <Box sx={{ height: '300px' }}></Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Details
