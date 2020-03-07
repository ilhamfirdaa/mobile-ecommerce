import React from 'react'
import { connect } from 'react-redux'
import Truncate from 'react-truncate'

import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

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
    padding: theme.spacing(8, 2, 2),
  },
}))

const Profile = ({ history, purchased }) => {
  const classes = useStyles()

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

      <Container maxWidth="xl" className={classes.containerContent}>
        <Grid container spacing={2}>
          {purchased.map((item, i) => (
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
                  <Typography variant="body1">
                    {item.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default connect((state) => ({
  purchased: state.appPurchased,
}), null)(Profile)
