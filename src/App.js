import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import DetailPage from './pages/DetailPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import WishlistPage from './pages/WishlistPage'
import SearchPage from './pages/SearchPage'
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
      <PrivateRoute path="/" exact component={HomePage} />
      <PrivateRoute path="/profile" component={ProfilePage} />
      <PrivateRoute path="/wishlist" component={WishlistPage} />
      <PrivateRoute path="/detail/:product_id" component={DetailPage} />
      <PrivateRoute path="/search" component={SearchPage} />
      <PublicRoute restricted path="/login" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
  )
}

export default connect((state) => ({
  isLogin: state.appLogin.isLogin,
}), null)(App)
