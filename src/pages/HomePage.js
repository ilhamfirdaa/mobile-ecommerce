import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import BottomNav from '../components/BottomNav'
import Home from '../components/Home'

export default function HomePage(props) {
  return (
    <PageTemplate
      content={<Home {...props} />}
      bottomNav={<BottomNav navIndex={0} {...props} />}
    />
  )
}
