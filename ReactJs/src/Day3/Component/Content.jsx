import About from "./AboutContent";
import Contact from "./ContactContent";
import Home from "./HomeContent";
import Services from "./ServicesContent";
export default function Content({ selectedMenu }) {
  let setContent;
  switch (selectedMenu) {
    case "About":
      setContent = <About />;
      break;
    case "Services":
      setContent = <Services />;
      break;
    case "Contact":
      setContent = <Contact />;
      break;
    default:
      setContent = <Home />;
  }

  return setContent;
}
