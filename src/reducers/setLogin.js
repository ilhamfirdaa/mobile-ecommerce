const initialState = {
  isLogin: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN':
      return { ...state, isLogin: action.isLogin }
    default:
      return state
  }
}
