
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Profile from './components/Profile';
import './App.css';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ToggleTheme from './components/ToggleTheme';
import React ,{useState} from 'react';

function App(){
  const [darkmode,setDarkMode]=useState(false);
  return(  
    <div className='main'>
      <div className={darkmode?'dark':'light'}>
      <ToggleTheme darkmode={darkmode} setDarkMode={setDarkMode} />
      <Header />
      <Profile  />
      <Skills  />
      <Projects  />
      <Contact />
      <Footer />
      </div>
      </div>
   
  
  );
}

export default App;