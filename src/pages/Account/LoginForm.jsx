import React from 'react'
import { InputLabel, Box, Button, Stack, TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'

const LoginForm = () => {
  const { handleSubmit, control } = useForm()
  const onSubmit = (d) => {
    console.log(d)
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: '65%',
        mx: 'auto',
        mb: '3rem',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        textAlign="left"
      >
        <div>
          <InputLabel sx={{ color: '#204B8E' }}>Pseudo</InputLabel>
          <Controller
            name="login"
            control={control}
            defaultValue=""
            variant="outlined"
            rules={{ required: 'required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                size="small"
                sx={{
                  background: 'white',
                  mt: 2,
                }}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </div>
        <div>
          <InputLabel sx={{ color: '#204B8E' }}>Mot de pass</InputLabel>
          <Controller
            name="pass"
            type="password"
            control={control}
            defaultValue=""
            variant="outlined"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                size="small"
                sx={{
                  background: 'white',
                  mt: 2,
                }}
              />
            )}
          />
          {/* <TextField
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
                    /> */}
        </div>
      </Stack>
      <Box sx={{ display: 'flex' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          sx={{ mt: 8, ml: 'auto', borderRadius: 0 }}
        >
          Se connecter
        </Button>
      </Box>
    </Box>
  )
}

export default LoginForm
