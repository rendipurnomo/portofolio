import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoR from '../../assets/images/logo-r.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faBars, faClose, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'
        onClick={() => setShowNav(false)}>
            <img src={LogoR} alt="Logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan"/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" 
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" 
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" 
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/rendipurnomo/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/rendipurnomo'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCMxT8pfdX7hQYBYX4-M_vcA'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/nesting_hangat/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
    )
}

export default Sidebar;