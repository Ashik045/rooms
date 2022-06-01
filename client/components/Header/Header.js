/* eslint-disable prettier/prettier */
import Link from 'next/link';
import React, { useState } from 'react';
import {
    MdDirectionsCarFilled,
    MdFlight,
    MdLocalHotel,
    MdLocalTaxi,
    MdMapsHomeWork
} from 'react-icons/md';
import style from './header.module.scss';

function Header() {
    const menus = [
        {
            id: 1,
            icon: <MdMapsHomeWork />,
            txt: 'Stays',
            isActive: true
        },
        {
            id: 2,
            icon: <MdFlight />,
            txt: 'Flights',
        },
        {
            id: 3,
            icon: <MdDirectionsCarFilled />,
            txt: 'Car rentals',
        },
        {
            id: 4,
            icon: <MdLocalHotel />,
            txt: 'Attractions',
        },
        {
            id: 5,
            icon: <MdLocalTaxi />,
            txt: 'Ariport taxis',
        },
    ];

    const { user } = useState(false);

    
    return (
        <div className={style.header}> 
            <div className={style.header_main}>
                <div className={style.header_menus}>
                    {menus.map((menu) => (
                        <div className={`${menu.isActive ? style.header_menu_item_active : style.header_menu_item }`} key={menu.id}>
                            <h3>
                                {menu.icon} {menu.txt}
                            </h3>
                        </div>
                    ))}
                </div>

                <h1>Amazing hostel for the free spirited traveler</h1>
                <p>A life time of discounts? - We have everything you need. It&apos;s simple: the longer you stay, the more you save!</p>

                {user ? (
                    <p>Welcome {user.username}.</p>
                ): (
                    <Link href="login">
                        <button className={style.reg_btn} type="button">
                            Sign In / Register
                        </button>
                </Link>
                )}
                
            </div>
        </div>
    );
}

export default Header;
