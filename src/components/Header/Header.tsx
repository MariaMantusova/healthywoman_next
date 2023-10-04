import Link from "next/link";
import "./Header.css";

const Header = () => {
    return(
        <header className="header">
            <Link href="/" className="header__title">Healthy Woman</Link>
            <Link href="/recipes" className="header__link">Recipes</Link>
        </header>
    )
}

export { Header };
