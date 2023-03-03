import React from 'react';
import './Cities.scss';

import remove from '../../../assets/icons/remove.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addCity } from '../../../redux/action/citiesArrayOption';

const Cities: React.FC = () => {
  const dispatch = useDispatch();
  const citiesArray = useSelector((state: any) => state.citiesArrayRedicer.citiesArray);

  const deleteCity = (city: string) => {
    let list = citiesArray.filter((elem: string) => elem !== city);
    dispatch(addCity(list));
    console.log(city);
  };

  return (
    <section className="cities">
      {citiesArray.map((city: string, index: number) => (
        <div className="city" key={index}>
          <h2 className="city_name">{city}</h2>
          <img
            className="city_remove-icon"
            src={remove}
            alt="remove icon"
            onClick={() => {
              deleteCity(city);
            }}></img>
        </div>
      ))}
    </section>
  );
};

export default Cities;
