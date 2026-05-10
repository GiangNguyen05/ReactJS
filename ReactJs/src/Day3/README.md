# State trong ReactJS

---

## 1. State là gì?

**State** là dữ liệu nội bộ của một component. Khi state thay đổi, React tự động **re-render** component đó để cập nhật UI.

```
State thay đổi → Component re-render → UI cập nhật
```

> Khác với **props** (dữ liệu truyền từ cha → con, chỉ đọc), state là dữ liệu do chính component tự quản lý và có thể thay đổi.

---

## 2. useState — State cơ bản

### Cú pháp

```jsx
const [state, setState] = useState(initialValue);
```

- `state` — giá trị hiện tại
- `setState` — hàm để cập nhật giá trị (trigger re-render)
- `initialValue` — giá trị khởi tạo (chỉ dùng lần đầu mount)

### Ví dụ cơ bản

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### Functional update — khi cần giá trị trước đó

```jsx
// ✅ An toàn hơn trong async / batching
setCount((prev) => prev + 1);

// ⚠️ Có thể bị stale trong một số trường hợp
setCount(count + 1);
```

### Lazy initialization — khởi tạo tốn kém

```jsx
// ✅ Hàm chỉ chạy 1 lần khi mount, không chạy lại mỗi render
const [data, setData] = useState(() => expensiveComputation());
```

---

## 3. State với Object và Array

### Object

```jsx
const [user, setUser] = useState({ name: "An", age: 25 });

// ✅ Đúng — tạo object mới (immutable)
setUser({ ...user, age: 26 });
setUser((prev) => ({ ...prev, age: 26 }));

// ❌ Sai — mutate trực tiếp, không trigger re-render
user.age = 26;
setUser(user); // React không phát hiện sự thay đổi
```

### Array

```jsx
const [items, setItems] = useState(["a", "b", "c"]);

// ✅ Thêm phần tử
setItems([...items, "d"]);
setItems((prev) => [...prev, "d"]);

// ✅ Xóa phần tử
setItems(items.filter((item) => item !== "b"));

// ✅ Cập nhật phần tử
setItems(items.map((item) => (item === "a" ? "A" : item)));

// ❌ Sai — mutate trực tiếp
items.push("d");
setItems(items);
```

### Object lồng nhau

```jsx
const [state, setState] = useState({
  user: { name: "An", address: { city: "Hà Nội" } },
});

// ✅ Spread từng cấp
setState((prev) => ({
  ...prev,
  user: {
    ...prev.user,
    address: { ...prev.user.address, city: "TP.HCM" },
  },
}));

// 💡 Nếu object quá lồng nhau, dùng thư viện immer hoặc tách state
```

---

## 4. Multiple State vs Object State

```jsx
// Cách 1: nhiều useState riêng lẻ (khuyến nghị khi các giá trị độc lập)
const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [email, setEmail] = useState("");

// Cách 2: một object (khuyến nghị khi các giá trị liên quan)
const [form, setForm] = useState({ name: "", age: 0, email: "" });
const updateField = (field, value) =>
  setForm((prev) => ({ ...prev, [field]: value }));
```

---

## 5. useReducer — State phức tạp

Dùng khi có nhiều actions, logic cập nhật phức tạp, hoặc state tiếp theo phụ thuộc vào state trước.

### Cú pháp

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Ví dụ

```jsx
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action: " + action.type);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>
        Count: {state.count} | Step: {state.step}
      </p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "setStep", payload: 5 })}>
        Bước nhảy = 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
```

### useState vs useReducer

| Tiêu chí       | useState             | useReducer              |
| -------------- | -------------------- | ----------------------- |
| Số lượng state | 1–3 giá trị đơn giản | Nhiều giá trị liên quan |
| Logic cập nhật | Đơn giản             | Phức tạp, nhiều cases   |
| Khả năng test  | Khó test reducer     | Dễ unit test reducer    |
| Đọc code       | Ngắn gọn             | Rõ ràng về intent       |

---

## 6. Lifting State Up — Chia sẻ state giữa components

Khi 2 component anh em cần dùng chung state, **đưa state lên component cha**.

