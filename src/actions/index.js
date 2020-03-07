export const setLogin = (isLogin) => ({
  type: 'SET_LOGIN',
  isLogin,
})

export const toogleWishlist = (product) => ({
  type: 'TOOGLE_WISHLIST',
  product,
})

export const buyProduct = (product) => ({
  type: 'BUY_PRODUCT',
  product,
})
