import { useState } from 'react';
import { motion } from 'framer-motion';

import './NavElement.scss';

import arrowDown from '../images/icon-arrow-down.svg';
import arrowUp from '../images/icon-arrow-up.svg';

const NavElement = ({ name, subNavs, mobileView }) => {
  // Setting default value for prop mobileView
  mobileView = mobileView !== undefined ? mobileView : false;

  const [showSubNav, setShowSubNav] = useState(false);
  const animationProps = {
    height: showSubNav ? 'auto' : 0,
    paddingTop: showSubNav ? 24 : 0,
    paddingBottom: showSubNav ? 24 : 0,
    marginTop: showSubNav ? 24 : 0,
  };

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

      {subNavsAvailable ? (
        <>
          <div className='dummy-padding' />
          <motion.ul
            animate={{ ...animationProps }}
            transition={{ type: 'just', duration: 0.5 }}
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
          </motion.ul>
        </>
      ) : (
        <></>
      )}
    </span>
  );
};

export default NavElement;
