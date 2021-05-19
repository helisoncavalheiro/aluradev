import nav from '../css/nav.css';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item active">
        <div className="nav-icon"><FontAwesomeIcon icon={faCode} /></div>
        Editor de código
      </li>
      <li className="nav-item">
        <div className="nav-icon"><FontAwesomeIcon icon={faCode} /></div>
        Comunidade
      </li>
    </ul>
  );
}
