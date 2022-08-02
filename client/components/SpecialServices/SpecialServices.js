import React from 'react';
import img1 from '../../images/about-sec1.jpg';
import img2 from '../../images/about-sec2.jpg';
import img3 from '../../images/about-sec3.jpg';
import style from './specialservices.module.scss';

const serviceDetails = [
    {
        id: '1',
        title: 'Hotel Reservation',
        text: 'Auctor neque vitae tempus quam pellentesque nec nam. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Velit euismod in pellentesque massa placerat duis ultricies. Tempus egestas sed sed risus pretium quam.',
        link: '/hotels',
        image: img1,
    },
    {
        id: '2',
        title: 'Luxury Bath',
        text: 'Auctor neque vitae tempus quam pellentesque nec nam. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Velit euismod in pellentesque massa placerat duis ultricies. Tempus egestas sed sed risus pretium quam.',
        link: '/bath',
        image: img2,
    },
    {
        id: '3',
        title: 'Couple Area',
        text: 'Auctor neque vitae tempus quam pellentesque nec nam. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Velit euismod in pellentesque massa placerat duis ultricies. Tempus egestas sed sed risus pretium quam.',
        link: '/hotels',
        image: img3,
    },
];

function SpecialServices() {
    return (
        <div className={style.SpecialServices}>
            <div className={style.SpecialServices_main}>
                <h1>Special Services</h1>
                <p>Choose the rith Destination. The main benefits to choose Rooms</p>
            </div>
        </div>
    );
}

export default SpecialServices;
