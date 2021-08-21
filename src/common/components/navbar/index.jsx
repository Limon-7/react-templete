import React from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa"

import "./navbar.scss"

export const links = [
	{
	  id: 1,
	  url: '/',
	  text: 'home',
	},
	{
	  id: 2,
	  url: '/about',
	  text: 'about',
	},
	{
	  id: 3,
	  url: '/projects',
	  text: 'projects',
	},
	{
	  id: 4,
	  url: '/contact',
	  text: 'contact',
	},
	{
	  id: 5,
	  url: '/profile',
	  text: 'profile',
	},
  ];
function Navbar() {
	const [showLinks, setShowLinks] = React.useState(false);
	const linksContainerRef = React.useRef(null);
	const linksRef = React.useRef(null);
	const toggleLinks = () => {
	  setShowLinks(!showLinks);
	};
	React.useEffect(() => {
	  const linksHeight = linksRef.current.getBoundingClientRect().height;
	  if (showLinks) {
		linksContainerRef.current.style.height = `${linksHeight}px`;
	  } else {
		linksContainerRef.current.style.height = '0px';
	  }
	}, [showLinks]);
	return (
	  <nav className="navbar-public">
		 <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='logo' alt='logo' /> */}
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <NavLink to={url} activeClassName="selected">{text}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
		</div>
	  </nav>
	);
}

export default Navbar;
