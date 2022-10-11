/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import noImage from '../../Images/photo-camera.png';
import './New.scss';

function AddNew({ inputs, title, type }) {
    let dynamicInpVal;

    // dynamically change the state values
    switch (type) {
        case 'USER':
            dynamicInpVal = {
                username: '',
                name: '',
                email: '',
                password: '',
                address: '',
            };
            break;
        case 'PRODUCT':
            dynamicInpVal = {
                title: '',
                description: '',
                category: '',
                price: '',
                stock: '',
            };
            break;
        case 'BLOG':
            dynamicInpVal = {
                title: '',
                description: '',
                tags: '',
            };
            break;
        default:
            break;
    }
    const [userInp, setUserInp] = useState(dynamicInpVal);
    const [roomData, setroomData] = useState([]);
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const nevigate = useNavigate();
    // Dynamicaly change the data for different pages

    const handleChange = (e) => {
        setUserInp({ ...userInp, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            if (photo) {
                const data = new FormData();
                data.append('file', photo);
                data.append('upload_preset', 'upload');

                const uploadRes = await axios.post(
                    'https://api.cloudinary.com/v1_1/drbvugloj/image/upload',
                    data
                );
                const { url } = uploadRes.data;

                userInp.image = url;
            }

            console.log(userInp);
            setLoading(false);
            nevigate(
                `/${
                    type === 'USER'
                        ? 'users'
                        : type === 'PRODUCT'
                        ? 'products'
                        : type === 'HOTEL'
                        ? 'hotels'
                        : 'blogs'
                }`
            );
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    return (
        <div className="add_new">
            <Sidebar />

            <div className="new_page">
                <Navbar />

                <div className="new_page_main">
                    <div className="new_page_content">
                        <div className="image">
                            <p className="add_new_user">{title}</p>
                            <img src={photo ? URL.createObjectURL(photo) : noImage} alt="add img" />
                        </div>

                        <form onSubmit={handleSubmit} className="form">
                            <div className="form_inp">
                                <label htmlFor="file">
                                    Upload: <DriveFolderUploadIcon className="file_icon" />
                                </label>

                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    style={{ display: 'none' }}
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                />
                            </div>

                            {inputs.map((detail) => (
                                <Input
                                    key={detail.id}
                                    {...detail}
                                    value={userInp[detail.name]}
                                    onChange={handleChange}
                                />
                            ))}

                            <button
                                type="submit"
                                className="submit_btn"
                                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                            >
                                {loading ? 'Loading..' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNew;
