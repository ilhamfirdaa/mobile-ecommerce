import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Truncate from 'react-truncate'
import { Link as LinkScroll } from 'react-scroll'

import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import Fade from '@material-ui/core/Fade'
import { makeStyles } from '@material-ui/core/styles'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded'

import emptyCart from '../assets/images/empty_cart.svg'

const useStyles = makeStyles((theme) => ({
  containerHeader: {
    padding: theme.spacing(1, 2),
    zIndex: 9,
    position: 'fixed',
    top: 0,
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
  },
  containerContent: {
    padding: theme.spacing(8, 2),
  },
  emptyContainer: {
    padding: theme.spacing(8, 2),
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(8.5),
    right: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    width: '40px',
    height: '40px',
  },
}))

const Profile = ({ history, purchased }) => {
  const classes = useStyles()
  const [fading, setFading] = useState(false)

  useEffect(() => {
    window.onscroll = () => { scrollFunction() }
  })

  const scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      setFading(true)
    } else {
      setFading(false)
    }
  }

  const handleClickProduct = (product) => {
    history.push({
      pathname: `/detail/${product.id}`,
      state: { product },
    })
  }

  const handleBack = () => {
    history.goBack()
  }

  return (
    <>
      <Fade in={fading}>
        <LinkScroll to="top" spy smooth duration={1000}>
          <Fab className={classes.fab}>
            <ExpandLessRoundedIcon style={{ color: 'white' }} />
          </Fab>
        </LinkScroll>
      </Fade>

      <Container maxWidth="xl" className={classes.containerHeader}>
        <Grid
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={2}>
            <ArrowBackIcon onClick={() => handleBack()} />
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle1">
              Purchase History
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className={classes.containerContent} id="top">
        <Grid container spacing={2}>
          {Array.isArray(purchased) && purchased.length
            ? purchased.map((item, i) => (
              <Grid
                item
                xs={12}
                onClick={() => handleClickProduct(item)}
                key={`${item.id}_${i}`}
              >
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <img src={item.imageUrl} alt={item.title} width="96" height="96" />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body1">
                      <Truncate lines={2} ellipsis={<span>...</span>}>
                        {item.title}
                      </Truncate>
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      {item.price}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))
            : (
              <Container maxWidth="xl" align="center" className={classes.emptyContainer}>
                <img src={emptyCart} alt="not found" width="80%" />
                <Typography variant="h6">
                  Hey, it's empty?
                </Typography>
                <Typography variant="subtitle1">
                  Get something that you have already dreamed of
                </Typography>
              </Container>
            )}
        </Grid>
      </Container>
    </>
  )
}

export default connect((state) => ({
  purchased: state.appPurchased,
}), null)(Profile)
