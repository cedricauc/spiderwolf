import React from 'react';
import { InputLabel, Box, Button, Stack, TextField } from '@mui/material';

const LoginForm = () => {

  return (
    <Box component="form" sx={{
        width: '65%',
        mx: 'auto',
        }}>
        <Stack 
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            textAlign="left"
        >
            <div>
                <InputLabel sx={{color: "#204B8E"}}>Pseudo</InputLabel>
                <TextField
                    size="small"
                    sx={{
                        background: "white",
                        border: 0,
                        mt: 2
                    }} 
                    required
                    variant="outlined"
                    id="login"
                    // value={login}
                    // onChange={handleChange}
                />
            </div>
            <div>
                <InputLabel sx={{color: "#204B8E"}}>Mot de pass</InputLabel>
                <TextField
                    size="small"
                    sx={{
                        background: "white",
                        border: 0,
                        mt: 2
                    }}
                    required
                    variant="outlined"
                    id="password"
                    type="password"
                />
            </div>
        </Stack>
        <Box sx={{display:'flex'}}>
            <Button variant="contained" color="primary" size="small" sx={{mt: 8, ml:'auto', borderRadius: 0}}>
                Se connecter
            </Button>
        </Box>
    </Box>
  )
}


export default LoginForm