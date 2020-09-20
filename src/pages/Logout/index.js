import React from 'react'
import { useHistory } from 'react-router-dom'
import { LayoutOne } from 'upkit'
import { useDispatch } from 'react-redux'
import BounceLoader from 'react-spinners/BounceLoader'
import { userLogout } from '../../features/Auth/actions'
import { logout } from '../../api/auth'

function Logout() {
  const history = useHistory()
  const dispatch = useDispatch()

  React.useEffect(() => {
    logout()
      .then(() => dispatch(userLogout()))
      .then(() => history.push('/'))
  }, [history, dispatch])

  return (
    <LayoutOne size="small">
      <div className="text-center flex flex-col justify-center itemscenter">
        <BounceLoader color="red" />
        <br />
        Logging out ...
      </div>
    </LayoutOne>
  )
}

export default Logout
