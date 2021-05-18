import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={logo} className="img-responsive" alt="Logo"></img>
        </div>
        <div className="search">
          <input className="search-bar" placeholder="Busque por algo" />
        </div>
        <div className="menu-icon">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </div>
      </header>
    </div>
  );
};

export default Header;
