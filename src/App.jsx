import './App.scss';
import Header from './Header/Header';
import Landing from './Landing/Landing';

function App() {
  return (
    <div className='App'>
      <Header />

      <Landing />

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
