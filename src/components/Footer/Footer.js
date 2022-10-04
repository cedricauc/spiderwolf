import { Box, Container, Grid, Link, Typography } from '@mui/material'
import logo from '../../assets/img/footer-img.png'
import { styled } from '@mui/material/styles'

const FooterBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minHeight: 'calc(100% + 220px)',
  },
  [theme.breakpoints.up('md')]: {
    minHeight: 'calc(100% + 100px)',
  },
}))

const LogoStyled = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: 300,
    position: 'static',
  },
  [theme.breakpoints.up('md')]: {
    marginRight: 80,
    marginTop: '-100px',
    width: 500,
    right: 0,
  },
  [theme.breakpoints.up('lg')]: {
    marginRight: 90,
    marginTop: '-200px',
    width: 600,
    right: 0,
  },
  [theme.breakpoints.up('xl')]: {
    marginRight: 100,
    marginTop: '-300px',
    width: 700,
    right: 0,
  },
}))

function Footer() {
  return (
    <FooterBox
      component="footer"
      position="static"
      sx={{
        backgroundColor: 'secondary.main',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item sm={12} md={3}>
            <Box
              variant="none"
              sx={{
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                m: '4rem 2rem',
              }}
            >
              <Box sx={{ mb: 5 }}>
                <Typography
                  sx={{
                    color: 'light.main',
                    fontWeight: 600,
                  }}
                  variant="h5"
                  gutterBottom
                >
                  SPIDERWOLF
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Link href="/" sx={{ color: 'light.main' }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                    }}
                    variant="body2"
                    gutterBottom
                  >
                    SUPPORT
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Link href="/" sx={{ color: 'light.main' }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                    }}
                    variant="body2"
                    gutterBottom
                  >
                    POLITIQUE DE CONFIDENTIALITE
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Link href="/" sx={{ color: 'light.main' }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                    }}
                    variant="body2"
                    gutterBottom
                  >
                    PIRATE'S DICES
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Link href="/" sx={{ color: 'light.main' }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                    }}
                    variant="body2"
                    gutterBottom
                  >
                    LE ROYAUME DE NAWAKIM
                  </Typography>
                </Link>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Link href="/" sx={{ color: 'light.main' }}>
                  <Typography
                    sx={{
                      fontWeight: 400,
                    }}
                    variant="body2"
                    gutterBottom
                  >
                    ERE MEDIEVAL
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={9}>
            <Box sx={{ display: 'flex' }}>
              <Link to="/">
                <LogoStyled
                  component="img"
                  position="absolute"
                  alt="Spiderwolf"
                  src={logo}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterBox>
  )
}

export default Footer
