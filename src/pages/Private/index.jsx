import React from 'react'
import { logout } from '../../commonjs/auth'

const Private = () => {
  return (
    <div>Secure@     
      <button onClick={logout}  className="btn btn-primary">Log out</button>
    
    </div>
  )
}

export default Private