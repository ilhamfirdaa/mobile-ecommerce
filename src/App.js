import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
// import ProfilePage from './pages/ProfilePage'
// import DetailPage from './pages/DetailPage'
// import SearchPage from './pages/SearchPage'
// import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App({ isLogin }) {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        isLogin
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  )

  const PublicRoute = ({ component: Component, restricted, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        isLogin && restricted
          ? <Redirect to="/" />
          : <Component {...props} />
      )}
    />
  )

  return (
    <Switch>
      {/* <PrivateRoute path="/profile" component={ProfilePage} />
			<PrivateRoute path="/detail/:product_id" component={DetailPage} /> */}
      <PublicRoute restricted path="/login" component={LoginPage} />
      <PrivateRoute path="/" exact component={HomePage} />
      {/* <PublicRoute restricted={false} path="/search" component={SearchPage} />
			<Route component={NotFoundPage} /> */}
    </Switch>
  )
}

export default connect((state) => ({
  isLogin: state.app.isLogin,
}), null)(App)
