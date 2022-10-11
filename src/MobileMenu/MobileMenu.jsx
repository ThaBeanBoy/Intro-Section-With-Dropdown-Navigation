import { motion } from 'framer-motion';

import './MobileMenu.scss';

import NavElement from '../NavElement/NavElement';

import closeBtm from '../images/icon-close-menu.svg';

import iconToDo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminders from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';

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

const MobileMenu = ({ setShowMobileNav, isShowing }) => {
  return (
    <motion.div
      className='mobile-menu'
      animate={{ width: isShowing ? '100vw' : 0 }}
      transition={{ type: 'just', duration: 0.5 }}
    >
      <motion.div className='menu'>
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
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
