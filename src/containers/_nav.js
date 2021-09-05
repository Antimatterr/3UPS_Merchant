import React from 'react'
import CIcon from '@coreui/icons-react'


const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    
  },
 
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Profile',
    to: '/profile',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },

  {
    _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
        icon: 'cil-cursor',
  },
      
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
        icon: 'cil-cursor',
      },
     
  


  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav


