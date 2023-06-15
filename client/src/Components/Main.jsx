import '../Styles/buttons.css'
import alumno from '../imagenes/alumnos.png'
import acompa from '../imagenes/Acompañante.png'
import educador from '../imagenes/educador.png'
import logo from '../imagenes/estacion_meiquer_logo.png'
import { Link } from "react-router-dom";
import NavBar from './NavBar'

const Main= () => {
    return (

        <div>
    <div className='title'>
      <Link to="/">
        <img src={logo} className='logo'></img>
      </Link>
    </div>
    <div className='middle'>
    <div className='center'> 
        <h1>¿Quien eres?</h1>
      </div>
      <div className='button-zone'>
        <div className='box'>
          <div className='centertextcircle'>
            <h2>Estudiante</h2>
            </div>
            <div className='centertext'>
            <Link to ="/Alumno">
              <img src={alumno} className='imgicon' alt="Botón 2" />
            </Link>
            </div>
        </div>
        <div className='box'>
          <div className='centertextcircle'>
            <h2>Acompañante</h2>
            </div>
            <div className='centertext'>
            <Link to ="/Acompañante">
              <img src={acompa} className='imgicon' alt="Botón 2" />
              </Link>
            </div>
        </div>
        <div className='box'>
          <div className='centertextcircle'>
            <h2>Educador</h2>
          </div>
          <div className='centertext'>
          <a href="/Educador">
              <img src={educador} className='imgicon' alt="Botón 2" />
            </a>
          </div>

        </div>
      </div>
    </div>
   </div>
    


    )
}

export default Main;