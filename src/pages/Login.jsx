import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { setAuthState } from '../redux/feature/authSlice'

export default function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogin = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      dispatch(setAuthState({isLoggedIn: true, user: {name: username}}))
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('user', JSON.stringify({name: username}))
        navigate('/')
    }else{
      alert('username atau password salah')
    }

  }

  return (
    <div className='container'>
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit' className="btn btn-primary">Login</button>
        </form>
    </div>
  )
}
