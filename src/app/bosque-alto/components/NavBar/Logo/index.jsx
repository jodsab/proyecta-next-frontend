import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./styles.scss";

const NextLink = ({ children, href }) => {
  return <Link href={href}>{children}</Link>;
};

export default NextLink;
