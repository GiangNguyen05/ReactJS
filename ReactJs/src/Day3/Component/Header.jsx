import { useState } from "react";
import "../Style/header-menu.css";
import Noti from "./Practice/Noti.jsx";
import MenuBar from "./MenuBar";
// import Content from "./Content";
import ContentAll from "./ContentAll.jsx";

function Header() {
  const [selectedMenu, setSelectedMenu] = useState();
  const option = ["Home", "About", "Services", "Contact"];
  return (
    <>
      <header className="header-menu">
        <h1 className="logo">G RWeb</h1>
        {/* prettier-ignore */}
        <ul className="navBar">
          {option.map((item)=>{
            return(
            <MenuBar
            key = {item}
            children={item}
            onselect={() => {
              setSelectedMenu(item);
            }}
          />)
          })}
         
        </ul>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      {/* <Content selectedMenu={selectedMenu} /> */}
      <div className="header-content">
        <ContentAll selectedMenu={selectedMenu} />
        <Noti />
      </div>
    </>
  );
}

export default Header;
