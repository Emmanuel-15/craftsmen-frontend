import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import craftsmenLogo from '../../../assets/img/dp.jpeg';

export default function Footer() {

    return (

        <footer id="footer">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 text-lg-left text-start">
                        <div className="copyright">
                            &copy; Copyright <strong>Craftsmen</strong>. All Rights Reserved.
                        </div>
                        {/* <div className="credits">

                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <nav className="footer-links text-lg-right text-end pt-2 pt-lg-0">
                            <a href="/" className="scrollto">Home</a>
                            <a href="/about-us" className="scrollto">About Us</a>
                            <a href="/privacy-policy">Privacy Policy</a>
                            <a href="/terms-of-use">Terms of Use</a>
                        </nav>
                    </div>
                </div>
            </div>
            <FloatingWhatsApp
                phoneNumber="9370230639"
                accountName="Craftsmen"
                avatar={craftsmenLogo}
                allowEsc
                allowClickAway
                notification
                notificationSound
                statusMessage="Craftsmen at your service"
            />
        </footer>
    );
}