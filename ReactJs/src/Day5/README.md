# one-two-binding-reactjs.md

# One-Way Binding vs Two-Way Binding trong ReactJS

## 1. One-Way Binding là gì?

One-way binding là cơ chế dữ liệu chỉ đi theo một chiều:

```txt id="4h0kdf"
State -> UI
```

Trong React:

- State thay đổi -> UI cập nhật
- UI không tự thay đổi state

Ví dụ:

```jsx id="l5s2ga"
function App() {
  const name = "Giang";

  return <h1>{name}</h1>;
}
```

Luồng dữ liệu:

```txt id="7s9m8x"
name -> JSX -> UI
```

---

# 2. Two-Way Binding là gì?

Two-way binding là cơ chế dữ liệu đi theo hai chiều:

```txt id="z0j2df"
State <-> UI
```

- State đổi -> UI đổi
- User nhập UI -> State đổi

Ví dụ:

```jsx id="0l3mrb"
function App() {
  const [name, setName] = useState("");

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

Luồng dữ liệu:

```txt id="1s4j9c"
State -> Input
Input -> State
```

---

# 3. React thực chất vẫn là One-Way Architecture

React không có two-way binding tự động như Angular.

React tạo cảm giác “2 chiều” bằng cách kết hợp:

```jsx id="a3n8q1"
value + onChange;
```

Ví dụ:

```jsx id="8f2kmd"
<input value={name} onChange={(e) => setName(e.target.value)} />
```

Nhưng kiến trúc thật sự của React vẫn là:

```txt id="h2t8sa"
State -> UI
```

---

# 4. Ví dụ One-Way Data Flow

```jsx id="x9a2l1"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

Luồng hoạt động:

```txt id="j8f0la"
State(count)
   ↓
UI render
   ↓
Click button
   ↓
setCount()
   ↓
State đổi
   ↓
Render lại UI
```

---

# 5. Controlled Component

Controlled Component là input được React quản lý bằng state.

Ví dụ:

```jsx id="b5f1zr"
const [text, setText] = useState("");

<input value={text} onChange={(e) => setText(e.target.value)} />;
```

Đặc điểm:

- React kiểm soát value
- State là nguồn dữ liệu chính
- UI luôn sync với state

Đây là cách React thường dùng.

---

# 6. Uncontrolled Component

Uncontrolled Component là input do browser tự quản lý.

Ví dụ:

```jsx id="d8s6kc"
const inputRef = useRef();

<input ref={inputRef} />;
```

Lấy dữ liệu:

```jsx id="g2q1ns"
inputRef.current.value;
```

Đặc điểm:

- Không dùng state
- DOM tự lưu dữ liệu
- React không kiểm soát input

---

# 7. So sánh React vs Angular

| React             | Angular              |
| ----------------- | -------------------- |
| One-way data flow | Two-way binding thật |
| Explicit          | Tự động              |
| Dễ debug          | Magic nhiều hơn      |
| Predictable       | Khó trace hơn        |
| value + onChange  | ngModel              |

Angular:

```html id="p9s4tm"
<input [(ngModel)]="name" />
```

React:

```jsx id="u7f3ra"
<input value={name} onChange={(e) => setName(e.target.value)} />
```

---

# 8. Vì sao React thích One-Way Data Flow?

## Dễ debug

Biết rõ:

```txt id="e7a4ml"
State nào -> UI nào
```

---

## Predictable

Không có cập nhật “ẩn”.

---

## Performance tốt

React kiểm soát render rõ ràng.

---

## Scale tốt

Dễ maintain ứng dụng lớn.

---

# 9. Triết lý quan trọng của React

React xem UI là kết quả của state:

```txt id="n2x5qa"
UI = f(state)
```

Khi state thay đổi:

```txt id="y0j3lm"
State đổi -> React render lại UI
```

State chính là:

```txt id="s9f2zd"
Single Source of Truth
```

---

# 10. Tóm tắt nhanh

## One-Way Binding

```txt id="r3d5la"
State -> UI
```

---

## Two-Way Binding

```txt id="v1m8ks"
State <-> UI
```

---

## React tạo Two-Way Binding bằng:

```jsx id="t5q1nb"
value + onChange;
```

---

## React Philosophy

```txt id="f7z0ra"
UI = f(state)
```
