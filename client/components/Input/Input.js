import React, { useState } from 'react';
import style from './input.module.scss';

const Input = (inpdetail) => {
    const [focus, setFocus] = useState(false)
    const {errMsg, onChange, ...others} = inpdetail;

    const handleBlue = () => {
        setFocus(true)
    }
  return (
    <div className={style.input_div}>
        <input {...others} onChange={onChange} onBlur={handleBlue} focused={focus.toString()} />

        <span>{errMsg}</span>
    </div>
  )
}

export default Input