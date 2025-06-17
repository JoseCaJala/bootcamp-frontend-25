import { useState, useRef, useEffect } from 'react';
import SearchBar from '../molecules/searchBar';
import WeatherDisplay from '../molecules/weatherDisplay';
import { mockWeatherData} from "../utilities/weatherData";
import InfoText from '../atoms/infoText';
import CityButtons from '../molecules/CityButtons';



const WeatherDashboard = () => {
  const [appState, setAppState] = useState({
    currentWeather: null,
    searchedCities: [],
    errorMessage: ''
  });
  
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = () => {
    const cityName = inputRef.current.value.trim();
    
    if (!cityName) {
      inputRef.current.focus();
      return;
    }

    if (mockWeatherData[cityName]) {
      setAppState(prevState => ({
        currentWeather: { city: cityName, ...mockWeatherData[cityName] },
        searchedCities: prevState.searchedCities.includes(cityName) 
          ? prevState.searchedCities 
          : [...prevState.searchedCities, cityName],
        errorMessage: ''
      }));
      inputRef.current.focus();
    } else {
      setAppState(prevState => ({
        ...prevState,
        currentWeather: null,
        errorMessage: 'City not found.'
      }));
      inputRef.current.focus();
    }
  };

  const handleCityClick = (cityName) => {
    setAppState(prevState => ({
      ...prevState,
      currentWeather: { city: cityName, ...mockWeatherData[cityName] },
      errorMessage: ''
    }));
    inputRef.current.value = cityName;
    inputRef.current.focus();
  };

  const handleClean = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="weather-dashboard">
      <SearchBar
        inputRef={inputRef}
        onSearch={handleSearch}
        onClean={handleClean}
        onKeyPress={handleKeyPress}
      />

      <WeatherDisplay weatherData={appState.currentWeather} />

      <CityButtons 
        cities={appState.searchedCities}
        onCityClick={handleCityClick}
      />
    </div>
  );
};

export default WeatherDashboard;