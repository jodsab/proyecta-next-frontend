"use client";
import { Element } from "react-scroll";
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

import "./index.scss";

export default function HomePage() {
  const { location, weHave, gallery, tour360, joinUs } = homeScroll;
  return (
    <div>
      <TRNavigation />
      <div className="home_content">
        <div className="home_container">
          <TRPortada />
          <TRCard />
          <TRDescription />
          <Element name={location.id} className="element">
            <TRLocation />
          </Element>
          <div id={weHave.id}>
            <WeHave />
          </div>
        </div>
        <div id={gallery.id}>
          <TRGallery />
        </div>
        <div className="home_container">
          <div id={tour360.id}>
            <TRMultimedia />
          </div>
          <TRForm />
        </div>
        <div>
          <div id={joinUs.id}>
            <TRComentarios />
            <TRFamilys />
          </div>
          <TRFooter />
        </div>
      </div>
    </div>
  );
}
