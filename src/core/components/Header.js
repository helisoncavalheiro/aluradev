import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import profile from '../../assets/img/profile.jpg';
import header from '../../css/header.css';

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

        <div className="toolbar">
          <div className="toolbar-icon search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="toolbar-icon menu-icon">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </div>
        </div>

        <div className="profile">
            <img src={profile} className="profile-image img-responsive"/>
            <span className="profile-name">Harry</span>
          </div>
      </header>
    </div>
  );
};

export default Header;
