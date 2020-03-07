import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Login from '../components/Login'

export default function LoginPage(props) {
  return (
    <PageTemplate
      content={<Login {...props} />}
    />
  )
}
