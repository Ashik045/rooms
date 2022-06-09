import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import style from '../../styles/hotels.module.scss';

const index = () => {
    const {query} = useRouter()
    console.log(query);
    const [openDate, setOpenDate] = useState(false)
    const [destination, setDestination] = useState(query.destination)
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

      const handleBtn = (name) => {
        //  setOptions((prev) => {
        //      return {
        //          ...prev,
        //         [name]: options[name]
        //      }
        //  })
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log(destination);
        console.log(options);
        console.log(date[0]);
    }
return (
    <div className={style.hotels_page}>
        <Navbar />
        <Header type="hList" />

        <div className={style.hotels_page_main}>
            <div className={style.hotels_page_search}>
                <h2>Search</h2>
                <div className={style.search_item}>
                    <label >Destination</label>
                    <input type="text" placeholder={destination} value={destination} />
                </div>

                <div className={style.search_item}>
                    <label>Check-in Date</label>
                    <span  className={style.search_item_date} onClick={() => setOpenDate(!openDate)}>{`${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                            editableDateInputs
                            onChange={item => setDate([item.selection])}
                            ranges={date}
                            className={style.header_search_calender}
                            minDate={new Date()}
                    />}
                </div>

                <div className={style.search_item}>
                    <label style={{marginBottom: '11px', marginTop: '10px'}}>Options</label>
                    <div className={style.search_item_option}>
                        <span  className={style.option_txt}>Min price <small className={style.night_batch}>per night</small></span>
                        <input type="number" className={style.option_inp} min={1}/>
                    </div>

                    <div className={style.search_item_option}>
                        <span  className={style.option_txt}>Max price <small className={style.night_batch}>per night</small></span>
                        <input type="number" className={style.option_inp} max={5000} min={1}/>
                    </div>

                    <div className={style.search_item_option}>
                        <span  className={style.option_txt}>Adult</span>
                        <input type="number" min={1} className={style.option_inp} placeholder={options.adult} />
                        {/* value={options.adult} onChange={handleBtn("adult")} */}
                    </div>

                    <div className={style.search_item_option}>
                        <span  className={style.option_txt}>Children</span>
                        <input type="number" className={style.option_inp} placeholder={options.children} min={0}   />
                    </div>

                    <div className={style.search_item_option}>
                        <span  className={style.option_txt}>Room</span>
                        <input type="number" className={style.option_inp} placeholder={options.room} min={1} />
                    </div>
                </div>
                <button className={style.header_search_btn} type="button" onClick={handleSubmit}>Search</button>
            </div>

            <div className={style.hotels_page_result}>
                <h1>result</h1>
            </div>
        </div>

        <Newsletter />
        <Footer />
    </div>
);
}

export default index;
