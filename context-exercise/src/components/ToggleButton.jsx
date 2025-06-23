import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function ToggleButton() {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <button id="changeFavorite" onClick={toggleLanguage}>
      toggle language
    </button>
  );
}
