import React from 'react'
import LovelyHome from '../LovelyHome/LovelyHome'
import style from './lovelyhomedetail.module.scss'

const LovelyHomeDetail = ({homeDetails}) => {
  return (
    <div className={style.LovelyHome_detail}>
      <h2>Guests Love Homes</h2>
      <div className={style.LovelyHome_detail_main}>
        {homeDetails.map((details) => {
          return <LovelyHome hmDetails={details} key={details.key}/>
        })}
      </div>
    </div>
  )
}

export default LovelyHomeDetail