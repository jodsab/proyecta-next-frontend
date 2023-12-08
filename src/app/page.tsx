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

import "./index.scss";

export default function HomePage() {
  const { location, weHave, gallery, tour360, joinUs, form } = homeScroll;
  return (
    <div className="homepage_container">
      <TRNavigation />
      <div className="portada_mobile_container">
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
