import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import Profile from '../components/Profile'

export default function ProfilePage(props) {
  return (
    <PageTemplate
      content={<Profile {...props} />}
    />
  )
}
