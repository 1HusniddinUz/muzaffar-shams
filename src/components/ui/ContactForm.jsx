import "../../assets/ContactForm.css";
import {useTranslation} from "react-i18next";

const ContactForm = () => {
    const {t} = useTranslation();
    return (
        <section id="ContactForm">
            <div className="container">
                {/* === CONTACT BOX === */}
                <div className="contact_box">
                    <div className="contact_info">
                        <h2>{t(`contact`)}</h2>
                        <p className="contact_desc">
                            {t(`contactSentences`)}
                        </p>

                        <div className="social_links">
                            <a
                                href="https://t.me/+998934748880"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                <i className="fa-brands fa-telegram"></i> Telegram
                            </a>
                            <a
                                href="https://t.me/+998934748880"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="fa-brands fa-instagram"></i> Instagram
                            </a>
                            <a href="tel:+998934748880" aria-label="Telefon">
                                <i className="fa-solid fa-phone"></i> +998 (93) 474‒88‒80
                            </a>
                        </div>
                    </div>

                    <div className="map_box">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6132.256512952799!2d64.404397!3d39.781677!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzU0LjAiTiA2NMKwMjQnMTUuOCJF!5e0!3m2!1sru!2s!4v1761509871146!5m2!1sru!2s"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bizning manzil"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
