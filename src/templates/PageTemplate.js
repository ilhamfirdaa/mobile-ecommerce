import React from 'react'
import PropTypes from 'prop-types'

// import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'


import themes from '../theme'

const useStyles = makeStyles(() => ({
  content: {
    minHeight: '100vh',
    padding: 0,
  },
  bNav: {
    zIndex: 9,
    position: 'fixed',
    bottom: 0,
    padding: 0,
    border: 'solid 1px #B8B8B8',
  },
}))

const PageTemplate = ({
  content, bottomNav,
}) => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={themes}>
      <CssBaseline />
      <Container component="main" className={classes.content} maxWidth="xl">{content}</Container>
      <Container component="main" className={classes.bNav} maxWidth="xl">{bottomNav}</Container>
    </MuiThemeProvider>
  )
}

PageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  bottomNav: PropTypes.node,
}

export default PageTemplate
