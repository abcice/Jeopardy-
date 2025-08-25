# Jeopardy Game Web App

An interactive Jeopardy-style game built with **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.io**. Designed for instructors to create, manage, and run real-time competitions with multiple teams.

---

## Features

- **Instructor dashboard:** Create, edit, and reuse jeopardy games.
- **Categories and questions:** Assign points, mark daily doubles, and edit old questions.
- **Team participation:** Teams join via a link without an account.
- **Real-time gameplay:** First-come-first-serve buzz system, score tracking, skip/correct/wrong buttons.
- **Interactive table:** Clickable question scores, questions shown on selection.
- **Code support:** Questions can include formatted code snippets.
- **Dynamic scoreboard:** Updates in real-time, displays ranking at the end.
- **Responsive design:** Works on large classroom screens and standard devices.

---

## Tech Stack

- **Frontend:** React, TailwindCSS/Material-UI, React Router
- **Backend:** Node.js, Express, Socket.io
- **Database:** MongoDB (via Mongoose)
- **Realtime:** Socket.io for team buzz and score synchronization

---

## Setup

### Backend
```bash
cd backend
npm install
# create .env with MONGO_URI
node server.js
