import cloudy from '../assets/cards/cloudy.svg';
import snowy from '../assets/cards/snowy.svg';
import sunny from '../assets/cards/sunny.svg';
import rainy from '../assets/cards/rainy.svg';
import lightRainy from '../assets/cards/light_rainy.svg';
import foggy from '../assets/cards/foggy.svg';
import thunder from '../assets/cards/thunder.svg';
import { weatherImagesType } from '../types/weatherImages';

export const imagesArray: weatherImagesType = {
  'Light Snow': snowy,
  'Light Snow Shower, Blowing Snow, Heavy Snow Shower': snowy,
  'Blowing Snow': snowy,
  'Heavy Snow': snowy,
  Blizzard: snowy,
  'Heavy Snow, Blowing Snow': snowy,
  'Light Snow, Mist': snowy,
  'Light Rain And Snow Shower': snowy,
  'Light Snow Shower, Heavy Snow Shower': snowy,
  'Patchy light snow': snowy,
  'Moderate snow': snowy,
  Mist: foggy,
  'Mist, Shallow Fog': foggy,
  'Light Rain, Mist': foggy,
  'Light Snow Shower, Mist': foggy,
  'Patches Of Fog': foggy,
  'Smoke, Haze': foggy,
  'Light drizzle': lightRainy,
  'Light Drizzle And Rain': lightRainy,
  'Light Rain, Light Rain Shower': lightRainy,
  'Patchy rain possible': lightRainy,
  'Light Rain': lightRainy,
  'Light Freezing Rain': lightRainy,
  Rain: rainy,
  'Light Rain Shower': rainy,
  'Thunderstorm In Vicinity': thunder,
  'Rain With Thunderstorm, Mist': thunder,
  Clear: sunny,
  Sunny: sunny,
  default: cloudy,
};
