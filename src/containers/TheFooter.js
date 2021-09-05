import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">3UPS</a>
        <span className="ml-1">&copy; {new Date().getFullYear()} All Rights Reserved </span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Designed & Developed by</span>
        <a href="https://www.hspmsolutions.com/" target="_blank" rel="noopener noreferrer">HSPM Solutions</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
