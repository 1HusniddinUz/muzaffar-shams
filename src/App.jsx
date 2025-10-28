import './App.css'
import Header from "./components/layout/Header.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import Content from "./components/layout/Content.jsx";
import Footer from "./components/layout/Footer.jsx";
import i18n from "i18next"
import {initReactI18next} from "react-i18next";
import translationsUz from "./locales/translationsUz.js"
import translationsRu from "./locales/translationsRu.js"
import translationsEn from "./locales/translationsEn.js"
i18n.use(initReactI18next).init({
    resources: {
        en: {translation: translationsEn},
        ru: {translation: translationsRu},
        uz: {translation: translationsUz},
    },
    lng: "uz", // Change this value to switch languages
    fallbackLng: "uz", // if user language isn't available, use en as fallback
});
function App() {

  return (
    <>
        <Header />
        <Content />
        <Footer />
    </>
  )
}

export default App
