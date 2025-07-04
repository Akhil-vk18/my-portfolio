import Navigation from './components/Navigation';
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
      <Navigation  darkmode={darkmode} setDarkMode={setDarkMode} />

      <Cover /><hr />
      
    
     
 
      <Profile  /><hr />
           <AnimatedContent  distance={150}
    direction="vertical"
    reverse={false}
    duration={1.5}
    ease="power3.out"
    initialOpacity={0.2}
    animateOpacity
    scale={0.8}
    threshold={0.1}
    delay={0.1}
  >
    <Skills  />
    </AnimatedContent><hr />
      <Projects  /><hr />
      <Contact />
      <Footer />
    
      </div>
      </div>
   

  );
}

export default App;