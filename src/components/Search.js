import React, { useState } from 'react'
import Truncate from 'react-truncate'

import {
  Container,
  Grid,
  Typography,
} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SearchIcon from '@material-ui/icons/Search'

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

const Search = ({ history, location }) => {
  const classes = useStyles()
  const { products } = location.state
  const [find, setFind] = useState('')
  const [found, setFound] = useState([])

  const handleClickProduct = (product) => {
    history.push({
      pathname: `/detail/${product.id}`,
      state: { product },
    })
  }

  const handleChange = (e) => {
    e.persist()
    const { value } = e.target
    setFind((value))
    if (value !== '') {
      const res = products.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()))
      setFound(res)
    } else {
      setFound([])
    }
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
            <TextField
              autoFocus
              variant="outlined"
              fullWidth
              id="search"
              placeholder="Search"
              name="text"
              size="small"
              value={find}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl" className={classes.containerContent}>
        <Grid container spacing={2}>
          {found.map((item, i) => (
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
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Search
