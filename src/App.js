import Header from './componentes/header/Header';
import NavBar from './componentes/navbar/NavBar';
import Home from './componentes/home/Home';
import About from './componentes/about/About';
import Proyectos from './componentes/proyects/Proyectos';
import Contact from './componentes/contacts/Contact';
import Footer from './componentes/footer/Footer';

import './App.css';

function App() {
  return (
    <div>
      <div className='bg-circle1'></div>
      <div className='bg-circle2'></div>
      <Header/>
      <NavBar />
      <Home/>
      <About />
      <Proyectos/>
      <Contact />
      <Footer/>
    </div>
  );
}


export default App;
