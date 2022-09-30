import {
  Container,
  Box,
  Typography,
  Stack,
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import pirateDice from '../../assets/img/pirate-s-dices.png'
import royaumeNawakim from '../../assets/img/royaume-nawakim.jpg'

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column',
}))

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
}))

function Games() {
  return (
    <StyledContainer id="container" maxWidth="xl" position="static">
      <StyledBox component="div" sx={{}}>
        <Typography
          variant="h3"
          sx={{ color: 'primary.main', mb: 10 }}
          gutterBottom
        >
          Nos Jeux
        </Typography>
      </StyledBox>
      <Stack direction="row" spacing={10}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={pirateDice}
              alt="Pirate's dices"
              sx={{ objectFit: 'fill' }}
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', textAlign: 'center' }}
              >
                Haec igitur Epicuri non probo, inquam. De cetero vellem equidem
                aut ipse doctrinis fuisset instructior est enim, quod tibi ita
                videri necesse est, non satis politus iis arfibus, quas qui
                tenent, eruditi appellan aut ne deterruisset alios a studiis.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={royaumeNawakim}
              alt="Les royaumes de Nawakim"
              sx={{ objectFit: 'fill' }}
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{ color: 'primary.main', textAlign: 'center' }}
              >
                Haec igitur Epicuri non probo, inquam. De cetero vellem equidem
                aut ipse doctrinis fuisset instructior est enim, quod tibi ita
                videri necesse est, non satis politus iis arfibus, quas qui
                tenent, eruditi appellan aut ne deterruisset alios a studiis.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </StyledContainer>
  )
}

export default Games
