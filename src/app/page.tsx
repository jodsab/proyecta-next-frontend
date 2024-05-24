"use client";
import TRNavigation from "@/components/app/Navigation/Navigation";
import TRPortada from "@/components/app/Portada/Portada";
import TRCard from "@/components/app/Card/Card";
import TRLocation from "@/components/app/Location/Locations";
import TRDescription from "@/components/app/Description/Description";
import WeHave from "@/components/app/WeHave/WeHave";
import TRGallery from "@/components/app/Gallery/Gallery";
import TRMultimedia from "@/components/app/Multimedia/Multimedia";
import TRForm from "@/components/app/Form/Form";
import TRComentarios from "@/components/app/Comentarios/Comentarios";
import TRFamilys from "@/components/app/Familys/Familys";
import TRFooter from "@/components/app/Footer/Footer";
import { homeScroll } from "@/shared/scrolls";
import ReactGA from "react-ga";

import "./index.scss";

const REACT_GA = process.env.NEXT_REACT_GA || 'G-5GC3ZP8KT5';

ReactGA.initialize(REACT_GA);

export default function HomePage() {
  const { location, weHave, gallery, tour360, joinUs, form } = homeScroll;
  return (
    <div className="homepage_container">
      <TRNavigation />
      {/* <iframe style={{ width: '100%', height: '1500px' }} src="https://player.vimeo.com/video/842527615?h=288624a18b&autoplay=1&background=1&texttrack=1&loop=1&muted=1&title=0&byline=0&portrait=0&speed=0&badge=0&autopause=0&player_id=0&app_id=58479"></iframe>
       */}<div className="portada_mobile_container">
        <TRPortada />
      </div>
      <div className="home_content">
        <div className="content_mobile_container">
          <div className="card_mobile_container">
            <TRCard />
          </div>
          <TRDescription />
          <div id={location.id} className="element">
            <TRLocation />
          </div>
          <div id={weHave.id}>
            <WeHave />
          </div>
          <div id={gallery.id}>
            <TRGallery />
          </div>
          <div id={tour360.id}>
            <TRMultimedia />
          </div>
          <div className="form_mobile_container" id={form.id}>
            <TRForm />
          </div>
          <div id={joinUs.id}>
            <TRComentarios />
            <TRFamilys />
          </div>
          <TRFooter />
        </div>
        <div className="form_space_mobile_container">
        </div>
      </div>
      <div className="space_desktop_form">
        <div className="fixed_form" id={form.id}>
          <TRForm />
        </div>
      </div>
    </div>
  );
}
