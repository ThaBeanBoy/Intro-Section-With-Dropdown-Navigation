import './Header.scss';

import NavElement from '../NavElement/NavElement';

import logo from '../images/logo.svg';
import burgerIcon from '../images/icon-menu.svg';

import iconToDo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';

const Header = ({ setShowMobileNav }) => {
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

      <img
        id='moblile-menu-opener'
        src={burgerIcon}
        alt='close button'
        onClick={() => setShowMobileNav(true)}
      />
    </header>
  );
};

export default Header;
