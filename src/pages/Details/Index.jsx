import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Container } from '@mui/material'

import darkForest from '../../assets/img/dark-forest.png'
import { gameList as data } from '../../datas/gameList'

import Game from './Game'
import Description from './Description'
import RelatedGames from './RelatedGames'

const Details = () => {
  const location = useLocation()
  const id = parseInt(location.pathname.split('/')[2])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

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
          {data.map((v) =>
            v.id === id ? (
              <div key={v.id}>
                <Game game={v}></Game>
                <Description game={v}></Description>
                <RelatedGames
                  games={data.filter((item) => item.id !== v.id)}
                ></RelatedGames>
              </div>
            ) : null
          )}
          <Box sx={{ height: '300px' }}></Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Details
