import React, { useEffect } from 'react';
import "../Styles/Body.css";
import Render from "../Banner Web Principal Corrección.png";
import ImgTitle from "../Logotype 1-01.png";
import BannerBeneficios from "../Banner web beneficios.jpg";
import LogoMejora from "../icon mejora de rendimiento.png";
import LogoRec from "../icon recuperación rápida.png";
import LogoRes from "../Icon Aumento Resistencia-01.png";
import LogoMood from "../icon mood.png";
import LogoMental from "../icon enfoque mental-01.png";
import LogoPlanta from "../icon Sistema inmunológico-01.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FondoCarousel from "../Fondo.jpg";
import Product1 from "../Polar + Tapa Blanca.png";
import Product2 from "../Polar + 2 Tapas.png";
import Product3 from "../Polar+2 Tapas+ bag.png";
import arrowLeftImage from "../Flecha izq.png"
import arrowRightImage from "../Flecha der.png";


function Body() {
    useEffect(() => {
        const benefitsSection = document.getElementById('Benefits');
        const title = document.getElementById('BeneficiosTitle');
        const description = document.getElementById('BeneficiosDescription');
        const benefitsLeft = document.getElementById('BenefitsLeft');
        const benefitsRight = document.getElementById('BenefitsRight');

        const productsSection = document.getElementById('Products');
        const productsTitle = document.getElementById('ProductsTitle');
        const productsDescription = document.getElementById('ProductsDescription');
        const productCarousel = document.getElementById('ProductCarousel');

        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const benefitsSectionTop = benefitsSection.offsetTop;
            const productsSectionTop = productsSection.offsetTop;
            const windowHeight = window.innerHeight;

            if (scrollPosition > benefitsSectionTop - windowHeight / 1.2) {
                title.classList.add('animate-title');
                description.classList.add('animate-description');
                benefitsLeft.classList.add('animate-left');
                benefitsRight.classList.add('animate-right');
            } else {
                title.classList.remove('animate-title');
                description.classList.remove('animate-description');
                benefitsLeft.classList.remove('animate-left');
                benefitsRight.classList.remove('animate-right');
            }

            if (scrollPosition > productsSectionTop - windowHeight / 1.2) {
                productsTitle.classList.add('animate-title');
                productsDescription.classList.add('animate-description');
                productCarousel.classList.add('animate-carousel');
            } else {
                productsTitle.classList.remove('animate-title');
                productsDescription.classList.remove('animate-description');
                productCarousel.classList.remove('animate-carousel');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div id="BodyContainer">
            <section id="Render">
                <img src={Render} id="RenderImg" alt="Polar Banner"></img>
                <div className="overlay">
                    <img src={ImgTitle} id="ImgTitle"></img>
                    <p id="PolarDescription"> Descubrí el <span style={{ color: "white", fontWeight: "bold" }}>poder</span> de la inmersión en frío y experimentá una <span style={{ color: "white", fontWeight: "bold" }}>recuperación</span> y un <span style={{ color: "white", fontWeight: "bold" }}>rendimiento</span> óptimo </p>                    <button id="ShopAllButton">Ver Productos </button>
                </div>
            </section>

            <section id="Benefits">
                <img src={BannerBeneficios} id="BannerBeneficios"></img>
                <div id="TitleandDescription">
                    <p id="BeneficiosTitle" className="hide"> POR QUÉ HACER INMERSIÓN </p>
                    <p id="BeneficiosDescription" className="hide"> Conocé los beneficios de esta innovación del rendimiento </p>
                </div>
                <div id="BenefitsLeft" className="hide">
                    <img src={LogoMejora} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Mejora de Rendimiento</p>
                    <p id="BenefitsDescription">Sumergirse en agua fría después de entrenar ayuda a reducir la inflamación muscular, acelerar la recuperación y mejorar el rendimiento atlético en general.</p>
                    <img src={LogoRec} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Recuperación Rápida</p>
                    <p id="BenefitsDescription">Los baños de inmersión en frío estimulan la circulación sanguinea y ayudan a eliminar el ácido láctico y otras toxinas acumuladas durante el ejercicio, lo que acelera el proceso de recuperación muscular.</p>
                    <img src={LogoRes} id="LogoBenefitsR"></img>
                    <p id="BenefitsTitle">Aumento de la resistencia</p>
                    <p id="BenefitsDescription">Los baños fríos fortalecen el sistema cardiovascular, mejoran la resistencia y aumentan la capacidad del cuerpo para soportar el estrés físico./</p>

                </div>
                <div id="BenefitsRight" className="hide">
                    <img src={LogoMood} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Mejora del estado de ánimo</p>
                    <p id="BenefitsDescription">Sumergirse en agua fría después de entrenar ayuda a reducir la inflamación muscular, acelerar la recuperación y mejorar el rendimiento atlético en general.</p>
                    <img src={LogoMental} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Potenciación del enfoque mental</p>
                    <p id="BenefitsDescription">Sumergirse en agua fría después de entrenar ayuda a reducir la inflamación muscular, acelerar la recuperación y mejorar el rendimiento atlético en general.</p>
                    <img src={LogoPlanta} id="LogoBenefits"></img>
                    <p id="BenefitsTitle">Estimulación del sistema inmunológico</p>
                    <p id="BenefitsDescription">Sumergirse en agua fría después de entrenar ayuda a reducir la inflamación muscular, acelerar la recuperación y mejorar el rendimiento atlético en general.</p>

                </div>
            </section>

            <section id="Products">
                <p id="ProductsTitle" className="hide"> PRODUCTOS POLAR</p>
                <p id="ProductsDescription" className="hide">Polar te ofrece los mejores productos de recuperación deportiva que no se encuentran en las tiendas tradicionales </p>
                <div id="ProductCarousel" >
                    <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false} showIndicators={false}>
                        <div id="divProduct">
                            <img src={Product1} alt="Image 1" id="fotoProduct1" />
                            <div className="slide-legend">
                                <h3>Cápsula de inmersión en frío </h3>
                                <p> $4000 </p>
                            </div>
                        </div>
                        <div id="divProduct">
                            <img src={Product2} alt="Image 2" id="fotoProduct2" />
                            <div className="slide-legend">
                                <h3>CCápsula de inmersión en frío + Covertor</h3>
                                <p>$5000 </p>
                            </div>
                        </div>
                        <div id="divProduct">
                            <img src={Product3} alt="Image 3" id="fotoProduct3" />
                            <div className="slide-legend">
                                <h3>Cápsula de inmersión en frío + Covertor + Mochila para transporte </h3>
                                <p>$6000 </p>
                            </div>
                        </div>

                    </Carousel>
                </div>
            </section>

            <section id="Sorteo">
                Sorteo
            </section>
            <section id="PolarSocial">
                SOCIALS
            </section>
        </div>
    )
}

export default Body;
