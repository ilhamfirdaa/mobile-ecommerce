import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Wihslist from '../components/Wishlist'

export default function WihslistPage(props) {
  return (
    <PageTemplate
      content={<Wihslist {...props} />}
    />
  )
}
