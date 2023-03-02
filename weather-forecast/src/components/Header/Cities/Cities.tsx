import React from 'react';
import './Cities.scss';

import remove from '../../../assets/icons/remove.svg';
import { useSelector } from 'react-redux';

const Cities: React.FC = () => {
  const citiesArray = useSelector((state: any) => state.citiesArrayRedicer.citiesArray);

  return (
    <section className="cities">
      {citiesArray.map((city: string, index: number) => (
        <div className="city" key={index}>
          <h2 className="city_name">{city}</h2>
          <img className="city_remove-icon" src={remove} alt="remove icon" />
        </div>
      ))}
    </section>
  );
};

export default Cities;
