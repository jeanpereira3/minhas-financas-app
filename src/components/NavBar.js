import React from 'react'

import { NavLink } from 'react-router-dom'

import { NavItem } from './NavItem'

const NavBar = () => {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <NavLink to={'/home'} className='navbar-brand'>Minhas Finanças</NavLink>
        <button 
          className='navbar-toggler' 
          type='button' 
          data-toggle='collapse' 
          data-target='#navbarResponsive' 
          aria-controls='navbarResponsive' 
          aria-expanded='false' 
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavItem href='/home' label='Home'></NavItem>

            <NavItem href='/cadastrar-usuario' label='Usuários'></NavItem>

            <NavItem href='/lancamentos' label='Lançamentos'></NavItem>

            <NavItem href='/' label='login'></NavItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar