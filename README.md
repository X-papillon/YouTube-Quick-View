# 🎥 YouTube Quick View — Picture-in-Picture Chrome Extension

A lightweight Chrome Extension that lets you toggle **YouTube Picture-in-Picture (PiP)** directly from the extension icon.

Perfect for podcasts, long videos, and multitasking without switching tabs.

---

## ✨ What Problem This Solves

You are working on another tab but a YouTube video is playing.

Instead of switching back and forth between tabs, simply:

> Click the extension icon → floating mini player appears
> Click again → it closes

Stay focused on your work while keeping the video visible.

---

## ⚡ Features

* 🎯 One-click toggle PiP from extension icon
* 🪟 Floating always-on-top video window
* 🔊 Perfect for podcasts and long videos
* 🧠 Uses native Chrome Picture-in-Picture API
* 🚀 Extremely lightweight and fast
* 🔒 No tracking, no data collection

---

## 📁 Project Structure

```
youtube-pip-extension/
│
├── manifest.json
├── background.js
└── content.js
└── icons/
```

---

## 🔧 Installation

1. Download or clone this repository
2. Go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the extension folder

---

## 🖥️ How to Use

1. Open any YouTube video and press Play
2. Go to another tab
3. Click the extension icon
4. The video appears in a floating window
5. Click again to close it

---

## 🧩 Permissions Used

* `activeTab` — access current YouTube tab
* `scripting` — inject PiP control script
* Access only to `youtube.com`

---

## 💡 Possible Upgrades

* Keyboard shortcut toggle
* Support for other video websites
* Icon badge when PiP is active

---

## 📜 License

MIT License
