import React from 'react'

import PageTemplate from '../templates/PageTemplate'
import BottomNav from '../components/BottomNav'
import Profile from '../components/Profile'

export default function ProfilePage(props) {
  return (
    <PageTemplate
      content={<Profile {...props} />}
      bottomNav={<BottomNav navIndex={3} {...props} />}
    />
  )
}
