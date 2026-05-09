export default function MenuBar({ children, onselect }) {
  return (
    <>
      <li>
        <a
          href={`#${children}`}
          onClick={(e) => {
            e.preventDefault();
            onselect();
          }}
        >
          {children}
        </a>
      </li>
    </>
  );
}
