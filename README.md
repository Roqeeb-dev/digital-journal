# Digital Journal

A modern digital journal application for capturing, organizing, and exploring thoughts. Built with **Next.js**, **Tailwind CSS**, and optimized Google Fonts for a sleek, responsive experience.

---

## ⚡ Features

- Capture your daily thoughts and ideas
- Organize notes into categories
- Highlight important entries with accent colors
- Responsive design for desktop and mobile
- Semantic color system and custom typography for readability

---

## 🎨 Style Guide

### Primary Base Colors

| Role           | Color   |
| -------------- | ------- |
| Background     | #FAF9F7 |
| Surface        | #FFFFFF |
| Primary Text   | #1E1E1E |
| Secondary Text | #5F5F5F |
| Muted Text     | #8C8C8C |

### Accent Colors (Use Sparingly)

| Purpose        | Color   |
| -------------- | ------- |
| Primary Accent | #E86F2D |
| Soft Highlight | #F3E8E1 |
| Divider Lines  | #E8E6E3 |
| Highlight      | #3B82F6 |

### Typography

- **Playfair Display** – used for headings and logo
- **Inter** – used for body text and UI elements

---

## 🛠 Tech Stack

- **Next.js 13+** (App Router)
- **React** for component-based UI
- **Tailwind CSS** for utility-first styling
- **Next Font Optimization** (`next/font/google`) for Playfair Display and Inter

---

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/digital-journal.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd digital-journal
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔧 Tailwind Configuration Highlights

**Colors:** `background`, `surface`, `primaryText`, `secondaryText`, `mutedText`, `primaryAccent`, `softHighlight`, `divider`, `highlight`

**Fonts:** `font-playfair` for headings, `font-sans` for body text

**Responsive utilities** for mobile and desktop layouts

### Example Usage

```jsx
<div className="bg-background text-primaryText p-6">
  <h1 className="text-primaryAccent text-2xl font-playfair">Hello World</h1>
  <p className="text-secondaryText mt-2">
    This is a paragraph using secondary text color.
  </p>
  <hr className="border-divider my-4" />
  <span className="bg-softHighlight px-2 py-1 rounded">Highlight</span>
</div>
```

---

## 📚 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-name`
5. Submit a Pull Request

---

## 📝 License

This project is licensed under the MIT License.
