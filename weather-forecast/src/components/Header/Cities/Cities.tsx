import React from 'react';
import './Cities.scss';

import remove from '../../../assets/icons/remove.svg';

const Cities: React.FC = () => {
  return (
    <section className="cities">
      <div className="city">
        <h2 className="city_name">Cities</h2>
        <img className="city_remove-icon" src={remove} alt="remove icon" />
      </div>
      <div className="city">
        <h2 className="city_name">Cities</h2>
        <img className="city_remove-icon" src={remove} alt="remove icon" />
      </div>
      <div className="city">
        <h2 className="city_name">Cities</h2>
        <img className="city_remove-icon" src={remove} alt="remove icon" />
      </div>
    </section>
  );
};

export default Cities;
