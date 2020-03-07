export default (state = [], action) => {
  switch (action.type) {
    case 'BUY_PRODUCT':
      return [
        ...state,
        { ...action.product },
      ]
    default:
      return state
  }
}
