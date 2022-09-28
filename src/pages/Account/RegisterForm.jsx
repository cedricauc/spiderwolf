import React from 'react';
import { InputLabel,  Button, Stack, Input, Box, FormControlLabel, Checkbox } from '@mui/material';
import { CheckBoxOutlineBlankOutlined, IndeterminateCheckBox } from '@mui/icons-material';

// '& .MuiSvgIcon-root': {fontSize: 46}
const RegisterForm = () => {
  return (
    <Stack component="form" sx={{
      width: '40%',
      mx: 'auto',
      }}>
          
       <Stack sx={{
      textAlign: 'left'
      }}>
            <InputLabel sx={{color: "#204B8E", mb: 2}}>Pseudo</InputLabel>
            <Input 
              sx={{
                    background: "white",
                    mb: 4
                }}
              required
              id="pseudo"
            />
         
            <InputLabel sx={{color: "#204B8E", mb: 2}}>Nom</InputLabel>
            <Input
              sx={{
                    background: "white",
                    mb: 4
                }}
              required
              id="outlined-required-name"
            />
         
            <InputLabel sx={{color: "#204B8E", mb: 2}}>Email</InputLabel>
            <Input
              sx={{
                    background: "white",
                    mb: 4
                }}
              required
              id="email"
              type="email"
            />
          
            <InputLabel sx={{color: "#204B8E", mb: 2}}>Mot de pass</InputLabel>
            <Input
              sx={{
                    background: "white",
                    mb: 4
                }}
              required
              id="password"
              type="password"
            />
         
            <InputLabel sx={{color: "#204B8E", mb: 2}}>Confirmation de mot de pass</InputLabel>
            <Input
              sx={{
                    background: "white",
                    mb: 4
                  }}
              required
              id="password-confirm"
              type="password"
            />
            <Box>
            {/* Faire checkbox correction */}
              <Checkbox  size="small" 
              icon={<Checkbox/>}
              checkedIcon={<Checkbox />}
              sx={{color:"white", backgroundColor: "white", borderRadius:0,
              '& .MuiSvgIcon-root': { }
             }}/>
          
            </Box>

            <Box sx={{display:'flex'}}>
                <Button variant="contained" color="primary" size="small" sx={{mt: 8, borderRadius: 0}}>
                Créer un compte
                </Button>
            </Box>
        
        </Stack>
        </Stack>       
   
    
  )
}

export default RegisterForm