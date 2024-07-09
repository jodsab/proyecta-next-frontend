import React from 'react'
import Image from 'next/image';
import { FaCar } from "react-icons/fa";
import portada from '../../assets/info.jpg'
import './styles.scss'

const Info = () => {
  return (
    <div className='info_container'>
      <Image className='info_portada' src={portada} alt='info_portada' />
      <div className='blue_screen'></div>
      <div className='content_description'>
        <div className="first_description">
          <h3 className='tenemos'>¡TENEMOS TODO</h3>
          <h3 className='lo_que_necesitas'>LO QUE NECESITAS!</h3>
        </div>
        <div className="second_description">
          <p className='description'>Somos una inmobiliaria comprometida con el medio
            ambiente y la transformación de terrenos eriazos en áreas
            verdes para descanso, recreación y vida sana. Brindando la
            oportunidad de tener una casa de campo propia a muchas
            familias peruanas.</p>

          <p className='aditional'>Acompañanos y se parte de nuestro condominio
            campestre alejado de la ciudad, BOSQUE ALTO
            EL PROGRESO.</p>
        </div>
        <div className="thrid_description">
          <div className='card_info'>
            <p className='info1'>AV. PRIMAVERA 1860 - LINCE
              OFICINA 207
            </p>
            <div className='info2'>
              <FaCar size={24} />
              <p>CONTAMOS CON
                ESTACIONAMIENTO</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Info