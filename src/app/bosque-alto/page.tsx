"use client";
import { useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import TRFooter from '@/components/app/Footer/Footer';
import TRForm from '@/components/app/Form/Form';
import Image from 'next/image';
import Porque from './components/Porque'
import Avances from './components/Avances'
import Portada from './components/Portada';
import Credito from './components/Credito'
import Recorrido from './components/Recorrido'
import Precios from './components/Precios';
import { bosqueAltoScroll } from './components/NavBar/scrolls';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./index.scss";

export default function BosqueAlto() {
  const { precios, avances, recorrido, informacion, porque } = bosqueAltoScroll;

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="bosquealto_container">
      <div className="bosquealto">
        <NavBar />
        <Portada />
        <div id={precios.id}>
          <Precios />
        </div>
        <div id={avances.id}>
          <Avances />
        </div>
        <div id={recorrido.id}>
          <Recorrido />
        </div>
        <div id={informacion.id}>
          <Credito />
        </div>
        <div id={porque.id}>
          <Porque />
        </div>
        {/*  <TRFooter /> */}
      </div>
    </div>
  );
}
