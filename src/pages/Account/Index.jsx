import RegisterForm from './RegisterForm'
import { Box, Container } from '@mui/material'
import React from 'react'
import forest from '../../assets/img/dark-forest.png'
import { styled } from '@mui/system'
import LoginForm from './LoginForm'

const HeaderLight = styled('h4')({
  color: 'white',
  fontSize: '1.5rem',
  paddingBottom: '2rem',
})

const Account = () => {
  return (
    <Box
      component="main"
      position="static"
      sx={{
        backgroundColor: 'dark.main',
        backgroundImage: `url(${forest})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Container
        maxWidth="xl"
        position="static"
        sx={{
          textAlign: 'center',
          pt: '5rem'
        }}
      >
  
          <HeaderLight>Se connecter</HeaderLight>

          {/* Login pour les utilisateurs enrégistrés */}
          <LoginForm sx={{ mb: '2rem' }} />

          <HeaderLight>Ou</HeaderLight>
          <HeaderLight>Créer un compte</HeaderLight>

          {/* Register form pour les nouveau utilisateurs */}
          <RegisterForm />
      </Container>
    </Box>
  )
}

export default Account
