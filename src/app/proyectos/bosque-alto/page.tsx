"use client";
import NavBar from './components/NavBar/NavBar'
import Portada from '../bosque-alto/components/Portada/Portada'
import TRFooter from "@/components/app/Footer/Footer";
import Formulario from '../bosque-alto/components/Formulario/Formulario'
import Info from "./components/Info/Info";
import Ubicacion from '../../../components/app/Ubicacion/Ubicacion';
import Comentarios from '../../../components/app/Comentarios/Comentarios';
/* import Referido from '../../../components/app/Referido/Referido' */
import { homeScroll } from './components/NavBar/scrolls';
import TRForm from '@/components/app/Form/Form';
import "./index.scss";

export default function BosqueAlto() {
  const { proyectos, referido, nosotros, ubicacion } = homeScroll;
  return (
    <div className="homepage_container">
      <div className="home">
        <NavBar />
        <Portada />
        <div className="with_form">
          <div className="form_absolute">
            <div className="form_fixed">
              <TRForm />
            </div>
          </div>
          <div className="content_form">
            <div className='formulario_desktop' id={proyectos.id}>
              <Formulario />
            </div>

            <Info />

          </div>
        </div>
        <div id={ubicacion.id}>
          <Ubicacion />
        </div>

        <div id={nosotros.id}>
          <Comentarios />
        </div>
        {/*         <div id={referido.id}>
          <Referido />
        </div> */}
        <div className="form_mobile_extra">
          <TRForm />
        </div>
        <TRFooter />
      </div>
    </div>
  );
}
