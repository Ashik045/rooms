import React from 'react'
import style from './formcomponent.module.scss'


const SocialLink = ({facebookUrl, facebookUrlChng, twitterUrl, twitterUrlChng}) => {
  return (
    <div className={style.exact_form}>
        <input className={style.exact_form_inp} type="text" placeholder="Facebook Link" value={facebookUrl} onChange={facebookUrlChng} required/>
        <input className={style.exact_form_inp} type="text" placeholder="Twitter Link" value={twitterUrl} onChange={twitterUrlChng}/>
    </div>
  )
}

export default SocialLink 