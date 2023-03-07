const API_KEY = 'b69290eb7d314300a97120031232802';

export const fetchResult = (request: string) =>
  fetch(`http://api.worldweatheronline.com/premium/v1/weather.ashx?q=${request}&num_of_days=1&key=${API_KEY}&format=json`).then(
    (response) => {
      return response.json();
    }
  );

export const locationResult = () =>
  fetch(`https://ipinfo.io/json?token=0e45e46a363d54`).then((response) => {
    return response.json();
  });
