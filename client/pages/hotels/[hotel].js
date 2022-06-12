/* eslint-disable import/no-unresolved */
import Image from 'next/image';
import { FaBath, FaBed, FaCheck } from 'react-icons/fa';
import { EffectFade, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import img1 from '../../images/img1.jpg';
import item2 from '../../images/medium1.jpg';
import item1 from '../../images/medium2.jpg';
import item4 from '../../images/medium3.jpg';
import item3 from '../../images/medium4.jpg';
import style from '../../styles/hotelDetail.module.scss';

const hotelDetails = () => {
    const details = {
        id: 1,
        image: [img1, item1, item2, item3, item4],
        title: 'Standard Twin Room Private Shared Bathroom.',
        desc: [
            'In addition to the standard of SHA Plus, all guests get free Wi-Fi in all rooms and free parking if arriving by car. Strategically situated in Hua Hin Beachfront, allowing you access and proximity to local attractions and sights. Do not leave before paying a visit to the famous Cicada Market. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site. In addition to the standard of SHA Plus, all guests get free Wi-Fi in all rooms and free parking if arriving by car. Strategically situated in Hua Hin Beachfront, allowing you access and proximity to local attractions and sights.',
            'Strategically situated in Hua Hin Beachfront, allowing you access and proximity to local attractions and sights. Do not leave before paying a visit to the famous Cicada Market. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and fitness center on-site.',
        ],
        sleep: '2 sleeps',
        bathroom: '1 bathroom',
        facilities: [
            'Large bed',
            '24/7 support',
            'Shared kitchen',
            'Shower in the room',
            'Dry cleaning',
            'General paid gym',
            'Air conditioning',
            'High speed WiFi',
        ],
        rating: '9.5',
        price: '231',
    };

    return (
        <div className={style.hotel_detail}>
            <Navbar />
            <Header type="hList" />

            {/* hotel details */}
            <div className={style.hotel_detail_main}>
                <div className={style.hotel_detail_left}>
                    <h1>{details.title}</h1>
                    <Swiper
                        effect="fade"
                        navigation
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation, EffectFade, Pagination]}
                        className="mySwiper"
                    >
                        {details.image.map((imgs) => (
                            <SwiperSlide className={style.swiper_slide}>
                                <Image
                                    className={style.swiper_slide_img}
                                    src={imgs}
                                    width={1100}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className={style.hotel_detail_rooms}>
                        <p style={{ marginRight: '8px' }}>
                            <FaBed size={22} className={style.search_item_bed_icon} />
                            {details.sleep}
                        </p>
                        <p>
                            <FaBath className={style.search_item_bed_icon} />
                            {details.bathroom}
                        </p>
                    </div>

                    <div className={style.hotel_detail_desc}>
                        {details.desc.map((des) => (
                            <p>{des}</p>
                        ))}
                    </div>

                    <h2>Room Facilities</h2>
                    <div className={style.hotel_detail_facilities}>
                        {details.facilities.map((list) => (
                            <p>
                                <FaCheck style={{ marginRight: '5px' }} /> {list}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={style.hotel_detail_right}>
                    <h1>right</h1>
                </div>
                <hr />
            </div>

            <Newsletter />
            <Footer />
        </div>
    );
};

export default hotelDetails;
