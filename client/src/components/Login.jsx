import React, { useState } from 'react'
import { socket } from '../socket/socket'

export default function Login({ onLogin }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    onLogin(name)
    socket.auth = { username: name }
    socket.connect()
    socket.emit('user_join', name)
  }

  return (
    <div className="login-container">
      <h2>Welcome to Socket Chat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Join Chat</button>
      </form>
    </div>
  )
}