```jsx
// ❌ Sai — mỗi component tự giữ state, không đồng bộ nhau
function App() {
  return (
    <>
      <Input /> {/* state riêng */}
      <Display /> {/* không biết Input đang có gì */}
    </>
  );
}

// ✅ Đúng — cha giữ state, truyền xuống qua props
function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Input value={value} onChange={setValue} />
      <Display value={value} />
    </>
  );
}

function Input({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function Display({ value }) {
  return <p>Bạn đã nhập: {value}</p>;
}
```

---

## 7. State và useEffect

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false; // tránh race condition

    setLoading(true);
    setError(null);

    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    }; // cleanup khi userId đổi
  }, [userId]); // chạy lại khi userId thay đổi

  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;
  return <p>Xin chào, {user?.name}</p>;
}
```

---

## 8. Vòng đời của State

```
1. Mount     → useState(initialValue) chạy lần đầu
               ↓
2. Render    → JSX được tính toán với state hiện tại
               ↓
3. Commit    → React cập nhật DOM thực
               ↓
4. Effect    → useEffect chạy sau render
               ↓
5. Event     → User tương tác → setState() được gọi
               ↓
6. Re-render → Quay lại bước 2 với state mới
               ↓
7. Unmount   → Cleanup (return function trong useEffect)
```

---

## 9. Các quy tắc quan trọng

### Quy tắc của Hooks

```jsx
// ✅ Gọi hook ở top level của component
function MyComponent() {
  const [a, setA] = useState(0); // ✅
  const [b, setB] = useState(""); // ✅

  if (condition) {
    // ❌ Không gọi hook bên trong if
    const [c, setC] = useState(false);
  }

  for (let i = 0; i < 3; i++) {
    // ❌ Không gọi hook bên trong loop
    const [d, setD] = useState(0);
  }
}
```

### Không mutate state trực tiếp

```jsx
// ❌ Sai
const [list, setList] = useState([1, 2, 3]);
list.push(4); // mutate
setList(list); // React không re-render vì reference không đổi

// ✅ Đúng
setList([...list, 4]); // tạo array mới
```

### State update là bất đồng bộ (batching)

```jsx
function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  // ⚠️ count vẫn là giá trị cũ → chỉ tăng 1 lần

  // ✅ Dùng functional update
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  // ✅ Tăng 2 lần
}
```

### Không đọc state ngay sau khi set

```jsx
setCount(5);
console.log(count); // ⚠️ Vẫn là giá trị cũ, chưa phải 5
// state mới chỉ có hiệu lực ở render tiếp theo
```

---

## 10. Các pattern nâng cao

### Derived state — tính từ state, không lưu thêm state

```jsx
// ❌ Redundant state
const [items, setItems] = useState([]);
const [count, setCount] = useState(0); // không cần!

// ✅ Tính trực tiếp
const [items, setItems] = useState([]);
const count = items.length; // derived, tự cập nhật
```

### Custom Hook — tách logic state ra

```jsx
function useCounter(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// Dùng lại ở bất kỳ đâu
function App() {
  const { count, increment, decrement, reset } = useCounter(0, 5);
  // ...
}
```

### useContext + useState — Global state đơn giản

```jsx
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

function Button() {
  const { theme, toggle } = useContext(ThemeContext);
  return <button onClick={toggle}>Theme: {theme}</button>;
}
```

---

## 11. Khi nào dùng gì?

| Tình huống                              | Giải pháp               |
| --------------------------------------- | ----------------------- |
| 1–2 giá trị đơn giản                    | `useState`              |
| Nhiều giá trị liên quan, logic phức tạp | `useReducer`            |
| Chia sẻ giữa component anh em           | Lifting state up        |
| Chia sẻ toàn app, ít thay đổi           | `useContext + useState` |
| Chia sẻ toàn app, thay đổi thường xuyên | Zustand / Redux Toolkit |
| State từ server (fetch, cache)          | React Query / SWR       |

---

## 12. Checklist trước khi dùng State

- [ ] Dữ liệu này có **thay đổi theo thời gian** không? Nếu không → dùng biến thường hoặc constant
- [ ] Dữ liệu này có thể **tính từ props / state khác** không? Nếu có → derived state, không cần useState
- [ ] State này có cần **chia sẻ với component khác** không? Nếu có → lift up hoặc context
- [ ] Có nhiều state **liên quan nhau** không? Nếu có → gom vào một object hoặc dùng useReducer
