import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Truncate from 'react-truncate'

import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import SearchIcon from '@material-ui/icons/Search'

import { setLogin, toogleWishlist } from '../actions'

const useStyles = makeStyles((theme) => ({
  containerHeader: {
    padding: theme.spacing(1, 2),
    zIndex: 9,
    position: 'fixed',
    top: 0,
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 2px 4px 0px',
  },
  containerCategory: {
    paddingTop: theme.spacing(10),
  },
  containerProduct: {
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  categoryImg: {
    height: '50px',
    width: '50px',
  },
  tileList: {
    height: 'auto !important',
    width: '25% !important',
    padding: theme.spacing(1),
  },
  tileDiv: {
    height: 'auto !important',
    textAlign: 'center',
  },
  tileImg: {
    transform: 'none !important',
  },
  productItem: {
    width: '160px',
    height: '160px',
  },
  productImg: {
    maxWidth: '100%',
    maxHeight: '100%',
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
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  loaderSpinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}))

const Home = ({
  history, wishlist, dispatch,
}) => {
  const classes = useStyles()
  const [categories, setCategories] = useState()
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await axios.get('https://private-4639ce-ecommerce56.apiary-mock.com/home')
      if (res.status === 200) {
        setCategories(res.data[0].data.category)
        setProducts(res.data[0].data.productPromo)
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClickProduct = (product) => {
    history.push({
      pathname: `/detail/${product.id}`,
      state: { product },
    })
  }

  const handleSearch = () => {
    history.push({
      pathname: '/search',
      state: { products },
    })
  }

  const handleLoveProduct = (product) => {
    dispatch(toogleWishlist(product))
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container maxWidth="xl" className={classes.containerHeader}>
        <Grid
          container
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={2}>
            <FavoriteBorderIcon
              fontSize="large"
              style={{ color: '#C3C3C3' }}
              onClick={() => history.push('/wishlist')}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              variant="outlined"
              fullWidth
              id="search"
              placeholder="Search"
              name="text"
              size="small"
              onClick={() => handleSearch()}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <ExitToAppIcon
              fontSize="large"
              style={{ color: '#C3C3C3' }}
              onClick={() => dispatch(setLogin(false))}
            />
          </Grid>
        </Grid>
      </Container>

      {!isLoading ? (
        <>
          <Container maxWidth="xl" className={classes.containerCategory}>
            <GridList className={classes.gridList} cols={2.5}>
              {categories.map((tile) => (
                <GridListTile
                  key={tile.id}
                  classes={{
                    root: classes.tileList,
                    tile: classes.tileDiv,
                    imgFullWidth: classes.tileImg,
                  }}
                >
                  <img src={tile.imageUrl} alt={tile.name} className={classes.categoryImg} />
                  <Typography variant="body2">
                    {tile.name}
                  </Typography>
                </GridListTile>
              ))}
            </GridList>
          </Container>

          <Container maxWidth="xl" className={classes.containerProduct}>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid
                  item
                  xs={6}
                  key={product.id}
                  className={classes.productItem}
                >
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
                  <div onClick={() => handleClickProduct(product)}>
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className={classes.productImg}
                    />
                    <Typography variant="body2">
                      <Truncate lines={2} ellipsis={<span>...</span>}>
                        {product.title}
                      </Truncate>
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      {product.price}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      ) : (
        <CircularProgress className={classes.loaderSpinner} />
      )}
    </>
  )
}

export default connect((state) => ({
  wishlist: state.appWishlist,
}), null)(Home)
