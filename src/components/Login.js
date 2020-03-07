import React from 'react'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import googleIcon from '../assets/images/google.svg'
import facebookIcon from '../assets/images/facebook.svg'

import { setLogin } from '../actions'

const useStyles = makeStyles(() => ({
  formContainer: {
    position: 'absolute',
    top: '20%',
  },
}))

const Login = ({ dispatch }) => {
  const classes = useStyles()

  const responseFacebook = (response) => {
    console.log(response)
    dispatch(setLogin(true))
  }

  const responseGoogle = async (response) => {
    console.log(response)
    dispatch(setLogin(true))
  }

  return (
    <Container className={classes.formContainer} maxWidth="xl">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <Typography variant="h5">
              LOGIN
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={7}>
            <FormControlLabel
              control={(
                <Checkbox
                  value="rememberMe"
                  color="primary"
                />
          )}
              label="Remember Me"
            />
          </Grid>
          <Grid item xs={5} align="right">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => dispatch(setLogin(true))}
              style={{ backgroundColor: '#6C727C', color: 'white' }}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FacebookLogin
            appId="150675322737055"
            fields="name,email,picture"
            callback={responseFacebook}
            render={(renderFacebook) => (
              <Button
                fullWidth
                variant="outlined"
                // color="primary"
                // style={{ backgroundColor: '#475993', color: 'white' }}
                startIcon={<img src={facebookIcon} alt="facebook icon" height="20" width="20" />}
                onClick={renderFacebook.onClick}
              >
                Sign In with Facebook
              </Button>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <GoogleLogin
            clientId="539178678093-nqs3clbt26fundk16ptv594o264qa9dp.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            accessType
            // uxMode="redirect"
            // redirectUri="http://localhost:3000/login"
            // theme="dark"
            render={(renderGoogle) => (
              <Button
                fullWidth
                variant="outlined"
                // color="primary"
                // style={{ backgroundColor: '#5591F5', color: 'white' }}
                startIcon={<img src={googleIcon} alt="google icon" height="20" width="20" />}
                onClick={renderGoogle.onClick}
              >
                Sign In with Google
              </Button>
            )}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default connect()(Login)
