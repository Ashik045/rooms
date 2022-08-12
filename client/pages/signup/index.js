import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Email from '../../components/FormComponents/Email'
import PersonalInfo from '../../components/FormComponents/PersonalInfo'
import SocialLink from '../../components/FormComponents/SocialLink'
import Navbar from '../../components/Navbar/Navbar'
import styles from '../../styles/signuppage.module.scss'

const index = () => {
  const Router = useRouter()
  const [page, setPage] = useState(0)
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [pass, setPass] = useState('')
  const [passErr, setPassErr] = useState(false)
  const [conPass, setConPass] = useState('')
  const [conPassErr, setConPassErr] = useState(false)

  const [fName, setfName] = useState('')
  const [fNameErr, setfNameErr] = useState(false)
  const [lName, setlName] = useState('')
  const [lNameErr, setlNameErr] = useState(false)
  const [userName, setUserName] = useState('')
  const [userNameErr, setUserNameErr] = useState(false)

  const [facebookUrl, setFacebookUrl] = useState('')
  const [facebookUrlErr, setFacebookUrlErr] = useState(false)
  const [twitterUrl, setTwitterUrl] = useState('')
  const [twitterUrlErr, setTwitterUrlErr] = useState(false)


  const eChng = (e) => {
    setEmail(e.target.value);
  };
  const pChng = (e) => {
    setPass(e.target.value);
  };
  const cChng = (e) => {
    setConPass(e.target.value);
  };

  const fChng = (e) => {
    setfName(e.target.value);
  };
  const lChng = (e) => {
    setlName(e.target.value);
  };
  const uChng = (e) => {
    setUserName(e.target.value);
  };

  const facebookUrlChng = (e) => {
    setFacebookUrl(e.target.value);
  };
  const twitterUrlChng = (e) => {
    setTwitterUrl(e.target.value);
  };

  const PageTitle = ["Sign Up", "Personal Info", "Social Links"]

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email: email,
      pass: pass,
      conPass: conPass,
      fName: fName,
      lName: lName,
      userName: userName,
      facebookUrl: facebookUrl,
      twitterUrl: twitterUrl,
    }


    // setEmailErr(false)
    
  }

  const inputErrHandler = () => {
      if(fName === "") {
      setFNameErr(true)
    } else if(lName === "") {
      setLNameErr(true)
    } else if(userName === "") {
      setUserNameErr(true)
    } else if(facebookUrl === "") {
      setFacebookUrlErr(true)
    } else {
      console.log(userDetails);
      Router.push('/login')
    }
  }

  const PageBody = function () {
    if(page === 0) {
      return <Email eVal={email} pVal={pass} cVal={conPass} eChng={eChng} pChng={pChng} cChng={cChng} emailErr={emailErr} setEmailErr={setEmailErr} setPassErr={setPassErr} setConPassErr={setConPassErr} passErr={passErr} conPassErr={conPassErr} inputErrHandler={inputErrHandler}/>;
    } else if (page === 1) {
      return <PersonalInfo fnVal={fName} lnVal={lName} unVal={userName} fnChng={fChng} lnChng={lChng} usChng={uChng}  />
    } else {
      return <SocialLink facebookUrl={facebookUrl} twitterUrl={twitterUrl} facebookUrlChng={facebookUrlChng} twitterUrlChng={twitterUrlChng}  />
    }
  }

  return (
    <div className={styles.signup_page}>
        <Navbar />
        <div className={styles.signup_page_main}>
            <div className={styles.signup_page_form}>
              <div className={styles.signup_progress}>
                <div className={styles.signup_progress_widht} style={{width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%'}}></div>
              </div>
              <div className={styles.form_container}>
                <div className={styles.form_header}>
                  <h3>{PageTitle[page]}</h3>
                </div>

                <form action="" onSubmit={handleSubmit}>
                  <div className={styles.form_body}>
                    <h3>{PageBody()}</h3>
                  </div>

                <div className={styles.form_footer}>
                  {page !== 0 && ( <button className={styles.form_btns} style={{marginRight: "3px"}} onClick={() => setPage((current) => current - 1)}>Prev</button>
                  )}
                  {page !== PageTitle.length - 1 &&( <button className={styles.form_btns} style={{marginLeft: "3px"}} onClick={() => setPage((current) => current + 1)}>Next</button>
                  )} 
                </div>
                
                  {page === 2 && (
                    <input type="submit" value="Submit" className={styles.submit_btn}/>
                  )}
                  

                </form>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default index