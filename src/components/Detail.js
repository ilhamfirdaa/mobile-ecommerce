import React, { useState, forwardRef } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import Snackbar from '@material-ui/core/Snackbar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import LinkRoundedIcon from '@material-ui/icons/LinkRounded'
import ShareIcon from '@material-ui/icons/Share'

import { toogleWishlist, buyProduct } from '../actions'

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
    padding: theme.spacing(10, 2),
  },
  containerFooter: {
    padding: theme.spacing(1, 2),
    zIndex: 9,
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white',
    boxShadow: '0px -1px 2px 0px rgba(0, 0, 0, 0.12);',
  },
  containerShareIcon: {
    padding: theme.spacing(4, 2),
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  copyIcon: {
    padding: '5px',
    color: 'white',
    borderRadius: '20px',
    backgroundColor: 'rgb(127, 127, 127)',
    height: '32px',
    width: '32px',
  },
  productNotLoved: {
    color: '#9FA6B0',
    position: 'absolute',
    backgroundColor: '#F3F4F5',
    borderRadius: '20px',
    padding: '5px',
  },
  productLoved: {
    color: 'red',
    position: 'absolute',
    backgroundColor: '#F3F4F5',
    borderRadius: '20px',
    padding: '5px',
  },
  modalNotif: {
    left: '56px',
    right: '56px',
  },
}))

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />)

const Detail = ({
  history, location, wishlist, dispatch,
}) => {
  const classes = useStyles()
  const { product } = location.state
  const shareUrl = window.location.href
  const [openModal, setOpenModal] = useState(false)
  const [message, setMessage] = useState('')
  const [openNotif, setopenNotif] = useState(false)

  const handleLoveProduct = (item) => {
    dispatch(toogleWishlist(item))
  }

  const handleBuy = (item) => {
    dispatch(buyProduct(item))

    setMessage('Product purchased')
    setopenNotif(true)
  }

  const handleCloseNotif = () => {
    setopenNotif(false)
  }

  const handleClickOpen = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  const handleBack = () => {
    history.goBack()
  }

  const handleCopyUrl = () => {
    const el = document.createElement('input')
    el.value = shareUrl
    document.body.appendChild(el)
    el.select()
    el.setSelectionRange(0, 99999) /* For mobile devices */
    document.execCommand('copy')
    document.body.removeChild(el)

    setMessage('URL copied')
    setopenNotif(true)
  }

  const ShareModal = () => (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Share
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" className={classes.containerShareIcon}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          align="center"
        >
          <Grid item xs={3}>
            <FacebookShareButton
              url={shareUrl}
              quote={product.title}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <Typography variant="body2">
              Facebook
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <TwitterShareButton
              url={shareUrl}
              title={product.title}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <Typography variant="body2">
              Twitter
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <WhatsappShareButton
              url={shareUrl}
              title={product.title}
              separator=" -> "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <Typography variant="body2">
              Whatsapp
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          align="center"
          style={{ marginTop: '8px' }}
        >
          <Grid item xs={3}>
            <LineShareButton
              url={shareUrl}
              title={product.title}
            >
              <LineIcon size={32} round />
            </LineShareButton>
            <Typography variant="body2">
              Line
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <EmailShareButton
              url={shareUrl}
              subject={product.title}
              body={`${product.title} -> `}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <Typography variant="body2">
              Email
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <LinkRoundedIcon className={classes.copyIcon} onClick={() => handleCopyUrl()} />
            <Typography variant="body2">
              Copy Link
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )

  return (
    <>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <Container maxWidth="xl" className={classes.containerHeader}>
        <Grid
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={2}>
            <ArrowBackIcon onClick={() => handleBack()} />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1">
              Product Detail
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <ShareIcon onClick={handleClickOpen} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className={classes.containerContent}>
        <Grid container>
          <Grid item xs={12}>
            {wishlist.some((item) => item.id === product.id)
              ? (
                <FavoriteIcon
                  fontSize="large"
                  className={classes.productLoved}
                  onClick={() => handleLoveProduct(product)}
                />
              )
              : (
                <FavoriteBorderIcon
                  fontSize="large"
                  className={classes.productNotLoved}
                  onClick={() => handleLoveProduct(product)}
                />
              )}
            <img src={product.imageUrl} alt={product.title} width="100%" />
            <Divider />
          </Grid>
        </Grid>
        <Typography variant="h6">
          <Box fontWeight="fontWeightBold">
            {product.title}
          </Box>
        </Typography>
        <Typography variant="h6" color="secondary">
          {product.price}
        </Typography>
        <Divider />
        <Typography variant="subtitle1" style={{ fontWeight: '800' }}>
          Product Description
        </Typography>
        <Typography variant="body1" style={{ fontWeight: '200' }}>
          {product.description}
        </Typography>
      </Container>
      <Container maxWidth="xl" className={classes.containerFooter}>
        <Grid
          container
          // spacing={2}
          justify="flex-end"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Typography variant="h6" color="secondary">
              {product.price}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleBuy(product)}
            >
              BUY
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Dialog fullScreen open={openModal} onClose={handleClose} TransitionComponent={Transition}>
        <ShareModal />
      </Dialog>

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={openNotif}
        onClose={handleCloseNotif}
        autoHideDuration={3000}
        message={message}
        className={classes.modalNotif}
      />
    </>
  )
}

export default connect((state) => ({
  wishlist: state.appWishlist,
}), null)(Detail)
