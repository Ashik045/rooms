import Image from 'next/image'
import React from 'react'
import style from './LovelyHome.module.scss'

const LovelyHome = ({hmDetails}) => {
  return (
    <div className={style.lovely_home}>
        <Image src={hmDetails.img} alt="lovely home"  className={style.lovely_home_img}/>
        <h3>{hmDetails.title}</h3>
        <p>{hmDetails.location}</p>
        <p className={style.lovely_home_price}> Starting from {hmDetails.price}</p>

    <div className={style.lovely_home_btm}>
        <span>{hmDetails.rating}</span>
        {hmDetails.rating > 9 ? (<p>Wonderful</p>) :  (<p>Exceptional</p>)}
    </div>
    </div>
  )
}

export default LovelyHome