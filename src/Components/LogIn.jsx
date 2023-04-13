import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const fakeApi = 'http://localhost:5000/users'

const Login = () => {
  const navigate = useNavigate()

  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const inputValue = (e) => {
    setUserInput(
      {
        // helps to see the real state of inputs
        ...userInput,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userInput.email || !userInput.password) {
      alert('Complete the information please')
    }

    axios.get(fakeApi,
      JSON.stringify({ email: userInput.email, password: userInput.password }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
    )
      .then(res => {
        console.log(res.data.find(element => element.email === userInput.email))
        if (!res.error) {
          navigate('/Menu')
        }
        console.log(res.data)
      })
      .catch((error) => {
        if (!error?.response) { setError('No server response :(') }
      })
  }
  /* fakeApi.then((response) => { console.log(response.data) }) */

  // Form log in
  return (
    <section className="login_container main">
      <div className="row">
        <div className="col-md-6 side-image">
        </div>
        <div className="col-md-6 right">
          <div className="input-box">
            <header>Log In</header>
            <form className="form_login" onSubmit={handleSubmit}>
              <input
              type="text"
              placeholder="email"
              className="input_login"
              name='email'
              onChange={inputValue}
              value={userInput.email}
              required />
              <input
              type="password"
              placeholder="password"
              className="input_login"
              name='password'
              onChange={inputValue}
              value={userInput.password}
              required />
              {error && <small>{error}</small>}
              <button>Log in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login
