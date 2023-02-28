import React from 'react';
import Search from './Search/Search';
import Cities from './Cities/Cities';
import Contacts from './Contacts/Contacts';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="title">WeatherForecast</h1>
      <Search />
      <Cities />
      <Contacts />
    </header>
  );
};

export default Header;
