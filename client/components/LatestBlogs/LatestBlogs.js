import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from './latestblogs.module.scss';

function LatestBlogs({ blog }) {
    const { img, createdAt, title } = blog;
    const date = moment(createdAt).fromNow();
    return (
        <div className={style.recent_blog}>
        <Link href="/blogs/12" >

            <Image src={img} alt="recent blog" className={style.recent_blog_img} />
        </Link>

            <div className={style.recent_blog_txt}>
            <Link href="/blogs/12" >

                <h3>{title}</h3>
            </Link>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default LatestBlogs;
