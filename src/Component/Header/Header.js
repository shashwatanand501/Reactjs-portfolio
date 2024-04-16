import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faCertificate, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

function Header() {
  return (
    <div className='Header_container'>
      <section className='Nav_container'>
        <ul className='Nav_link'>
          <li><Link to="/" className="nav-link"><FontAwesomeIcon icon={faHome} /><br/>Home</Link></li>
          <li><Link to="/project" className="nav-link"><FontAwesomeIcon icon={faProjectDiagram} /> <br/>Project</Link></li>
          <li><Link to="/certificate" className="nav-link"><FontAwesomeIcon icon={faCertificate} /> <br/>Certificate</Link></li>
          <li><Link to="/contactus" className="nav-link"><FontAwesomeIcon icon={faAddressCard} /> <br/>Contact</Link></li>
        </ul>
      </section>
    </div>
  );
}

export default Header;
