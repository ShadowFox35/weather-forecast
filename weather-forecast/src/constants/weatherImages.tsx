import cloudy from '../assets/cards/cloudy.svg';
import snowy from '../assets/cards/snowy.svg';
import sunny from '../assets/cards/sunny.svg';
import rainy from '../assets/cards/rainy.svg';
import lightRainy from '../assets/cards/light_rainy.svg';
import foggy from '../assets/cards/foggy.svg';

export const imagesArray: any = {
  'Light Snow': snowy,
  'Light Rain And Snow Shower': snowy,
  'Light Snow Shower, Heavy Snow Shower': snowy,
  'Patchy light snow': snowy,
  Mist: foggy,
  'Mist, Shallow Fog': foggy,
  'Light Rain, Mist': foggy,
  'Light Snow Shower, Mist': foggy,
  'Smoke, Haze': foggy,
  'Light drizzle': lightRainy,
  'Patchy rain possible': lightRainy,
  'Light Rain': lightRainy,
  'Light Rain Shower': rainy,
  Clear: sunny,
  Sunny: sunny,
  default: cloudy,
};
