import React from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const Login = ({ onLoginEmail, onLoginPassword, onVerify }) => {

    return (
        <div className='login container'>
            <Container component='main' maxWidth='xs'>
                <div className="mt-3 mt-md-5">
                    <div className="text-center">
                        <Typography className='mt-3 font-weight-bold' component='h1' variant='h6'>LOGIN</Typography>
                    </div>

                    <div className="mt-4">
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='outlined-email'
                            name='username'
                            type='email'
                            placeholder="E-MAIL"
                            helperText="Por favor entre com seu e-mail"
                            onChange={ onLoginEmail }
                        />

                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='outlined-password'
                            name='password'
                            type='password'
                            placeholder="SENHA"
                            helperText="Por favor entre com sua senha"
                            onChange={ onLoginPassword }
                        />

                        <Button
                            type='button'
                            variant='contained'
                            fullWidth
                            size='large'
                            className='mb-3 mb-md-4 mt-4'
                            onClick={ function(e) {onVerify()}}
                        >
                            Entrar
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Login;