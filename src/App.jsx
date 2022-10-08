import './App.scss';
import Header from './Header/Header';

function App() {
  return (
    <>
      {/* Features Company Careers About Login Register Make remote work Get your
      team in sync, no matter your location. Streamline processes, create team
      rituals, and watch productivity soar. Learn more */}
      <Header />

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
    </>
  );
}

export default App;
