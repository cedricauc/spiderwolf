import * as React from 'react'
import { Link } from 'react-router-dom'
import { Search } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import InputBase from '@mui/material/InputBase'
import {
  Paper,
  Button,
  Box,
  Typography,
  Modal,
  Card,
  CardHeader,
  CardContent,
  IconButton,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const ModalBox = styled(Box)(({ theme }) => ({
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 250,
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
}))

export default function SearchBox() {
  //react useState hook pour l'état ouverture/fermeture
  const [open, setState] = React.useState(null)

  const openModal = Boolean(open)
  const idModal = openModal ? 'simple-modal' : undefined

  //fonction appelée quand la modal s'ouvre
  const handleModalClick = (event) => {
    setState(event.currentTarget)
  }
  //fonction appelée quand la modal se ferme
  const handleModalClose = () => {
    setState(null)
  }

  return (
    <Box component="div">
      <Button
        id={idModal}
        aria-controls={openModal ? 'modal-controls' : undefined}
        aria-haspopup="true"
        aria-expanded={openModal ? 'true' : undefined}
        onClick={handleModalClick}
        sx={{ color: 'white' }}
      >
        <Search sx={{ fontSize: '2rem' }}></Search>
      </Button>
      <Modal
        id={idModal}
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="search-modal"
        aria-describedby="spiderwolf-site-search-modal"
      >
        <ModalBox
          component="div"
          position="absolute"
          sx={{
            color: 'light.main',
            backgroundColor: 'primary.main',
          }}
        >
          <Card sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <CardHeader
              sx={{
                backgroundColor: 'rgb(12, 12, 12, 0.5)',
                color: 'dark.main',
              }}
              action={
                <IconButton component={Link} onClick={handleModalClose}>
                  <CloseIcon sx={{ color: 'dark.main' }} />
                </IconButton>
              }
              title={'Recherche'}
            ></CardHeader>
            <CardContent
              sx={{
                backgroundColor: 'primary.main',
                color: 'light.main',
                flex: 1,
              }}
            >
              <Paper
                component="span"
                sx={{
                  backgroundColor: 'rgb(12, 12, 12, 0.5)',
                  color: 'light.main',
                  p: '4px 2px',
                  mt: 1,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <LightbulbIcon sx={{ fontSize: 'small', margin: 1 }} />
                <Typography
                  variant="body2"
                  sx={{ fontSize: 'small', lineHeight: 1 }}
                >
                  Conseils. Effectuez une recherche en saisissant un mot-clé et
                  en appuyant sur Entrée
                </Typography>
              </Paper>

              <Paper
                component="form"
                sx={{ mt: 2, display: 'flex', alignItems: 'center' }}
              >
                <InputBase
                  sx={{ pl: '10px', flex: 1 }}
                  placeholder="Recherche ..."
                  inputProps={{ 'aria-label': 'Recherche ...' }}
                />
                <IconButton
                  type="button"
                  sx={{ p: '10px' }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </CardContent>
          </Card>
        </ModalBox>
      </Modal>
    </Box>
  )
}
