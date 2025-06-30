
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Profile from './components/Profile';
import './App.css';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ToggleTheme from './components/ToggleTheme';
import React ,{useState} from 'react';
import Cover from './components/Cover';
import AnimatedContent from "./reactbits/AnimatedContent/AnimatedContent"
function App(){
  const [darkmode,setDarkMode]=useState(false);
  return(  

    <div className='main'>
      <div className={darkmode?'dark':'light'}>
      <ToggleTheme darkmode={darkmode} setDarkMode={setDarkMode} />

      <Cover />
      <AnimatedContent  distance={150}
    direction="horizontal"
    reverse={false}
    duration={1.2}
    ease="bounce.out"
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    delay={0.3}
  >
      {/* <Header /> */}
      <Profile  />
      <AnimatedContent><Skills  /></AnimatedContent>
      
      <Projects  />
      <Contact />
      <Footer />
      </AnimatedContent>
      </div>
      </div>
   

  );
}

export default App;