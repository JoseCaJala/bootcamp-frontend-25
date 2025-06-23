import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import ToggleButton from './ToggleButton';

export default function MainSection() {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">
        favorite programing language: {language}
      </p>
      <ToggleButton />
    </div>
  );
}
