import React from 'react';
import style from './formcomponent.module.scss';

const Email = ({eVal, pVal, cVal, cChng, eChng, pChng, emailErr, passErr, conPassErr, setEmailErr, setPassErr, setConPassErr, inputErrHandler}) => {
  const onBlur = () => {
    if(eVal === "") {
      setEmailErr(true);
    } else if(pVal === "") { 
      setPassErr(true);
    } else if (cVal === "" || cVal !== pVal) {
      setConPassErr(true);
    };
  };
  
  return (
    <div className={style.exact_form}>
        <input className={style.exact_form_inp} placeholder="Email" type="text" value={eVal} onChange={eChng} required onBlur={onBlur} />
        {emailErr && <p clasName={style.form_err} style={{color: 'red', marginTop: '-13px',fontSize: '14px', marginBottom: '10px'}}>Provide a valid email address</p>}
        <input className={style.exact_form_inp} type="Password" placeholder="Password" value={pVal} onChange={pChng} onBlur={onBlur}/>
        {passErr && <p clasName={style.form_err} style={{color: 'red', marginTop: '-13px',fontSize: '14px', marginBottom: '10px'}}>Password is required</p>}
        <input className={style.exact_form_inp} type="Password" placeholder="Confirm Password" value={cVal} onChange={cChng} onBlur={onBlur}/>
        {conPassErr && <p clasName={style.form_err} style={{color: 'red', marginTop: '-13px',fontSize: '14px', marginBottom: '10px'}}>Password doesn't matched</p>}
    </div>
  )
}

export default Email