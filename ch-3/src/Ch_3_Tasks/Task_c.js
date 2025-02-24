import React, { createContext, useContext, useState } from 'react';


const LanguageContext = createContext();


function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); 

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const value = { language, toggleLanguage };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}


function Text() {
  const { language } = useContext(LanguageContext);

  const translations = {
    en: {
      greeting: 'Hello, world!',
      description: 'This is a multi-language website example.',
      button: 'Change Language',
    },
    es: {
      greeting: '¡Hola, mundo!',
      description: 'Este es un ejemplo de sitio web multi-idioma.',
      button: 'Cambiar Idioma',
    },
  };

  return (
    <div>
      <h1>{translations[language].greeting}</h1>
      <p>{translations[language].description}</p>
    </div>
  );
}


function LanguageToggle() {
  const { toggleLanguage, language } = useContext(LanguageContext);
  const translations = {
      en: {
          button: 'Change Language',
      },
      es: {
          button: 'Cambiar Idioma',
      },
  };
  return (
    <button onClick={toggleLanguage}>
      {translations[language].button}
    </button>
  );
}


function App() {
  return (
    <LanguageProvider>
      <div>
        <Text />
        <LanguageToggle/>
      </div>
    </LanguageProvider>
  );
}

export default App;