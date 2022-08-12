import React from 'react'
import style from './formcomponent.module.scss'


const PersonalInfo = ({fnVal, lnVal, unVal, fnChng, lnChng, usChng}) => {
  return (
    <div className={style.exact_form}>
        <input className={style.exact_form_inp} type="text" placeholder="First Name" value={fnVal} onChange={fnChng}/>
        <input className={style.exact_form_inp} type="text" placeholder="Last Name" value={lnVal} onChange={lnChng}/>
        <input className={style.exact_form_inp} type="text" placeholder="Username" value={unVal} onChange={usChng}/>
    </div>
  )
}

export default PersonalInfo