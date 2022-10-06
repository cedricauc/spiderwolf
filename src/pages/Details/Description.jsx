import { Box, Stack, Typography } from '@mui/material'

import ReactPlayer from 'react-player'

import './player.scss'

export default function Description({ game }) {
  return (
    <Stack direction="column" justifyContent="space-between" textAlign="center">
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
        <Typography variant="body1">{game.description}</Typography>
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
          url={game.video}
          className="player"
          width="100%"
          height="100%"
        />
      </Box>
    </Stack>
  )
}
