import './MobileMenu.scss';

import NavElement from '../NavElement/NavElement';

import closeBtm from '../images/icon-close-menu.svg';

const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      <div className='menu'>
        <div className='top'>
          <img src={closeBtm} alt='menu close icon' />
        </div>
        <nav>
          <NavElement name='Features' mobileView={true} />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
