# Socket.io Real-Time Chat Application

A fully functional real-time chat application built with Express, Socket.io, and React, demonstrating bidirectional communication with features like global chat, private messaging, typing indicators, and online user status.

## ✨ Features Implemented

### Core Features (Task 1-2) ✅
- **Express + Socket.io Server** - RESTful API with WebSocket support
- **React + Vite Client** - Modern, fast development environment
- **Global Chat** - Real-time messaging broadcast to all connected users
- **Username Authentication** - Simple username-based login system
- **Online User List** - Live display of connected users
- **Join/Leave Notifications** - System messages when users join or leave
- **Typing Indicators** - Real-time "user is typing..." display

### Advanced Features (Task 3) ✅
- **Private Messaging** - One-on-one direct messages between users
- **Message Metadata** - Sender name, timestamp, and message type (global/private)
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Auto-reconnection** - 5 reconnection attempts with 1-second delay

## 🛠️ Tech Stack

- **Backend:** Node.js, Express 4.18, Socket.io 4.7, CORS, dotenv
- **Frontend:** React 18, Vite 4.4, Socket.io-client 4.7
- **Protocol:** WebSocket (via Socket.io)
- **Runtime:** Node.js v18+

## 📦 Project Structure

```
real-time-communication-with-socket-io-Parsley0/
├── server/
│   ├── server.js                  # Main Express + Socket.io server
│   ├── package.json               # Server dependencies
│   └── .env (optional)            # Environment variables
├── client/
│   ├── src/
│   │   ├── App.jsx                # Main app component (login/chat switch)
│   │   ├── main.jsx               # React entry point
│   │   ├── styles.css             # Global styles
│   │   ├── socket/
│   │   │   └── socket.js          # Socket.io client hook & setup
│   │   └── components/
│   │       ├── Login.jsx          # Username login form
│   │       ├── Chat.jsx           # Main chat interface
│   │       ├── MessageList.jsx    # Message rendering
│   │       └── UserList.jsx       # Online users display
│   ├── index.html                 # HTML template
│   ├── vite.config.js             # Vite configuration
│   ├── package.json               # Client dependencies
│   └── .env.local (optional)      # Environment variables
├── Week5-Assignment.md            # Assignment details
└── README.md                       # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ installed
- npm or yarn package manager

### Installation & Running

**1. Install and start the server:**
```bash
cd server
npm install
npm run dev
```
Server runs on `http://localhost:5000`

**2. In a new terminal, install and start the client:**
```bash
cd client
npm install
npm run dev
```
Client runs on `http://localhost:5173`

**3. Open your browser:**
Navigate to `http://localhost:5173`, enter a username, and start chatting!

## 🔧 Configuration

### Server (.env)
```
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Client (.env.local)
```
VITE_SOCKET_URL=http://localhost:5000
```

## 📡 Socket.io Events Reference

### Sent from Client → Server
| Event | Payload | Description |
|-------|---------|-------------|
| `user_join` | `username: string` | Register user with chat |
| `send_message` | `{ message: string }` | Broadcast message to all users |
| `private_message` | `{ to: string, message: string }` | Send private message to user |
| `typing` | `isTyping: boolean` | Notify others of typing status |

### Received from Server → Client
| Event | Payload | Description |
|-------|---------|-------------|
| `user_list` | `users: Array` | List of all connected users |
| `user_joined` | `{ username, id }` | User joined the chat |
| `user_left` | `{ username, id }` | User left the chat |
| `receive_message` | `message: Object` | Global message received |
| `private_message` | `message: Object` | Private message received |
| `typing_users` | `users: Array` | List of users currently typing |

## 💬 How to Use

1. **Join Chat:** Enter username and click "Join Chat"
2. **Send Global Message:** Type in message box and click Send
3. **Send Private Message:** Click a username in the sidebar, then type and send
4. **See Typing:** Watch for "user is typing..." indicator while composing
5. **View Users:** Online users list always visible in sidebar

## 📊 Performance Optimizations

- ✅ Message limit (max 100 stored) to prevent memory bloat
- ✅ Typing debounce (800ms) to reduce event flooding
- ✅ Auto-reconnection with exponential backoff
- ✅ Proper CORS configuration
- ✅ Efficient Socket.io namespace usage

## 🎯 Task Completion Status

| Task | Status | Details |
|------|--------|---------|
| **Task 1: Project Setup** | ✅ Complete | Express server, React client, Socket.io configured |
| **Task 2: Core Chat** | ✅ Complete | Global chat, auth, typing, online status |
| **Task 3: Advanced Features** | ✅ Complete | Private messaging, timestamps, system notifications |
| **Task 4: Notifications** | ⚙️ Partial | Join/leave notifications implemented |
| **Task 5: UX Optimization** | ⚙️ Partial | Reconnection & responsive design implemented |

## 🔮 Future Enhancements

- [ ] Message persistence (MongoDB/SQLite)
- [ ] Message reactions (emoji reactions)
- [ ] Read receipts
- [ ] Browser notifications (Web Notifications API)
- [ ] Sound notifications for new messages
- [ ] File/image sharing
- [ ] Message search functionality
- [ ] Multiple chat rooms/channels
- [ ] Message pagination/infinite scroll
- [ ] JWT-based authentication
- [ ] User profiles and avatars
- [ ] Message editing/deletion

## 🐛 Troubleshooting

**Client can't connect:**
- Verify server is running on `http://localhost:5000`
- Check `VITE_SOCKET_URL` is set correctly
- Check browser console for errors

**Module not found errors:**
```bash
# Reinstall dependencies
rm -r node_modules package-lock.json
npm install
```

**Port already in use:**
```bash
# Find and kill process using port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

## 📝 Assignment Submission

This project fulfills the Week 5 Socket.io assignment requirements:
- ✅ Real-time bidirectional communication
- ✅ User authentication (username-based)
- ✅ Live messaging with timestamps
- ✅ Online status updates
- ✅ Typing indicators
- ✅ Private messaging (advanced feature)
- ✅ Responsive design
- ✅ Proper error handling and reconnection logic

## 📄 License

MIT
  - Socket.io configuration templates
  - Sample components for the chat interface

## Requirements

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser
- Basic understanding of React and Express

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement the core chat functionality
3. Add at least 3 advanced features
4. Document your setup process and features in the README.md
5. Include screenshots or GIFs of your working application
6. Optional: Deploy your application and add the URLs to your README.md

## Resources

- [Socket.io Documentation](https://socket.io/docs/v4/)
- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [Building a Chat Application with Socket.io](https://socket.io/get-started/chat) 