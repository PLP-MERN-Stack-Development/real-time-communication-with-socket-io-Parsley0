import React from 'react'

export default function MessageList({ messages = [], currentUser }) {
  return (
    <div className="message-list">
      {messages.map((m) => (
        <div
          key={m.id}
          className={`message ${m.isPrivate ? 'private' : ''} ${m.senderId === currentUser ? 'mine' : ''}`}
        >
          {m.system ? (
            <div className="system">{m.message}</div>
          ) : (
            <>
              <div className="meta">
                <strong>{m.sender}</strong>
                <span className="time">{new Date(m.timestamp).toLocaleTimeString()}</span>
                {m.isPrivate && <span className="badge">Private</span>}
              </div>
              <div className="body">{m.message}</div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
