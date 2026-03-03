# 📺 RemoteWave

[![CI Build & Coverage](https://github.com/MarcosOliveir4/remoteWave/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/MarcosOliveir4/remoteWave/actions/workflows/ci.yml)
[![Maintainability](https://qlty.sh/badges/fe033515-67e7-476e-a61a-07b9d861ec68/maintainability.svg)](https://qlty.sh/gh/MarcosOliveir4/projects/remoteWave)
[![Code Coverage](https://qlty.sh/badges/fe033515-67e7-476e-a61a-07b9d861ec68/coverage.svg)](https://qlty.sh/gh/MarcosOliveir4/projects/remoteWave)

Smart TV controller built with Next.js using WebSocket real-time communication.

RemoteWave is a modern web application that allows users to control Samsung Smart TVs directly through their local network using WebSocket protocol.

---

## 🚀 Tech Stack

- ⚡ Next.js 15
- 🟦 TypeScript
- 🎨 TailwindCSS
- 🔌 WebSocket API (Samsung Remote Protocol)
- 🧪 Vitest
- 🧹 ESLint + Prettier
- 🪝 Husky + lint-staged

---

## 🎯 Features (MVP)

- 🔌 Connect to Samsung TV via IP
- 📺 Remote control interface
- 🔊 Volume control
- 🎛 Navigation controls
- 🔁 Auto-reconnect
- 🌙 Dark mode
- 💾 Persist last connected TV
- 📜 Command history log

---

## 📡 How It Works

The app connects to your Samsung Smart TV using:

Commands are sent using Samsung's remote control protocol.

---

## ⚠️ Requirements

- Samsung Smart TV (Tizen OS)
- TV connected to the same WiFi network
- TV remote permissions enabled

---

## 📄 License

MIT
