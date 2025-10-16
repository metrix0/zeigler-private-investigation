# 📌 Zeigler Personal Investigation Website

> “A website to attract *premium customers*.”

---

## 📖 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run Locally](#run-locally)
- [To Do](#-to-do)
- [Setup](#-setup)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

- 🚀 Hero Section Video
- ⚡ Animated Second Section

---

## 🧰 Tech Stack

- **Frontend:** HTML, Tailwind CSS v4, JavaScript
- **Deployment:** Netlify
- **Extra:** Font Awesome, Vite

> *Future Additions (Blog Posts):*
> 
> - Netlify CMS.

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 20
- npm or yarn
- Git

Check versions:
```bash
node -v
npm -v
```

---

### Installation
```bash
# Clone the repo
git clone https://github.com/yourusername/project-name.git

# Enter the project directory
cd project-name

# Install dependencies
npm install
```

---

### Run Locally
```bash
npm run dev
```
Visit: <http://localhost:3000> or <http://localhost:5137>


---

## 📝 To Do
- Loading Animation
- Video
- Section 3, 4, 5...
- Hero Section Intro Animation?
- Bottom Bar
- remove img bg
- everything too big in 1366?

---

## ⚙️ Setup

```bash
npm create vite@latest zeigler-private-investigation
cd zeigler-private-investigation
npm install
npm install -D tailwindcss postcss autoprefixer
```

`tailwind.config.js`
```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

`vite.config.js`
```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [ tailwindcss() ],
})
```

`style.css`
```css
@import 'tailwindcss';
```

Add in `main.js`:
```js
import './style.css'
```

Run:
```bash
npm run dev
```

*Import src/styles.css into your index.html.

---

## 📜 License

© 2025 Zeigler Private Investigation — All rights reserved.
This project is proprietary and not open source.
---

## 📬 Contact

**John Vitor** — [johnvitor.com](https://johnvitor.com/en) — j@johnvitor.com
