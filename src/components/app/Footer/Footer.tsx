import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import { ROUTER } from '../../../shared/routes';
import { HiOutlineBookOpen } from "react-icons/hi";

import "./styles.scss";

const TRFooter = () => {
  return (
    <div className="trfooter_container content">
      <div className="logo_footer">
        <Image alt="logo" src={logo} />
      </div>
      <div>
        <div className="book">
          <Link href={`/${ROUTER.libroDeReclamaciones}`} target="_blank">
            <HiOutlineBookOpen size={25} />
            <p>Libro de reclamaciones</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TRFooter;
