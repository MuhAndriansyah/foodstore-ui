import React from 'react'
import StoreLogo from '../StoreLogo'
import { useSelector } from 'react-redux'
import { Responsive, ButtonCircle } from 'upkit'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

function TopBar() {
  const auth = useSelector((state) => state.auth)
  console.log('User', auth.user.full_name)
  return (
    <Responsive desktop={2} justify="between" items="center">
      <div>
        <StoreLogo />
      </div>
      <div className="mr-5 text-right">
        <Link to={auth?.user ? '/account' : '/login'}>
          <div className="mr-2 inline-block text-red-600 font-bold">
            {auth?.user?.full_name}
          </div>
          <ButtonCircle icon={<FaUser />} />
        </Link>
      </div>
    </Responsive>
  )
}

export default TopBar
