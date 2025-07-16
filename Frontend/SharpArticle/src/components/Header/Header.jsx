import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='border-1 border-white h-15 rounded-2xl flex justify-center items-center text-2xl'>
      <nav className='gap-15 flex' >
        <NavLink
          to={'/'}
        >
          Home
        </NavLink>
        <NavLink
        //  to={'/community'}
        >
          Community
        </NavLink>
        <NavLink
          
        >
          Write Article
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
