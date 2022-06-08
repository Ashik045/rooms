import Image from 'next/image'
import React from 'react'
import style from './propertyitem.module.scss'

const PropertyItem = ({itemDetails}) => {
  return (
    <div className={style.property_item}>
        <Image src={itemDetails.img} alt="item"  className={style.property_item_img}/>

        <div className={style.property_item_txt}>
            <h3>{itemDetails.title}</h3>
            <h4>{itemDetails.items}</h4>
          </div>
    </div>
  )
}

export default PropertyItem