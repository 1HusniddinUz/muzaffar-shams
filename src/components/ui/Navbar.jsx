import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import "../../assets/Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [marketOpen, setMarketOpen] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [menuOpen]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" >
            <div className="container">
                {/* === NAV TOP === */}
                <div className="nav_top">
                    <div className="social_links">
                        <a href="https://t.me/+998934748880" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a href="https://t.me/+998934748880" target="_blank" rel="noopener noreferrer" >
                            +998(93) 474-88-80
                        </a>
                    </div>

                    <a className="logo_box" href="/" aria-label="Bosh sahifa">
                        <img src={logo} loading="lazy" alt="Muzaffar Shams logotip" />
                    </a>

                    <div className="tools">
                        <label className="lang_provider desktop-only" aria-label="Tilni tanlang">
                            <select
                                id="select"
                                onChange={(e) => i18n.changeLanguage(e.target.value)}
                                defaultValue="uz"
                            >
                                <option value="uz">🇺🇿 O'zbek</option>
                                <option value="ru">🇷🇺 Русский</option>
                                <option value="en">🇬🇧 English</option>
                            </select>
                        </label>

                        <button
                            className={`burger ${menuOpen ? "active" : ""}`}
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Menyuni ochish/yopish"
                            aria-expanded={menuOpen}
                            aria-controls="primary-navigation"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>

                {/* === NAV BOTTOM (Burger menyu) === */}
                <div id="primary-navigation" className={`nav_bottom ${menuOpen ? "open" : ""}`}>
                    <ul className="nav_links">
                        <li><a className="nav_link" href="#Header">{t("headersec")}</a></li>
                        <li><a className="nav_link" href="#Products">{t("products")}</a></li>

                        {/* === MARKETPLACE DROPDOWN === */}
                        <li
                            className={`dropdown ${marketOpen ? "open" : ""}`}
                            onMouseEnter={() => setMarketOpen(true)}
                            onMouseLeave={() => setMarketOpen(false)}
                        >
                            <button
                                className="nav_link dropdown_toggle"
                                onClick={() => setMarketOpen((v) => !v)}
                                aria-expanded={marketOpen}
                            >
                                Marketplace <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <ul className="dropdown_menu">
                                <li><a href="https://uzum.uz/uz/product/poyabzal-shkafi-poyabzal-javoni-2064624" target="_blank" rel="noopener noreferrer">Uzum Market</a></li>
                                <li><a href="https://www.ozon.ru/product/obuvnitsa-mdf-70h40h100-sm-3034272588/?oos_search=false" target="_blank" rel="noopener noreferrer">Ozon</a></li>
                                <li><a href="https://www.wildberries.ru/catalog/585113894/detail.aspx?targetUrl=GP" target="_blank" rel="noopener noreferrer">Wildberries</a></li>
                                <li><a href="https://market.yandex.uz/card/obuvnitsa--sovremennoye-resheniye-dlya-khraneniya-obuvi-udobnaya-i-stilnaya-obuvnitsa-pomozhet-podderzhivat-poryadok/4730559229?businessId=216456918&showOriginalKmEmptyOffer=1&ogV=-6" target="_blank" rel="noopener noreferrer">Yandex Market</a></li>
                            </ul>
                        </li>

                        <li><a className="nav_link" href="#ContactForm">{t("contact")}</a></li>
                    </ul>

                    {/* Mobile uchun lang select */}
                    <div className="lang_provider mobile-only">
                        <select
                            id="select"
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                            defaultValue="uz"
                        >
                            <option value="uz">🇺🇿 O'zbek</option>
                            <option value="ru">🇷🇺 Русский</option>
                            <option value="en">🇬🇧 English</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* === BACKDROP === */}
            <div
                className={`backdrop ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden={!menuOpen}
            />
        </nav>
    );
};

export default Navbar;
