import React from 'react'
import { Helmet } from 'react-helmet'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import notFound from '../assets/images/not_found.svg'

const useStyles = makeStyles(() => ({
  mainContainer: {
    position: 'absolute',
    top: '25%',
  },
}))

const NotFound = ({ history }) => {
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Container maxWidth="xl" align="center" className={classes.mainContainer}>
        <img src={notFound} alt="not found" width="80%" />
        <Typography variant="h6">
          Page not found
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.goBack()}
        >
          Back
        </Button>
      </Container>
    </>
  )
}

export default NotFound
