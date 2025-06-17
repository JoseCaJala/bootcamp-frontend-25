import Button from "../atoms/button";
import InfoText from "../atoms/infoText";

const CityButtons = ({ cities, onCityClick }) => {
    if (!cities.length) return null;

    return (
        <div className="city-buttons">
            <InfoText> Previously searched cities:</InfoText>
            <div className="cities-container">
                {cities.map((city) => (
                    <Button
                        key={city}
                        onClick={() => onCityClick(city)}
                        variant="city"
                        >
                        {city}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default CityButtons;