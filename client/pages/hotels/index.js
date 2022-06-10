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
import SearchItem from '../../components/SearchItem/SearchItem';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
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

    const resultDetail = [
        {
            id: 1, 
            image: img1,
            title: 'Standard Twin Room Private Shared Bathroom',
            desc: 'In addition to the standard of SHA Plus, all guests get free Wi-Fi in all rooms and free parking if arriving by car. Strategically situated in Hua Hin Beachfront, allowing you access and proximity to local attractions and sights. Do not leave before paying a visit to the famous Cicada Market. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.',
            sleep: '2 sleeps',
            bathroom: '1 bathroom', 
            rating: '9.5',
            price: '231'
        },
        {
            id: 3, 
            image: img3,
            title: 'Rest Detail Hotel Hua Hin Ibis Hua Hin',
            desc: 'This property is 5 minutes walk from the beach. Less than 5 minutes walk from Hua Hin Beach, the pet-friendly Ibis Hua Hin - SHA Plus offers modern air-conditioned rooms and an outdoor pool. An international restaurant and bar are available. Free parking is available.All rooms are equipped with a flat-screen TV, personal safe and tea/coffee making facilities. En suite bathrooms have shower facilities.Ibis Hua Hin - SHA Plus is a 5-minute drive from Cicada Night Market. It is 19 km from Mrigadayavan Palace and a 3-hour drive from Bangkok City.Guests can arrange day trips or rent bicycles at the tour desk. The hotel also provides laundry and dry cleaning services. Luggage can be stored at the 24-hour front desk.Continental breakfast and international dishes are served at It is All About Taste restaurant. The Lobby Bar provides a casual setting to enjoy drinks.This is our guest favourite part of Hua Hin, according to independent reviews..',
            sleep: '3 sleeps',
            bathroom: '2 bathroom', 
            rating: '8.9',
            price: '199'
        },
        {
            id: 2, 
            image: img2,
            title: 'Standard Twin Room Private Shared Bathroom',
            desc: 'The apartment is a 5-minute walk to Market Village Shopping Centre. Hua Hin Night Market is a 15-minute walk away. Featuring a balcony with mountain and city views, each spacious air-conditioned room is equipped with a flat-screen satellite TV, fridge and seating area. Shower facilities are included in an en suite bathroom. Local eateries can be reached within a 5-minute walk from the property. There is a convenience store located downstairs. This property is 5 minutes walk from the beach. Less than 5 minutes walk from Hua Hin Beach, the pet-friendly Ibis Hua Hin - SHA Plus offers modern air-conditioned rooms and an outdoor pool. An international restaurant and bar are available. Free parking is available. ',
            sleep: '2 sleeps',
            bathroom: '1 bathroom', 
            rating: '8.8',
            price: '99'
        },
        {
            id: 2, 
            image: img1,
            title: 'Standard Twin Room Private Shared Bathroom',
            desc: 'In addition to the standard of SHA Plus, all guests get free Wi-Fi in all rooms and free parking if arriving by car. Strategically situated in Hua Hin Beachfront, allowing you access and proximity to local attractions and sights. Do not leave before paying a visit to the famous Cicada Market. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.',
            sleep: '2 sleeps',
            bathroom: '1 bathroom', 
            rating: '9.5',
            price: '231'
        },
    ]

    
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
            <span className={style.page_result}>{resultDetail.length} results found</span>
                {resultDetail.map((results_item) => {
                    return <SearchItem results={results_item} />
                })}
            </div>
        </div>

        <Newsletter />
        <Footer />
    </div>
);
}

export default index;
