import { combineReducers } from 'redux'
import appLogin from './setLogin'
import appLoading from './setLoading'
import appWishlist from './wishlist'
import appPurchased from './purchased'

export default combineReducers({
  appLogin,
  appLoading,
  appWishlist,
  appPurchased,
})
