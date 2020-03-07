export default (state = [], action) => {
  switch (action.type) {
    case 'TOOGLE_WISHLIST':
      if (Array.isArray(state) && state.length === 0) {
        return [
          ...state,
          { ...action.product },
        ]
      }
      if (!state.some((item) => item.id === action.product.id)) {
        return [
          ...state,
          { ...action.product },
        ]
      }
      return state.filter((item) => item.id !== action.product.id)
    default:
      return state
  }
}
