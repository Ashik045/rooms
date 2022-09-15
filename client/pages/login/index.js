import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import Swal from 'sweetalert2'
import Footer from '../../components/Footer/Footer'
import Input from '../../components/Input/Input'
import Navbar from '../../components/Navbar/Navbar'
import { Context } from '../../ContextApi/Context'
import styles from '../../styles/login.module.scss'

const index = () => {
    const [inpval, setInpval] = useState({
        email: '',
        password: '',
    })
    const [err, setErr] = useState(false)
    const router = useRouter()
    const {user, loading, error, dispatch} = useContext(Context);

    const inpDetail = [
        {
            id: 2,
            name: "email",
            type: 'email',
            placeholder: 'Email',
            required: true,
            errMsg: 'Please provide a valid email address!',
        },
        {
            id: 3,
            name: "password",
            type: 'password',
            placeholder: 'Password',
            required: true,
            errMsg: 'This field is required!',
        },
    ]
    
    const handleChng= (e) => {
        setInpval({...inpval, [e.target.name]: e.target.value})
    }
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        width: "250px",
        padding: '.75rem',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type: 'LOGIN_START'})

        try {
          const res = await axios.post('http://localhost:4000/api/user/login', inpval)
          dispatch({type: 'LOGIN_SUCCESS', payload: res.data.message})
          
            setInpval({
              password: '',
            })
    
            Toast.fire({
                icon: 'success',
                title: 'Log In Succesfully.'
              })
            router.push('/')
        } catch (error) {
          dispatch({type: 'LOGIN_FAILURE'})
            console.log(error);
            setErr(true)
        }
    }

  return (
    <div className={styles.login_page}>
        <Navbar />
        <div className={styles.login_page_main}>
        <div className={styles.signup_page_form}>
        <h3>LogIn Here</h3>
            <form action="" onSubmit={handleSubmit}>
              {inpDetail.map((inpdetail) => {
                return <Input {...inpdetail} key={inpdetail.id} value={inpval[inpdetail.name]} onChange={handleChng}/>
              })}

                {err && <p style={{color: 'red', marginBottom: '0px'}}>Authentication failed!</p>}
                  <input type="submit" value="Log In" className={styles.submit_btn} />
                  <Link href="/signup">
                      <a href="" className={styles.login_link}>
                          Don't have an account? Register hare..
                      </a>
                  </Link>
            </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default index