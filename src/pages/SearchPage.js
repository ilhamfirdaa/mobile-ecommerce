import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Search from '../components/Search'

export default function SearchPage(props) {
  return (
    <PageTemplate
      content={<Search {...props} />}
    />
  )
}
