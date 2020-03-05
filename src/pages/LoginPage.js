import React from 'react'

import PageTemplate from '../templates/PageTemplate'
// import Header from '../../components/HeaderAuth'
import Login from '../components/Login'
// import Footer from '../../components/Footer';

export default function LoginPage(props) {
  return (
    <PageTemplate
      // header={<Header title="Login" />}
      content={<Login {...props} />}
    />
  )
}
