import './MobileMenu.scss';

import NavElement from '../NavElement/NavElement';

import closeBtm from '../images/icon-close-menu.svg';

import iconToDo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';

const MobileMenu = ({ setShowMobileNav }) => {
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
    <div className='mobile-menu'>
      <div className='menu'>
        <div className='menu-top'>
          <img
            src={closeBtm}
            alt='menu close icon'
            onClick={() => setShowMobileNav(false)}
          />
        </div>
        <nav>
          <NavElement
            name='Features'
            subNavs={featuresSubNavs}
            mobileView={true}
          />

          <NavElement
            name='Company'
            subNavs={companySubNavs}
            mobileView={true}
          />
          <NavElement name='Careers' />
          <NavElement name='About' />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
