import { ALMATY_CITY, API_KEY } from "../sources/constants";

export async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${ALMATY_CITY}&lang=ru`
    );

    if (!response) {
        throw Error('No data for you')
    }

    return await response.json()
  } catch (error) {
    console.log("Error");
  }
}
