import { useState } from "react";
import img1 from "../../assets/images/3.png";
import img2 from "../../assets/images/4.png";
import img3 from "../../assets/images/5.png";
import img4 from "../../assets/images/6.png";
import img5 from "../../assets/images/7.png";
import img6 from "../../assets/images/8.png";
import img7 from "../../assets/images/9.png";
import img8 from "../../assets/images/2.png";
import "../../assets/Products.css";

const ProductsData = [
    { id: 1, img: img1, name: "HI-TECH SHANPAN", info: "Zamonaviy fasad: yuqori qismida vertikal relyef, pastda rombsimon naqsh. Mustahkam, hovli interieriga mos.", price: "1 200" },
    { id: 2, img: img2, name: "PATINA NAFIS", info: "Yog'och nozik gulli naqshlar bilan o'yilgan va oltin rangli oyoqlarga ega. Ko'rpa to'shak va boshqa narsalarni saqlash uchun qulay.", price: "1 000" },
    { id: 3, img: img3, name: "SANDIQ BROWN", info: "Markazda aylanma va naqshli quyosh shaklidagi medalyon joylashgan. Klassik uslubdagi mustahkam quti.", price: "750" },
    { id: 4, img: img4, name: "MARAKANSKIY", info: "Fasadda sharqona geometriya (panjara) va oltin ramkalar. Bir eshikli tumba, zal yoki yotoqxonaga mos.", price: "1 800" },
    { id: 5, img: img5, name: "TORTMA", info: "Baland, joy tejaydi; yuqorida kichik tortma, pastda ochiladigan bo‘lim. Yo‘lak va kichik xonalar uchun ideal", price: "700" },
    { id: 6, img: img6, name: "NEOKLASSIK TORTMA", info: "Keng tortma; rombsimon relyef va oltin detallar. Neoklassik ko‘rinishda.", price: "650" },
    { id: 7, img: img7, name: "KOMPLEKT BESHIK", info: "Dantel va to‘lqinli pardalar, marjonsimon ilkalar va yog‘och finallar. An’anaviy uy-to‘y atributlari sifatida qo‘llanadi.", price: "1 500" },
    { id: 8, img: img8, name: "BESHIK", info: "BESHIK", price: "600" },
];

const formatPrice = (p) => {
    const n = Number(String(p).replace(/\s/g, ""));
    if (Number.isNaN(n)) return `${p} 000 so'm`;
    return n.toLocaleString("uz-UZ") + " 000 so'm";
};

export default function Products(){
    const STEP = 2;   // +2 qo'shish
    const BASE = 4;   // start: 4 ta (2x2)
    const total = ProductsData.length;
    const [visible, setVisible] = useState(Math.min(BASE, total));

    const canShowMore = visible < total;
    const allVisible  = visible >= total;
    const canShowLess = visible > BASE && !allVisible; // +2 chiqqanda

    const showMore = () => setVisible(v => Math.min(total, v + STEP));
    const showLess = () => setVisible(v => Math.max(BASE,  v - STEP));
    const closeAll = () => setVisible(Math.min(BASE, total));

    const list = ProductsData.slice(0, visible);

    return (
        <section id="Products" className="products-section" aria-label="Mahsulotlar">
            <header className="products-header">
                <h2 className="section-title">Mahsulotlar</h2>
            </header>

            {/* yon skrol yo'q, qat'iy grid */}
            <div className="products-grid" role="list" aria-label="Mahsulotlar ro'yxati">
                {list.map(item => (
                    <article className="product-card" key={item.id} role="listitem">
                        <div className="img-box">
                            <img src={item.img} alt={item.name} loading="lazy" />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name" title={item.name}>{item.name}</h3>
                            <p className="product-desc">{item.info}</p>
                            <div className="product-meta">
                                <span className="product-price">{formatPrice(item.price)}</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="products-controls" aria-live="polite">
                {canShowMore && (
                    <button type="button" className="btn btn-primary" onClick={showMore}>Ko‘proq ko‘rsat (+2)</button>
                )}
                {canShowLess && (
                    <button type="button" className="btn btn-ghost" onClick={showLess}>Kamroq ko‘rsat (−2)</button>
                )}
                {allVisible && total > BASE && (
                    <button type="button" className="btn btn-danger" onClick={closeAll}>Barchasini yopish</button>
                )}
            </div>
        </section>
    );
}
