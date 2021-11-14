import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div >
            <div className="footer align-items-center text-center ">
                <div>
                    <h3><i class="fas fa-mobile-alt icons"></i></h3>
                    <h3 className="text-white">Call us</h3>
                    <p className="text-white">22345-12233</p>
                </div>
                <div>
                <h3><i class="far fa-map icons"></i></h3>
                <h3 className="text-white">Address</h3>
                <p className="text-white">730/C, NG- 11, Shahid Baki Sarak, Khilgoan, <br />
                 Opposite of Sonali Bank, Beside Walton <br />
                 Showroom. Dhaka -1219, Bangladesh.</p>
                </div>
                <div>
                <h3><i class="fas fa-envelope icons"></i></h3>
                <h3 className="text-white">Email</h3>
                <p className="text-white">mahirasef30@gmail.com</p>
                </div>
            </div>
            <div className="footer-text text-center">
                <small>©Copyright 2021. All Rights Reserved by Bike Zone.</small>
            </div>
        </div>
    );
};

export default Footer;