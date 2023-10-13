import Link from "next/link";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <ul className="header__menu">
      <li>
        <Link href="/recipes" className="menu__link">By calories</Link>
      </li>
      <li>
        <Link href="/recipes" className="menu__link">By dish type</Link>
      </li>
      <li>
        <Link href="/recipes" className="menu__link">By meal type</Link>
      </li>
      <li>
        <Link href="/recipes" className="menu__link">By keyword</Link>
      </li>
      <li>
        <Link href="/recipes" className="menu__link">By cuisine</Link>
      </li>
      <li>
        <Link href="/recipes" className="menu__link">By health label</Link>
      </li>
      <li>
        <Link href="/recipes" className="menu__link">By diet</Link>
      </li>
    </ul>
  );
};

export { HeaderMenu };
