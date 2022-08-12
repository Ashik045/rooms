import Link from 'next/link';
import React, { useState } from 'react';
import { MdLocalHotel } from 'react-icons/md';
import style from './Navbar.module.scss';

function Navbar() {
    const { user } = useState(false);
    return (
        <div className={style.navbar}>
            <div className={style.navbar_main}>
                <Link href="/">
                    <div className={style.nav_brand}>
                        <h2>
                            <MdLocalHotel size={30} style={{ marginRight: '5px' }} /> Rooms
                        </h2>
                    </div>
                </Link>

                <div className={style.registration}>
                    {user ? (
                        <Link href="/login">
                            <button className={style.reg_btn} type="button">
                                log out
                            </button>
                        </Link>
                    ) : (
                        <Link href="/signup">
                            <button className={style.reg_btn} type="button">
                                sign up
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
