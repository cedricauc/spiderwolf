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

const LogoBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: 440,
    marginTop: '-220px',
    right: 0,
  },
  [theme.breakpoints.up('md')]: {
    width: 880,
    marginTop: '-440px',
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
          <Grid item xs={12} sm={3}>
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
                    Politique de confidentialité
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
                    Pirate's dices
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={{ display: 'flex' }}>
              <Link to="/">
                <LogoBox
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
