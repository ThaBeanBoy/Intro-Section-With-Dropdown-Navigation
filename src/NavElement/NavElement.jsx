import { useState } from 'react';

import './NavElement.scss';

import arrowDown from '../images/icon-arrow-down.svg';
import arrowUp from '../images/icon-arrow-up.svg';

const NavElement = ({ name, subNavs, mobileView }) => {
  // Setting default value for prop mobileView
  mobileView = mobileView !== undefined ? mobileView : false;

  const [showSubNav, setShowSubNav] = useState(false);

  const subNavsAvailable = subNavs !== undefined && subNavs.length >= 1;

  const className = `nav-element ${mobileView ? 'mobile' : ''}`;
  return (
    <span
      className={className}
      onMouseEnter={() => (!mobileView ? setShowSubNav(true) : {})}
      onMouseLeave={() => (!mobileView ? setShowSubNav(false) : {})}
    >
      <div
        className='top'
        onClick={() =>
          mobileView
            ? showSubNav
              ? setShowSubNav(false)
              : setShowSubNav(true)
            : {}
        }
      >
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
            onMouseEnter={() => (!mobileView ? setShowSubNav(true) : {})}
            onMouseLeave={() => (!mobileView ? setShowSubNav(false) : {})}
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

export default NavElement;
