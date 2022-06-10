import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBath, FaBed } from 'react-icons/fa'
import style from './searchitem.module.scss'

const SearchItem = ({results}) => {
  return (
    <div className={style.search_item}>
        <div className={style.search_item_img} style={{position: 'relative'}}>
            <Link href="/hotels/12">
                <Image src={results.image} layout="fill" objectFit='cover'/>
            </Link>
        </div>

        <div className={style.search_item_details}>
            <Link href="/hotels/12">
                <h3>{results.title}</h3>
            </Link>
            <p>{results.desc}</p>
            <span className={style.free}>Free dining room</span>
            <div className={style.search_item_bed}>
                <p style={{marginRight: '8px'}}><FaBed size={19}  className={style.search_item_bed_icon}/> {results.sleep}</p>
                <p><FaBath className={style.search_item_bed_icon} />{results.bathroom}</p>
            </div>
        </div>

        <div className={style.search_item_pricing}>
            <div className={style.search_item_priceing_rating}>
                {results.rating >= 9 ? (<p className={style.priceing_rating}>Excellent</p>) : (<p className={style.priceing_rating}>Comfort</p>)} 
                <span>{results.rating}</span>
            </div>
            <div className={style.search_item_price}>
                <p>${results.price}</p>

                <Link href="/hotels/12">
                    <button type='button'>View Details</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem