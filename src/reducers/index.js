import { combineReducers } from 'redux'
import appLogin from './setLogin'
import appWishlist from './wishlist'
import appPurchased from './purchased'

export default combineReducers({
  appLogin,
  appWishlist,
  appPurchased,
})
