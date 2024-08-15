"use client";
import { useEffect } from "react";
import TRNavigation from "@/components/app/Navigation/Navigation";
import TRCard from "@/components/app/Card/Card";
import TRDescription from "@/components/app/Description/Description";
import WeHave from "@/components/app/WeHave/WeHave";
import TRGallery from "@/components/app/Gallery/Gallery";
import TRMultimedia from "@/components/app/Multimedia/Multimedia";
import TRForm from "@/components/app/Form/Form";
import Comentarios from "@/components/app/Comentarios/Comentarios";
import TRFamilys from "@/components/app/Familys/Familys";
import TRFooter from "@/components/app/Footer/Footer";
import Referido from "@/components/app/Referido/Referido";
import { homeScroll } from "@/shared/scrolls";
import sticker from '../assets/home/sticker.png';
import Image from "next/image";
import Aos from "aos";
import Ubicacion from "../components/app/Ubicacion/Ubicacion";
import ReactGA from "react-ga";
import "aos/dist/aos.css";
import "./index.scss";

const REACT_GA = process.env.NEXT_REACT_GA || 'G-5GC3ZP8KT5';

ReactGA.initialize(REACT_GA);

export default function HomePage() {
  const { location, weHave, gallery, tour360, joinUs, form } = homeScroll;

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className="homepage_container">
      <TRNavigation />
      <div className="new_portada">
        <div className="lotes_container" data-aos="fade-right">
          <Image alt="sticker" className="lotes" src={sticker} />
        </div>
        <div className='iframe__container'>
          <video
            className="iframe_content"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100%', height: 'auto' }}
          >
            <source src="./assets/videoportada.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video></div>
        <div className="card_desktop_container">
          <TRCard />
        </div>
      </div>
      {/* <div className="portada_mobile_container">
        <TRPortada />
      </div> */}
      <div className="home_content">
        <div className="content_mobile_container">
          <div className="card_mobile_container">
            <TRCard />
          </div>
          <div data-aos="fade-up">
            <TRDescription />
          </div>

          <div id={location.id} className="element">
            <Ubicacion />
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
        </div>
        <div className="form_space_mobile_container" data-aos="fade-left">
          <div className="space_desktop_form" id={form.id}>
            <TRForm />
          </div>
        </div>
      </div>
      <div id={joinUs.id}>
        <Comentarios />
        <TRFamilys />
      </div>
      <Referido />
      <TRFooter />
    </div>
  );
}
