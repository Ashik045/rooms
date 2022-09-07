import Image from 'next/image';
import React from 'react';
import style from './propertyitem.module.scss';

function PropertyItem({ itemDetails, propertyList2 }) {
    return (
        <div className={style.property_item}>
            <Image src={itemDetails.img} alt="item" className={style.property_item_img} />

            <div className={style.property_item_txt}>
                <h3>{propertyList2.type}</h3>
                <h4>{propertyList2.count}</h4>
            </div>
        </div>
    );
}

export default PropertyItem;
