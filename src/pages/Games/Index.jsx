import React, { useState } from 'react'
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Pagination,
  List,
  ListItem,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Link,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import darkForest from '../../assets/img/dark-forest.png'
import logo from '../../assets/img/spiderwolf-logo-02.png'

import './search.scss'
import './pagination.scss'

import usePagination from './pagination'

import { gameList as data } from '../../datas/gameList.js'

const Games = () => {
  const navigate = useNavigate()
  const handleCardClick = (id) => {
    navigate('/games/' + id)
  }

  const { control } = useForm()

  let [page, setPage] = useState(1)
  const PER_PAGE = 5

  const count = Math.ceil(data.length / PER_PAGE)
  const _DATA = usePagination(data, PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  return (
    <Box component="main" position="static">
      <Box
        component="section"
        id="details"
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
            direction="column"
            justifyContent="space-between"
            textAlign="center"
          >
            <Box component="div" sx={{ flex: 1, my: 5 }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{ color: 'light.main' }}
              >
                Bibliothèque de jeux
              </Typography>
              <Controller
                name="q"
                control={control}
                className="search"
                rules={{ required: 'required' }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    size="large"
                    variant="filled"
                    className="search__input"
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Box>
            <Box component="div" sx={{ flex: 1, my: 5 }}>
              <List p="10" pt="3" spacing={2}>
                {_DATA.currentData().map((v) => {
                  return (
                    <ListItem key={v.id} sx={{ my: 5 }}>
                      <Card>
                        <CardActionArea
                          component={Link}
                          onClick={() => handleCardClick(v.id)}
                          sx={{
                            display: 'flex',
                            backgroundColor: 'light.main',
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="200"
                            image={v.image}
                            alt={v.title}
                            sx={{ objectFit: 'fill', maxWidth: 345 }}
                          />
                          <CardContent>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'primary.main',
                                float: 'left',
                                marginLeft: 5,
                              }}
                            >
                              {v.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </ListItem>
                  )
                })}
              </List>
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flex: 1,
                  mb: 5,
                }}
              >
                <CardMedia
                  component="img"
                  image={logo}
                  alt="Spiderwolf logo"
                  sx={{ width: '100px', height: '100px' }}
                />
              </Box>
              <Pagination
                className="pagination"
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </Box>
          </Stack>
          <Box sx={{ height: '300px' }}></Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Games
