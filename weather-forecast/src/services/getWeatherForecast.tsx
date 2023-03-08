const API_KEY = 'b69290eb7d314300a97120031232802';

export const getLocation = () => fetch(`https://ipinfo.io/json?token=0e45e46a363d54`).then((response) => response.json());

export const getDayForecast = (request: string) =>
  fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?q=${request}&num_of_days=7&key=${API_KEY}&format=json`).then(
    (response) => response.json()
  );