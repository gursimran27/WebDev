import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div>
    {/* outlet allows the parent route to render its child routes */}
            <Outlet/>
    </div>
  )
}

export default MainHeader