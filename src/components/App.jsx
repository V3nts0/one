import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { VFXProvider } from 'react-vfx';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './DarkMode/theme';
import { GlobalStyles } from './DarkMode/global';
import { PortfolioProvider } from '../context/context';
import { useDarkMode } from './DarkMode/useDarkMode';
import Toggle from './darkMode';
import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';


function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
    <GlobalStyles /> 
    <VFXProvider>  
        <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    </VFXProvider>
      </ThemeProvider> 
  );
}

export default App;
