import React from 'react'

import { NavLink } from 'react-router-dom'

export const NavItem = (props) => {
  return (
    <li onClick={e => props.logoutSistem()} className='nav-item'>
      <NavLink to={props.href} className='nav-link'>{props.label}</NavLink>
    </li>
  )
}
