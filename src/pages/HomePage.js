import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Home from '../components/Home'
import BottomNav from '../components/BottomNav'

export default function HomePage(props) {
  return (
    <PageTemplate
      content={<Home {...props} />}
      bottomNav={<BottomNav navIndex={0} {...props} />}
    />
  )
}
