import React from 'react';
import LovelyHome from '../LovelyHome/LovelyHome';
import style from './lovelyhomedetail.module.scss';

function LovelyHomeDetail({ homeDetails }) {
    return (
        <div className={style.LovelyHome_detail}>
            <h2>Guests Love Homes</h2>
            <div className={style.LovelyHome_detail_main}>
                {homeDetails.map((details) => (
                    <LovelyHome hmDetails={details} key={details.key} />
                ))}
            </div>
        </div>
    );
}

export default LovelyHomeDetail;
