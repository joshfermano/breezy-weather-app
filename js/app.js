import API_KEY from './test.js';

const cityInput = document.getElementById('inputCity');
const searchCity = document.getElementById('searchBtn');

const notFound = document.querySelector('.search-error');
const searchSection = document.querySelector('.search-section');
const weatherSection = document.querySelector('.weather-section');

const cityValue = document.getElementById('cityValue');
const dateText = document.getElementById('timeValue');
const image = document.getElementById('imageValue');
const tempData = document.getElementById('tempValue');
const description = document.getElementById('descValue');
const humidityData = document.getElementById('humidityValue');
const windData = document.getElementById('windValue');
const weatherImg = document.getElementById('imageValue');

const apiKey = API_KEY;

searchCity.addEventListener('click', () => {
  if (cityInput.value.trim() != '') {
    updateWeatherInfo(cityInput.value);
    cityInput.value = '';
    cityInput.blur();
  }
});

cityInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && cityInput.value.trim() != '') {
    updateWeatherInfo(cityInput.value);
    cityInput.value = '';
    cityInput.blur();
  }
});

const getFetchData = async (endPoint, city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  return response.json();
};

const getWeatherImage = (id) => {
  if (id <= 232) return 'thunderstorm.png';
  if (id <= 321) return 'drizzle.png';
  if (id <= 531) return 'rain.png';
  if (id <= 622) return 'snow.png';
  if (id === 800) return 'clear-sky.png';
  if (id <= 804) return 'clouds.png';
  else return 'weather.png';
};

const getCurrentDate = () => {
  const currentDate = new Date();
  const dateFormat = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };

  return currentDate.toLocaleDateString('en-PH', dateFormat);
};

const updateWeatherInfo = async (city) => {
  const weatherData = await getFetchData('weather', city);

  if (weatherData.cod != 200) {
    showDisplay(notFound);
    return;
  }

  const {
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
  } = weatherData;

  cityValue.textContent = country;
  tempData.textContent = Math.round(temp);
  description.textContent = main;
  humidityData.textContent = humidity;
  windData.textContent = speed;

  dateText.textContent = getCurrentDate();
  weatherImg.src = `img/${getWeatherImage(id)}`;

  showDisplay(weatherSection);
  console.log(weatherData);
};

const showDisplay = (sectionToShow) => {
  [notFound, searchSection, weatherSection].forEach((section) => {
    section.classList.add('hidden');
    section.classList.remove('block');
  });

  sectionToShow.classList.remove('hidden');
  sectionToShow.classList.add('block');
};
