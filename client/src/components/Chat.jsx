import React, { useEffect, useState, useRef } from 'react'
import { useSocket } from '../socket/socket'
import MessageList from './MessageList'
import UserList from './UserList'

export default function Chat({ username }) {
  const {
    socket,
    messages,
    users,
    typingUsers,
    connect,
    disconnect,
    sendMessage,
    sendPrivateMessage,
    setTyping,
  } = useSocket()

  const [text, setText] = useState('')
  const [targetUser, setTargetUser] = useState(null)
  const typingTimeout = useRef(null)

  useEffect(() => {
    connect(username)

    return () => {
      disconnect()
    }
  }, [])

  const handleSend = (e) => {
    e.preventDefault()
    if (!text) return
    if (targetUser) {
      sendPrivateMessage(targetUser.id, text)
    } else {
      sendMessage({ message: text })
    }
    setText('')
    setTyping(false)
  }

  const handleTyping = (value) => {
    setText(value)
    setTyping(true)
    if (typingTimeout.current) clearTimeout(typingTimeout.current)
    typingTimeout.current = setTimeout(() => {
      setTyping(false)
    }, 800)
  }

  const handleSelectUser = (user) => {
    if (targetUser && targetUser.id === user.id) {
      setTargetUser(null)
    } else {
      setTargetUser(user)
    }
  }

  return (
    <div className="chat-wrapper">
      <aside className="sidebar">
        <h3>Online Users</h3>
        <UserList
          users={users}
          onSelectUser={handleSelectUser}
          selected={targetUser}
        />
      </aside>

      <main className="chat-main">
        <header className="chat-header">
          <h2>{targetUser ? `Chat with ${targetUser.username}` : 'Global Chat'}</h2>
          <div className="typing-indicator">
            {typingUsers && typingUsers.length > 0 && (
              <small>{typingUsers.join(', ')} is typing...</small>
            )}
          </div>
        </header>

        <MessageList messages={messages} currentUser={socket.id} />

        <form className="message-form" onSubmit={handleSend}>
          <input
            type="text"
            placeholder={targetUser ? `Message ${targetUser.username}` : 'Type a message...'}
            value={text}
            onChange={(e) => handleTyping(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}
