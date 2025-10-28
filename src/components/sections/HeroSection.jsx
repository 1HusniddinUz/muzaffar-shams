import hero_bg from "../../assets/videos/hero_bg.mp4";
import "../../assets/HeroSection.css";
import {useTranslation} from "react-i18next";

const HeroSection = () => {
    const {t} = useTranslation();
    return (
        <section id="HeroSection" className="hero_section">
            <video
                className="hero_video"
                src={hero_bg}
                autoPlay
                muted
                loop
                playsInline
            ></video>

            <div className="overlay"></div>

            <div className="hero_content">
                <h1 className="hero_title">{t(`quotes`)}</h1>
                <p className="hero_subtitle">
                    {t(`aboutUs`)}
                </p>
                <a href="#Products"> <button className="hero_btn">Mahsulotlarni ko‘rish</button></a>
            </div>
        </section>
    );
};

export default HeroSection;
