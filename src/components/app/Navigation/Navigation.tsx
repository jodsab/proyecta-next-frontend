"use client";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Image from "next/image";
import { Button, Drawer } from "@mui/material";
import { Link, animateScroll as scroll } from "react-scroll";
import { homeScroll } from "@/shared/scrolls";
import Logo from "../../../assets/logo.png";
import BosqueAltoLogo from "../../../assets/bosquealto.png";
import "./styles.scss";

const ICON_SIZE = 40;

const TRNavigation = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { gallery, joinUs, location, tour360, weHave } = homeScroll;

  const MenuButton = ({ data }: any) => {
    return (
      <Link
        activeClass="active"
        to={data.id}
        smooth
        spy
        duration={500}
        offset={-80}
      >
        <div onClick={() => setToggleDrawer(false)}>
          <li>
            <button className="item_button">
              <p className="bold">{data.button}</p>
            </button>
          </li>
        </div>
      </Link>
    );
  };

  return (
    <div className="tr_navigation_container">
      <div className="tr_navigation">
        <Image className="logo" src={Logo} alt="logo" />
        <button className="button" type="button">
          <p className="bold">Solicitar información</p>
        </button>

        <Button onClick={() => setToggleDrawer(!toggleDrawer)}>
          <BiMenu size={ICON_SIZE} />
        </Button>

        <Drawer
          anchor={"right"}
          open={toggleDrawer}
          onClose={() => setToggleDrawer(!toggleDrawer)}
        >
          <div className="phone_menu_container">
            <div className="logo_ba_container">
              <Image
                className="bosqueAlto_logo"
                src={BosqueAltoLogo}
                alt="Logo Bosque Alto El progreso"
              />
            </div>
            <div>
              <ul className="buttons">
                <MenuButton data={location} />
                <MenuButton data={weHave} />
                <MenuButton data={gallery} />
                <MenuButton data={joinUs} />
                <MenuButton data={tour360} />
              </ul>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default TRNavigation;
