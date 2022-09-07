/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FaCalendarAlt, FaHome, FaNewspaper, FaUserFriends } from 'react-icons/fa';
import {
    MdLocalHotel,
    MdLocalTaxi,
    MdMapsHomeWork
} from 'react-icons/md';
import style from './header.module.scss';


function Header({type}) {
    const [openDate, setOpenDate] = useState(false)
    const [openOption, setOpenOption] = useState(false)
    const [destination, setDestination] = useState('')
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);


    const router = useRouter()

    const menus = [
        {
            id: 1,
            icon: <FaHome />,
            txt: 'Home',
            isActive: false,
            href: '/'
        },
        {
            id: 2,
            icon: <MdMapsHomeWork />,
            txt: 'Hotels',
            isActive: false,
            href: '/hotels'
        },
        {
            id: 3,
            icon: <FaNewspaper />,
            txt: 'Blogs',
            isActive: false,
            href: '/blogs'
        },
        {
            id: 4,
            icon: <MdLocalHotel />,
            txt: 'Car rentals',
            isActive: false,
            href: '/'
        },
        {
            id: 5,
            icon: <MdLocalTaxi />,
            txt: 'Taxis',
            isActive: false,
            href: '/'
        },
    ];



    const handleBtn = (name, operation) => {
        setOptions((prev) => ({
                ...prev,
                [name]: operation === "i" ? options[name] + 1 :  options[name] - 1
            }))
    }

    const handleCalender = () => {
        setOpenDate(!openDate)
        setOpenOption(false)
    }

    const handleRoomss = () => {
        setOpenOption(!openOption)
        setOpenDate(false)
    }

    const states = {
        destination,
        date,
        options
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // router.push(`/hotels?destination=${destination}&options=${options.adult}`)
        router.push({
            pathname: '/hotels',
            query: states
        })
       
        console.log(states);
    }

    const { user } = useState(false);

    return (
        <div className={style.header}>
            <div className={style.header_main}>
                <div className={style.header_menus} style={{ paddingBottom: type === "hList" && '0px'}}>
                    {menus.map((menu) => (
                        <Link href={menu.href} key={menu.id}>
                        <div

                            className={`${
                                menu.isActive ? style.header_menu_item_active : style.header_menu_item
                            }`}
                        >
                            <h3>
                                {menu.icon} {menu.txt}
                            </h3>
                        </div>
                        </Link>
                    ))}
                </div>

                {type !== "hList" && (
                    <>
                        
                <h1>Amazing hostel for the free spirited traveler.</h1>
                <p>
                    A life time of discounts? - We have everything you need. It&apos;s simple: the
                    longer you stay, the more you save!
                </p>

                {user ? (
                    <p>Welcome {user.username}.</p>
                ) : (
                    <Link href="login">
                        <button className={style.reg_btn} type="button">
                            Sign In / Register
                        </button>
                    </Link>
                )}

                {/* header search */}
                    <div className={style.header_search}>
                            <div className={style.header_search_item}>
                                <MdLocalHotel className={style.header_search_icon_first} />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className={style.searc_inp}
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                />
                            </div>

                            <div className={style.header_search_item}>
                                <FaCalendarAlt className={style.header_search_icon} />
                                <span onClick={handleCalender} className={style.header_search_date}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                                </span>
                                    {openDate && <DateRange
                                        editableDateInputs
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className={style.header_search_calender}
                                        minDate={new Date()}
                                    />}
                            </div>

                            <div className={style.header_search_item}>
                                <FaUserFriends className={style.header_search_icon_first} />
                                <span className={style.header_search_date} onClick={handleRoomss}>{`${options.adult} adult ${options.children} children ${options.room} room `}</span>
                            {openOption && <div className={style.search_options}>
                                <div className={style.search_option_item}>
                                    <span className={style.option_txt}>Adult</span>
                                    <div className={style.search_option_btnss}>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("adult", "d")} disabled={options.adult <= 1}>-</button>
                                        <span className={style.option_txt_num}>{options.adult}</span>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("adult", "i")}>+</button>
                                    </div>
                                </div>

                                <div className={style.search_option_item}>
                                    <span className={style.option_txt}>Children</span>
                                    <div className={style.search_option_btnss}>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("children", "d")} disabled={options.children <= 0}>-</button>
                                        <span className={style.option_txt_num}>{options.children}</span>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("children", "i")}>+</button>
                                    </div>
                                </div>

                                <div className={style.search_option_item}>
                                    <span className={style.option_txt}>Room</span>
                                    <div className={style.search_option_btnss}>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("room", "d")} disabled={options.room <= 1}>-</button>
                                        <span className={style.option_txt_num}>{options.room}</span>
                                        <button className={style.option_btn} type="button" onClick={() => handleBtn("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}

                            </div>

                            <div className={style.header_search_item}>
                                <button className={style.header_search_btn} type="button" onClick={handleSubmit}>Search</button>
                            </div>
                        </div>

                </>
                )}
            </div>
        </div>
    );
}

export default Header;
