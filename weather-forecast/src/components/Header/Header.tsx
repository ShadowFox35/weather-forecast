import React from 'react';
import Search from './Search/Search';
import Cities from './Cities/Cities';
import Contacts from './Contacts/Contacts';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <section className="header_options">
        <h1 className="title">WeatherForecast</h1>
        <Search />
        <Cities />
      </section>
      <Contacts />
    </header>
  );
};

export default Header;
