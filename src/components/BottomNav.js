import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import HomeIcon from '@material-ui/icons/Home'
import ListAltIcon from '@material-ui/icons/ListAlt'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'

const BottomNav = (props) => {
  const { navIndex } = props
  const [value, setValue] = useState(navIndex)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/feed"
        label="Feed"
        icon={<ListAltIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/cart"
        label="Cart"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        label="Profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  )
}

export default BottomNav
