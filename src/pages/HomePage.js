import React from 'react'

import PageTemplate from '../templates/PageTemplate'
// import Header from '../../components/HeaderAuth'
import Home from '../components/Home'
// import Footer from '../../components/Footer';

export default function HomePage(props) {
  return (
    <PageTemplate
      // header={<Header title="Home" />}
      content={<Home {...props} />}
    />
  )
}
