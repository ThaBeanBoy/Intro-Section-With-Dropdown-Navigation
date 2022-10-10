import { useState } from 'react';
import './App.scss';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import MobileMenu from './MobileMenu/MobileMenu';

function App() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className='App'>
      <Header setShowMobileNav={setShowMobileNav} />

      <Landing />

      {showMobileNav ? (
        <MobileMenu setShowMobileNav={setShowMobileNav} />
      ) : (
        <></>
      )}

      <div className='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://www.frontendmentor.io/profile/ThaBeanBoy'>
          @ThaBeanBoy
        </a>
        .
      </div>
    </div>
  );
}

export default App;
