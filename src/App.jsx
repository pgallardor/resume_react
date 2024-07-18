import { useTranslation } from 'react-i18next';

import '../node_modules/flag-icons/css/flag-icons.min.css';
import { LangContext } from './contexts';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import TechStack from './components/TechStack';
import CurrentlyLearning from './components/CurrentlyLearning';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  const { i18n, t } = useTranslation();

  const setLang = (lang) => {
    if (lang === i18n.language) return;
    i18n.changeLanguage(lang);
  }

  return (
    <LangContext.Provider value={t}>
      <section className='bg-slate-900 text-white'>
        <AboutMe setLang={setLang} />
        <TechStack />
        <Resume />
        <div className="mx-auto pb-10 grid grid-cols-1 lg:grid-cols-2 text-center">
          <CurrentlyLearning />
          <Certifications />
        </div>
      </section>
      <Footer />
    </LangContext.Provider>
  )
}

export default App
