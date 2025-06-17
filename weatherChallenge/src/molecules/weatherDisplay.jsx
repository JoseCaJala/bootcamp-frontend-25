import InfoText from "../atoms/infoText";

const WeatherDisplay = ({ mockWeatherData }) => {
    if (!mockWeatherData) return null;

    return (
        <div className="weather-display">
            <InfoText type="title">
                {mockWeatherData.city}
            </InfoText>
            <InfoText type="weather">
                Temperature: {mockWeatherData.temperature}
            </InfoText>
            <InfoText type="weather">
                Humidity: {mockWeatherData.humidity}
            </InfoText>
            <InfoText type="weather">
                Wind Speed: {mockWeatherData.windSpeed}
            </InfoText>
        </div>
    );
};

export default WeatherDisplay;