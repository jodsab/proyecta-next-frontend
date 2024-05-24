"use client";
import { useState } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import { homeScroll } from "@/shared/scrolls";
import { Drawer, Button } from "antd";
import { LuMenu } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import useAnalyticsEventTracker from "@/hooks/reactGA.hook";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { SOCIAL_NETWORKS } from "@/shared/socials";
import Logo from "../../../assets/logo.png";
import "./styles.scss";
const SVGSIZE = 19;
const SVGSIZE_MOBILE = 22;

const TRNavigation = () => {
  const { gallery, joinUs, location, tour360, weHave, form } = homeScroll;
  const [open, setOpen] = useState(false);

  const gaEventTracker = useAnalyticsEventTracker('Open Menu');

  const showDrawer = () => {
    gaEventTracker('Toggle Drawer')
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

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
        <div onClick={() => setOpen(false)}>
          <li>
            <button className="item_button">
              <p>{data.button}</p>
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
        {/*         <div>
          <Link
            activeClass="active"
            to={form.id}
            smooth
            spy
            duration={500}
            offset={-60}
          >
            <button className="button">
              <p className="bold">Solicitar información</p>
            </button>

          </Link>
        </div> */}
        <div className="mobile_content">
          <button className="toggle_button" onClick={showDrawer}>
            {
              open ? <IoCloseOutline size={40} color="#4760d2" /> : <LuMenu size={34} color="#4760d2" />
            }
          </button>
          <Drawer title="Basic Drawer" onClose={onClose} open={open}>
            <div className="navigation-bar__content">
              <div className="navigation-bar__ul">
                <ul className="buttons">
                  <MenuButton data={location} />
                  <MenuButton data={weHave} />
                  <MenuButton data={gallery} />
                  <MenuButton data={joinUs} />
                  <MenuButton data={tour360} />
                </ul>
              </div>
              <div className="social_icons">
                <div className="icons_container">
                  <a href={SOCIAL_NETWORKS.facebook} target="_blank">
                    <AiFillFacebook size={SVGSIZE_MOBILE} />
                  </a>
                  <a
                    href={SOCIAL_NETWORKS.instagram}
                    target="_blank"
                  >
                    <AiOutlineInstagram size={SVGSIZE_MOBILE} />
                  </a>
                  <a href={SOCIAL_NETWORKS.tiktok} target="_blank">
                    <FaTiktok size={SVGSIZE_MOBILE} />
                  </a>
                  <a href={SOCIAL_NETWORKS.whatsapp} target="_blank">
                    <BsWhatsapp size={SVGSIZE_MOBILE} />
                  </a>
                  <a
                    href={SOCIAL_NETWORKS.youtube}
                    target="_blank"
                  >
                    <AiFillYoutube size={SVGSIZE_MOBILE} />
                  </a>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
        <div className="desktop_content">
          <div className="navigation-bar__content">
            <div className="navigation-bar__ul">
              <ul className="buttons">
                <MenuButton data={location} />
                <MenuButton data={weHave} />
                <MenuButton data={gallery} />
                <MenuButton data={joinUs} />
                <MenuButton data={tour360} />
              </ul>
            </div>
            <div className="social_icons">
              <div className="icons_container">
                <a href={SOCIAL_NETWORKS.facebook} target="_blank">
                  <AiFillFacebook size={SVGSIZE} />
                </a>
                <a
                  href={SOCIAL_NETWORKS.instagram}
                  target="_blank"
                >
                  <AiOutlineInstagram size={SVGSIZE} />
                </a>
                <a href={SOCIAL_NETWORKS.tiktok} target="_blank">
                  <FaTiktok size={SVGSIZE} />
                </a>
                <a href={SOCIAL_NETWORKS.whatsapp} target="_blank">
                  <BsWhatsapp size={SVGSIZE} />
                </a>
                <a
                  href={SOCIAL_NETWORKS.youtube}
                  target="_blank"
                >
                  <AiFillYoutube size={SVGSIZE} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRNavigation;
