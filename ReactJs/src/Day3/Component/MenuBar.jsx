export default function MenuBar({ children, onselect, isSelected }) {
  return (
    <>
      <li>
        <a
          className={isSelected ? "active-menu" : undefined}
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
