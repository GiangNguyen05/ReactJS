import { useState } from "react";
import "../Style/header-menu.css";
import MenuBar from "./MenuBar";
import Content from "./Content";
function Header() {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  return (
    <>
      <header className="header-menu">
        <h1 className="logo">G RWeb</h1>
        {/* prettier-ignore */}
        <ul className="navBar">
          <MenuBar
            children="Home"
            onselect={() => {
              setSelectedMenu("Home");
            }}
          />
          <MenuBar
            children="About"
            onselect={() => {
              setSelectedMenu("About");
            }}
          />
          <MenuBar
            children="Services"
            onselect={() => {
              setSelectedMenu("Services");
            }}
          />
          <MenuBar
            children="Contact"
            onselect={() => {
              setSelectedMenu("Contact");
            }}
          />
        </ul>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      <Content selectedMenu={selectedMenu} />
    </>
  );
}

export default Header;
