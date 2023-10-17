import "./Preloader.css";
import PreloaderImage from "../../images/preloader.svg";
import Image from "next/dist/client/legacy/image";

const Preloader = () => {
    return(
        <section className="preloader">
            <Image src={PreloaderImage} alt="Идет загрузка страницы"/>
        </section>
    )
}

export {Preloader}
