import React, { useState, useEffect } from 'react'
import { useSocket } from './socket/socket'
import Login from './components/Login'
import Chat from './components/Chat'

export default function App() {
  const { isConnected } = useSocket()
  const [username, setUsername] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    // If socket reconnects, nothing else needed here for now
  }, [isConnected])

  return (
    <div className="app-container">
      {!loggedIn ? (
        <Login onLogin={(name) => { setUsername(name); setLoggedIn(true) }} />
      ) : (
        <Chat username={username} />
      )}
    </div>
  )
}
