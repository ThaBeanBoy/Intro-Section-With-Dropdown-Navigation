import './Landing.scss';

import hero from '../images/image-hero-desktop.png';
import heroMobile from '../images/image-hero-mobile.png';

// clients' logos
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';

const Landing = () => {
  return (
    <section className='Landing'>
      <img src={heroMobile} id='hero-mobile' alt='hero' />
      <main>
        <h1>Make remote work</h1>

        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button>Learn more</button>

        <div className='clients'>
          <img src={databiz} alt='databiz logo' />
          <img src={audiophile} alt='databiz logo' />
          <img src={meet} alt='databiz logo' />
          <img src={maker} alt='databiz logo' />
        </div>
      </main>
      <img src={hero} id='hero-desktop' alt='hero' />
    </section>
  );
};

export default Landing;
