import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import style from '../../styles/hotelDetail.module.scss';

const hotelDetails = () => {

    return (
    <div className={style.hotel_detail}>
        <Navbar />
        <Header type="hList"/>

        {/* hotel details */}
        <div className={style.hotel_detail_main}>
                <h1>details</h1>
        </div>
        
        <Newsletter />
        <Footer />
    </div>
    )
}

export default hotelDetails;
