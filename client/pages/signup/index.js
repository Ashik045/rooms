/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Email from '../../components/FormComponents/Email';
import PersonalInfo from '../../components/FormComponents/PersonalInfo';
import SocialLink from '../../components/FormComponents/SocialLink';
import Navbar from '../../components/Navbar/Navbar';
import styles from '../../styles/signuppage.module.scss';

const index = () => {
    const Router = useRouter();
    const [page, setPage] = useState(0);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [conPass, setConPass] = useState('');

    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [userName, setUserName] = useState('');

    const [facebookUrl, setFacebookUrl] = useState('');
    const [twitterUrl, setTwitterUrl] = useState('');

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

    const PageTitle = ['Sign In', 'Personal Info', 'Social Links'];

    // const userDetails = {
    //   email: email,
    //   password: pass,
    //   firstname: conPass,
    //   fName: fName,
    //   lName: lName,
    //   userName: userName,
    //   facebookUrl: facebookUrl,
    //   twitterUrl: twitterUrl,
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/user/signup', {
                email,
                password: pass,
                firstname: fName,
                lastname: lName,
                username: userName,
                fblink: facebookUrl,
                twlink: twitterUrl,
            });

            console.log('signup successful');
            Router.push('/login');
        } catch (error) {
            console.log(error);
            console.log('signup failed');
        }
    };

    const PageBody = function () {
        if (page === 0) {
            return (
                <Email
                    eVal={email}
                    pVal={pass}
                    cVal={conPass}
                    eChng={eChng}
                    pChng={pChng}
                    cChng={cChng}
                />
            );
        }
        if (page === 1) {
            return (
                <PersonalInfo
                    fnVal={fName}
                    lnVal={lName}
                    unVal={userName}
                    fnChng={fChng}
                    lnChng={lChng}
                    usChng={uChng}
                />
            );
        }
        return (
            <SocialLink
                facebookUrl={facebookUrl}
                twitterUrl={twitterUrl}
                facebookUrlChng={facebookUrlChng}
                twitterUrlChng={twitterUrlChng}
            />
        );
    };

    return (
        <div className={styles.signup_page}>
            <Navbar />
            <div className={styles.signup_page_main}>
                <div className={styles.signup_page_form}>
                    <div className={styles.signup_progress}>
                        <div
                            className={styles.signup_progress_widht}
                            style={{ width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%' }}
                        />
                    </div>
                    <div className={styles.form_container}>
                        <div className={styles.form_header}>
                            <h3>{PageTitle[page]}</h3>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className={styles.form_body}>
                                <div>{PageBody()}</div>
                            </div>

                            <div className={styles.form_footer}>
                                {page !== 0 && (
                                    <span
                                        className={styles.form_btns}
                                        style={{ marginRight: '3px' }}
                                        onClick={() => setPage((curr) => curr - 1)}
                                    >
                                        Prev
                                    </span>
                                )}
                                {page !== PageTitle.length - 1 && (
                                    <span
                                        className={styles.form_btns}
                                        style={{ marginLeft: '3px' }}
                                        onClick={() => setPage((curr) => curr + 1)}
                                    >
                                        Next
                                    </span>
                                )}
                            </div>

                            {page === 2 && (
                                <input type="submit" value="Submit" className={styles.submit_btn} />
                            )}
                            <p style={{ marginTop: '10px' }}>
                                <Link href="/login"> Already have an account? Log in here..</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default index;
