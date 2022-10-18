/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contexts } from '../../ContextUser/Contexts';
import './Login.scss';

const index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);
    const nevigate = useNavigate();
    const { loading, dispatch } = useContext(Contexts);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inpVal = {
            email,
            password,
        };
        dispatch({ type: 'LOGIN_START' });

        try {
            const res = await axios.post(
                'https://rooms-backend.up.railway.app/api/user/login',
                inpVal
            );

            if (res.data.message.isadmin) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.message.details });
                nevigate('/');
            } else {
                dispatch({ type: 'LOGIN_FAILURE' });
                setErr(true);
            }
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE' });
            setErr(true);
        }
    };

    return (
        <div className="login_page">
            <div className="login_page_main">
                <div className="signup_page_form">
                    <h3>Admin LogIn</h3>
                    <form action="" onSubmit={handleSubmit} className="form">
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <input
                            type="submit"
                            value="Log In"
                            className="submit_btn"
                            disabled={loading}
                        />
                        {err && (
                            <p style={{ color: 'red', marginBottom: '0px' }}>
                                Authentication failed!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default index;
