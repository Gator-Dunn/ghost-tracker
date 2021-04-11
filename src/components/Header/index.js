import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Header.css';

const HeaderLink = ({ label, match, to }) => {
  const routeMatch = useRouteMatch({
    path: match || to,
  });

  return (
    <span
      className={routeMatch ? 'header__link--active' : 'header__link--inactive'}
    >
      <Link to={to}>{label}</Link>
    </span>
  );
};

const Header = () => (
  <header className='main__header'>
    <span className='header__title'>Phasmophobia</span>
    <span className='header__links'>
      <span>Tracker</span>
      {/* <HeaderLink to={'/investigation'} label='Investigation' />
      <HeaderLink match={'/randomizer'} to={'/randomizer'} label='Randomizer' /> */}
    </span>
  </header>
);

export default Header;
