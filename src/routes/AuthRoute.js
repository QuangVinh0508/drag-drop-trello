import React from 'react'
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// redux
import { setUser } from '../state/appSlice';

function AuthRoute({ children }) {
  const dispatch = useDispatch();
  const accessToken = window.sessionStorage.getItem('accessToken') || '';

  // verify authenticate
  React.useEffect(() => {
    if(!accessToken) return;

    fetch('http://localhost:3005/api/users/verify', {
      method: 'POST',
      headers: {
        'x-auth-token': accessToken,
      }
    })
    .then(res => res.json())
    .then(data => {
      if(!data.isSuccess) {
        window.sessionStorage.removeItem('accessToken');
        <Navigate to="/login" />
        return;
      }
      dispatch(setUser(data.user.user))
    })

  }, [accessToken, dispatch])

  if(!accessToken) {
    return <Navigate to="/login" />
  }

  return (
    <>
      {children}
    </>
  )
}

export default AuthRoute