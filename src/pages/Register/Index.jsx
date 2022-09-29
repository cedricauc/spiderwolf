import RegisterForm from './RegisterForm';
import { Container } from '@mui/material';
import React from 'react';
import forest from '../../assets/img/dark-forest.png';
import { styled } from '@mui/system';
import {theme} from "../../theme";
import LoginForm from './LoginForm';



const HeaderLight = styled('h4')({
  color: theme.palette.light.secondary,
  fontSize : '1.5rem',
  paddingBottom: '2rem'
})

const Account = () => {
  return (
    <Container sx={{
      margin:0,
      paddinig:0,
      backgroundImage: `url(${forest})`,
      position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      textAlign: 'center'
  }}>
      <HeaderLight>Se connecter</HeaderLight>

      {/* Login pour les utilisateurs enrégistrés */}
      <LoginForm sx={{mb: '2rem'}}/>

      <HeaderLight>Ou</HeaderLight>
      <HeaderLight>Créer un compte</HeaderLight>

      {/* Register form pour les nouveau utilisateurs */}
      <RegisterForm />

    </Container>
  )
}

export default Account