import "./Preloader.css";
import PreloaderImage from "../../images/preloader.svg";

const Preloader = () => {
    return(
        <section className="preloader">
            <img src={PreloaderImage} alt="Идет загрузка страницы"/>
        </section>
    )
}

export {Preloader}
