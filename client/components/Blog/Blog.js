/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaRegEye } from 'react-icons/fa';
import style from './blog.module.scss';

function Blog({ blogs }) {
    const { title, img, text, createdAt, views, tags } = blogs;
    return (
        <div className={style.blog}>
            <div className={style.blog_img} style={{ position: 'relative' }}>
                <Link href="/blogs/12">
                    <Image src={img} className={style.blog_imggg} />
                </Link>

                <p className={style.blog_tag}>{tags[0]}</p>
            </div>

            <div className={style.blog_details}>
                <Link href="/blogs/12">
                    <h2>{title}</h2>
                </Link>
                <p>{text[0]}</p>

                <div className={style.blog_foter}>
                    <p>
                        <FaCalendarAlt style={{ marginRight: '3px' }} />
                        {createdAt}
                    </p>
                    <p>
                        <FaRegEye style={{ marginRight: '3px' }} />
                        {views} views
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blog;
