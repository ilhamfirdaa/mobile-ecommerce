import React from 'react'
import PropTypes from 'prop-types'

// import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'


import themes from '../theme'

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)',
  },
  footer: {
    backgroundColor: '#0F131C',
    padding: '10px 0',
    marginTop: theme.spacing(8),
  },
  content: {
    // minHeight: 'calc(100vh - 150px)',
    // marginBottom: theme.spacing(8),
  },
  bNav: {
    zIndex: 99999,
    position: 'fixed',
    bottom: 0,
    padding: 0,
  },
}))

const PageTemplate = ({
  // header, content, footer, bottomNav,
  content,
}) => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={themes}>
      <CssBaseline />
      {/* <AppBar position="sticky" color="inherit" className={classes.header}>{header}</AppBar> */}
      <Container component="main" className={classes.content} maxWidth="xl">{content}</Container>
      {/* <Container component="main" className={classes.bNav} maxWidth="xl">{bottomNav}</Container> */}
      {/* <Container component="main" className={classes.footer} maxWidth="xl">{footer}</Container> */}
    </MuiThemeProvider>
  )
}

PageTemplate.propTypes = {
  // header: PropTypes.node,
  // bottomNav: PropTypes.node,
  content: PropTypes.node.isRequired,
  // footer: PropTypes.node,
}

export default PageTemplate
