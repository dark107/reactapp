import React from 'react';
import "../componets/Footer.css";

const Footer = () => {
    return (
        <div className="footer-contaniner">

            <div className="footer-about">
                <div className="title-about">
                    <h1>Sobre Urano Developer </h1>

                    <p>Urano Developer nace de una motivacion personal al mismo tiempo
                        Con la intencion de poder compartir un poco del conocimiento practico que se adquiere.
                        mostrar avances y capacidades el uso de Librerias , Framework, Base de Datos, Repositorios entre otros 
                                            </p>
                </div>
            </div>

            <div className="footer-conect">
                <div conect-content>
                    <h1>Facebook</h1>
                    <h1>Instagram</h1>
                    <h1>Telegram</h1>
                    <h1>Linkedin</h1>
                </div>
            </div>

            <div className="footer-contact"> 
                <p>correo eletronico@</p>
                <p>Telefono - contacto</p>
                <p>git-hub</p>
            </div>

        </div>
    )
}

export default Footer
