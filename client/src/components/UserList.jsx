import React from 'react'

export default function UserList({ users = [], onSelectUser, selected }) {
  return (
    <ul className="user-list">
      {users.map((u) => (
        <li
          key={u.id}
          className={selected && selected.id === u.id ? 'selected' : ''}
          onClick={() => onSelectUser(u)}
        >
          <span className="username">{u.username}</span>
        </li>
      ))}
    </ul>
  )
}
