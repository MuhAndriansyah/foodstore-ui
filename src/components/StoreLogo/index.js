import React from 'react'
import { config } from '../../config'
import { Link } from 'react-router-dom'
function StoreLogo() {
  return (
    <Link to="/">
      <div className="text-red-600 font-bold text-4xl">{config.site_title}</div>
    </Link>
  )
}

export default StoreLogo
