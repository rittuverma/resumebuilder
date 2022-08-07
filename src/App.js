import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import Presentation from './Components/presentation';
import aboutimage from './about.png';
import aboutimage1 from './download.png';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      
        
      <Header/>
      <Feature/>
      <About image={aboutimage} title='Comes With All You Need For Daily Life' button='Get The App' />
      <Presentation/>
      <About image={aboutimage1} title='Download and Get The App Now' button='Download' />
      <Contact/>
    </div>
  );
}

export default App;
