
import Image from 'next/image';
import React from 'react';
import style from './LovelyHome.module.scss';

function LovelyHome({ hmDetails }) {
    return (
        <div className={style.lovely_home} >
            <div >
                <Image className={style.lovely_home_img} src={hmDetails.images[0]} alt="Lovely Hotel" 
                height={200} width={250} />
            </div>
           
            <h3>{hmDetails.name}</h3>
            <p>{hmDetails.city}</p>
            <p className={style.lovely_home_price}> Starting from {hmDetails.chipestprice}</p>

            <div className={style.lovely_home_btm}>
                <span>{hmDetails.rating}</span>
                {hmDetails.rating > 9 ? <p>Wonderful</p> : <p>Exceptional</p>}
            </div>
        </div>
    );
}

export default LovelyHome;
