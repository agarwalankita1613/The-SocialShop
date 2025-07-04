
# 🛍️ The SocialShop

**The SocialShop** is a next-gen web application that seamlessly merges **social media features** with **e-commerce capabilities**. Designed for modern users, it brings together the thrill of social interaction with the ease of online shopping — all in one smooth interface.

## 🚀 Features

- 🌐 **Landing Page** with intuitive design  
- 🛒 **Cart & Product Pages** for shopping experience  
- 🧑‍🤝‍🧑 **Social Media Features**:
  - Stories, Reels, and Explore pages  
  - Direct Messaging  
  - Real-time Notifications  
- 👤 **User Profiles**  
- 📱 **Responsive Bottom Navigation** for mobile-first UX  
- ⚡ Built using **React + TypeScript + TailwindCSS + Vite**

---

## 🧱 Project Structure

```
agarwalankita1613-the-socialshop/
├── public/                 # Static assets (optional if added)
├── src/
│   ├── App.tsx            # Root component
│   ├── index.css          # Global styles (Tailwind)
│   ├── main.tsx           # App entry point
│   ├── vite-env.d.ts      # TypeScript env types
│   ├── components/        # UI components
│   │   ├── BottomNav.tsx
│   │   ├── CreateStory.tsx
│   │   ├── DirectMessages.tsx
│   │   ├── Notifications.tsx
│   │   ├── ReelsView.tsx
│   │   └── Stories.tsx
│   ├── pages/             # Core pages
│   │   ├── CartPage.tsx
│   │   ├── ExplorePage.tsx
│   │   ├── LandingPage.tsx
│   │   ├── ProductPage.tsx
│   │   └── ProfilePage.tsx
│   └── store/
│       └── useStore.ts    # Global state management (Zustand / Context)
├── eslint.config.js       # Linting configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies & scripts
├── postcss.config.js      # PostCSS config
├── tailwind.config.js     # TailwindCSS customization
├── tsconfig*.json         # TypeScript configurations
└── vite.config.ts         # Vite bundler config
```

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **State Management:** Zustand / Context API
- **Linting:** ESLint

---

## 📦 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/agarwalankita1613/the-socialshop.git
cd agarwalankita1613-the-socialshop
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the App

```bash
npm run dev
# or
yarn dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 👨‍💻 Author

**Ankita Agarwal**    
[GitHub](https://github.com/agarwalankita1613)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
