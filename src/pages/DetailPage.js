import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Detail from '../components/Detail'

export default function DetailPage(props) {
  return (
    <PageTemplate
      content={<Detail {...props} />}
    />
  )
}
