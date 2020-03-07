import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import NotFound from '../components/NotFound'

export default function NotFoundPage(props) {
  return (
    <PageTemplate
      content={<NotFound {...props} />}
    />
  )
}
