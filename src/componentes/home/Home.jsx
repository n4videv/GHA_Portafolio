import './Home.css';
import img from '../../assets/img/Foto_germán.png'
import { BsMouse } from "react-icons/bs";
import Buttons from '../button/Button';
import { useState } from 'react';

 function Home(){
    const [toggleState, setToggleState]=useState(false);

    const change=()=>{
        setToggleState(!toggleState)
    }

    return(
        <div id="home" className='container home-container'>
            <div className='logo'>
                <div className={`${toggleState?"hover-show active":"hover-show"}`} onClick={change} >
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>

                <img src={img} alt=""/>
            </div>
            <div>Mi Portafolio</div>

            <a href='#footer' className='scroll-down'>
                <hr/>
                <h5>Scrolleamos hacia abajo</h5>
                <BsMouse className='scroll' />
                <hr/>
            </a>

            <h2 id="about">
                <span>Acerca de mi</span>
                <p>
                Preprofesional de Ingeniería de Sistemas, honesto, comprometido con el trabajo, apto para todo tipo de labor en el campo de Sistemas. Soy una persona autodidacta, capaz de liderar y trabajar en equipo.                
                </p>
            </h2>
            <Buttons/>
        </div>
    );
}
        
export default Home;