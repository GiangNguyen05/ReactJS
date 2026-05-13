# CSS Trong React

## Giới thiệu

Trong React, CSS có nhiều cách sử dụng khác nhau.  
Mỗi cách có ưu điểm, nhược điểm và phù hợp với từng loại project.

Các cách phổ biến gồm:

1. CSS thường
2. CSS Module
3. Inline Style
4. Styled Components
5. Tailwind CSS
6. SCSS / Sass

---

# 1. CSS Thường (Traditional CSS)

## App.css

```css
.container {
  padding: 20px;
  background: black;
  color: white;
}
```

## App.jsx

```jsx
import "./App.css";

function App() {
  return <div className="container">Hello React</div>;
}

export default App;
```

## Ưu điểm

- Dễ học
- Đơn giản
- Giống HTML/CSS truyền thống
- Phù hợp project nhỏ

## Nhược điểm

- CSS global
- Dễ bị trùng class
- Khó maintain project lớn

---

# 2. CSS Module

CSS chỉ hoạt động trong component hiện tại.

## Button.module.css

```css
.button {
  background: blue;
  color: white;
  padding: 12px 20px;
}
```

## Button.jsx

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.button}>Click</button>;
}

export default Button;
```

## Ưu điểm

- Không trùng class
- Scoped CSS
- Maintain tốt
- Dễ scale project

## Nhược điểm

- Tên class debug hơi dài

---

# 3. Inline Style

CSS viết trực tiếp bằng object JavaScript.

## Ví dụ

```jsx
function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
      }}
    >
      Hello React
    </div>
  );
}
```

---

## Quy tắc

### Dùng camelCase

```jsx
background-color ❌
backgroundColor ✅
```

---

## Ưu điểm

- Dynamic styling mạnh
- Nhanh
- Không cần file CSS

## Nhược điểm

- Khó maintain
- Không hỗ trợ:
  - :hover
  - ::before
  - media query

---

# 4. Styled Components

CSS-in-JS.

## Cài đặt

```bash
npm install styled-components
```

---

## Ví dụ

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
`;

function App() {
  return <Button>Click</Button>;
}

export default App;
```

---

## Ưu điểm

- Component hóa CSS
- Dynamic style mạnh
- Scoped CSS
- Code sạch

## Nhược điểm

- Runtime CSS
- Thêm dependency

---

# 5. Tailwind CSS

Utility-first CSS framework.

## Cài đặt

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## Ví dụ

```jsx
function App() {
  return <div className="bg-black text-white p-5 rounded-xl">Hello React</div>;
}
```

---

## Responsive

```jsx
<div className="text-sm md:text-lg lg:text-2xl">Responsive Text</div>
```

---

## Ưu điểm

- Code rất nhanh
- Responsive mạnh
- Không cần viết nhiều CSS
- Rất phổ biến hiện nay

## Nhược điểm

- JSX dài
- Ban đầu hơi khó đọc

---

# 6. Sass / SCSS

CSS nâng cao.

## Cài đặt

```bash
npm install sass
```

---

## App.scss

```scss
$primary: blue;

.container {
  background: $primary;
  padding: 20px;

  .title {
    color: white;
    font-size: 32px;
  }
}
```

---

## Import

```jsx
import "./App.scss";
```

---

## Ưu điểm

- Variables
- Nested CSS
- Mixins
- CSS chuyên nghiệp hơn

## Nhược điểm

- Cần compile

---

# So Sánh Các Cách Dùng CSS

| Cách              | Scoped | Dynamic | Responsive | Dễ học |
| ----------------- | ------ | ------- | ---------- | ------ |
| CSS thường        | ❌     | ❌      | ⚠️         | ✅     |
| CSS Module        | ✅     | ❌      | ⚠️         | ✅     |
| Inline Style      | ✅     | ✅      | ❌         | ✅     |
| Styled Components | ✅     | ✅      | ⚠️         | ⚠️     |
| Tailwind          | ✅     | ⚠️      | ✅         | ⚠️     |
| SCSS              | ❌     | ❌      | ⚠️         | ✅     |

---

# Cấu Trúc Folder React CSS

```txt
src/
│
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.module.css
│
├── pages/
│
├── layouts/
│
├── styles/
│   ├── global.css
│   ├── variables.scss
│   └── reset.css
│
└── App.jsx
```

---

# Best Practice React CSS

# 1. Mobile First

```css
.container {
  font-size: 14px;
}

@media (min-width: 768px) {
  .container {
    font-size: 18px;
  }
}
```

---

# 2. Reusable Component

```jsx
function Button({ children, className }) {
  return <button className={`btn ${className}`}>{children}</button>;
}
```

---

# 3. Naming Convention

```css
.card {
}
.cardTitle {
}
.cardButton {
}
```

---

# 4. Tách Component Nhỏ

❌ Không tốt

```jsx
function App() {
  return (
    <div>
      <header>...</header>
      <section>...</section>
      <footer>...</footer>
    </div>
  );
}
```

---

✅ Tốt hơn

```jsx
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
```

---

# 5. Global CSS Chỉ Dùng Cho

- Reset CSS
- Font
- Variables
- Base styles

Ví dụ:

```css
body {
  margin: 0;
  font-family: sans-serif;
}
```

---

# Responsive Trong React

## CSS thường

```css
.container {
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 32px;
  }
}
```

---

## Tailwind

```jsx
<div className="p-4 md:p-8 lg:p-12">Responsive Box</div>
```

---

# Khi Nào Nên Dùng?

| Tình huống             | Giải pháp         |
| ---------------------- | ----------------- |
| Người mới học React    | CSS thường        |
| Project vừa            | CSS Module        |
| Startup / Landing Page | Tailwind          |
| Enterprise lớn         | SCSS + CSS Module |
| Design System          | Styled Components |

---

# Xu Hướng Hiện Nay

## Startup

- Tailwind CSS
- Shadcn UI
- Framer Motion

---

## Enterprise

- SCSS
- CSS Module

---

## Design System

- Styled Components
- Emotion

---

# Stack React Frontend Phổ Biến

## Modern Stack

```txt
React
Vite
Tailwind CSS
React Router
Axios
Framer Motion
```

---

# React + Tailwind Folder Structure

```txt
src/
│
├── components/
├── pages/
├── layouts/
├── hooks/
├── services/
├── utils/
├── assets/
└── App.jsx
```

---

# Kết Luận

## Người mới

Nên học theo thứ tự:

1. CSS thường
2. CSS Module
3. SCSS
4. Tailwind
5. Styled Components

---

## Gợi ý thực tế

| Mục tiêu               | Nên học           |
| ---------------------- | ----------------- |
| Làm landing page nhanh | Tailwind          |
| Làm dashboard          | Tailwind + SCSS   |
| Làm project lớn        | CSS Module + SCSS |
| Làm UI library         | Styled Components |

---

# Tổng Kết

- CSS thường → đơn giản
- CSS Module → scoped CSS
- Inline Style → dynamic
- Styled Components → CSS-in-JS
- Tailwind → code nhanh
- SCSS → CSS nâng cao

Hiện nay:

- Tailwind rất phổ biến
- CSS Module vẫn ổn định
- SCSS mạnh trong enterprise
- Styled Components phù hợp design system
