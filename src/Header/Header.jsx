import { useState } from 'react';

import './Header.scss';

import logo from '../images/logo.svg';
import burgerIcon from '../images/icon-menu.svg';

import arrowDown from '../images/icon-arrow-down.svg';
import arrowUp from '../images/icon-arrow-up.svg';

import iconToDo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';

const NavElement = ({ name, subNavs }) => {
  const [showSubNav, setShowSubNav] = useState(false);

  const subNavsAvailable = subNavs !== undefined && subNavs.length >= 1;

  return (
    <span
      className='nav-element'
      onMouseEnter={() => setShowSubNav(true)}
      onMouseLeave={() => setShowSubNav(false)}
    >
      <div className='top'>
        <span className='nav-element-name'>{name}</span>
        {subNavsAvailable ? (
          <img src={showSubNav ? arrowUp : arrowDown} alt='arrow down' />
        ) : (
          <></>
        )}
      </div>

      {subNavsAvailable && showSubNav ? (
        <>
          <div className='dummy-padding' />
          <ul
            className='sub-navs'
            onMouseEnter={() => setShowSubNav(true)}
            onMouseLeave={() => setShowSubNav(false)}
          >
            {subNavs.map(({ name, imgPath, imgAlt }) => (
              <li>
                {imgPath !== undefined ? (
                  <img src={imgPath} alt={imgAlt} />
                ) : (
                  <></>
                )}
                <span className='sub-nav-name'>{name}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </span>
  );
};

const Header = () => {
  const featuresSubNavs = [
    {
      name: 'To Do List',
      imgPath: iconToDo,
      imgAlt: 'todo icon',
    },
    {
      name: 'Calendar',
      imgPath: calendar,
      imgAlt: 'calendar icon',
    },
    {
      name: 'Reminders',
      imgPath: reminders,
      imgAlt: 'reminders icon',
    },
    {
      name: 'Planning',
      imgPath: planning,
      imgAlt: 'planning icon',
    },
  ];

  const companySubNavs = [
    { name: 'History' },
    { name: 'Our Team' },
    { name: 'Blog' },
  ];

  return (
    <header>
      <div className='left'>
        <img src={logo} alt='logo' />
        <nav>
          <NavElement name='Features' subNavs={featuresSubNavs} />
          <NavElement name='Company' subNavs={companySubNavs} />
          <NavElement name='Careers' />
          <NavElement name='About' />
        </nav>
      </div>

      <div className='user-entry'>
        <NavElement name='Login' />
        <NavElement name='Register' />
      </div>

      <img id='moblile-menu-opener' src={burgerIcon} alt='close button' />
    </header>
  );
};

export default Header;
