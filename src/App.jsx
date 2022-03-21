import './App.css';

import Navbar from './Containers/Home/Navbar';
import Aboutme from './Containers/AboutMe/Aboutme';
import Skills from './Containers/Skills/Skills';
import Contactme from './Containers/ContactMe/Contactme';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Profile/> */}
      <Aboutme/>
      <Skills/>      
      <Contactme/>
     
        
    </div>
  );
}

export default App;
