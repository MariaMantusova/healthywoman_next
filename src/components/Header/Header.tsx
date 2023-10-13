"use client";

import { useState } from "react";
import Link from "next/link";
import "./Header.css";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Link href="/" className="header__title">Healthy Woman</Link>
      <button className="header__link" onClick={() => setIsOpen(!isOpen)}>
        Recipes&emsp;&#8744;
        {isOpen && <HeaderMenu />}
      </button>
    </header>
  );
};

export { Header };
