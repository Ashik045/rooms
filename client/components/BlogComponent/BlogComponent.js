/* eslint-disable import/no-unresolved */
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Link from 'next/link';
import style from './blogcomponent.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function BlogComponent({ blogDetail }) {
    return (
        <div className={style.blog_component}>
            <div className={style.blog_component_main}>
                <div className={style.blog_component_header}>
                    <h1 style={{ marginBottom: '30px' }}>Rooms Blogs</h1>
                    <Link href="/blogs">
                        <button type="button" className={style.seeall_btn}>
                            View All Blogs
                        </button>
                    </Link>
                </div>

                <div className={style.blog_component_items}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1224: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        modules={[Pagination]}
                        className={style.mySwiper}
                    >
                        {blogDetail.slice(0, 4).map((item) => (
                            <SwiperSlide>
                                <div key={item.id} className={style.blog_card}>
                                    <Image
                                        className={style.blog_card_image}
                                        src={item.img}
                                        alt="Rooms News"
                                    />
                                    <p className={style.blog_card_tag}>{item.tags[0]}</p>
                                    <Link href="/blogs">
                                        <h2>{item.title}</h2>
                                    </Link>
                                    <p>{item.text}</p>

                                    <div className={style.blog_card_btm}>
                                        <p>{item.createdAt}</p>
                                        <p>{item.views} views</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default BlogComponent;
