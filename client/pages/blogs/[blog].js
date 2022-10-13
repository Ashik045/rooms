import axios from 'axios';
import Image from 'next/image';
import React from 'react';
import { FaCalendarAlt, FaRegEye } from 'react-icons/fa';
import BlogComponent from '../../components/BlogComponent/BlogComponent';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LatestBlogs from '../../components/LatestBlogs/LatestBlogs';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import bImgg1 from '../../images/blog1.jpg';
import bImg2 from '../../images/blog2.jpg';
import bImg3 from '../../images/blog3.jpg';
import bImg4 from '../../images/blog4.jpg';
import noPhoto from '../../images/no hotel.jpg';
import style from '../../styles/blogdetail.module.scss';


// remove this dummy data and fetch from the database
const Blogs = [
    {
        id: 1,
        img: bImgg1,
        title: 'How to cure wanderlust without leaving your home',
        tags: ['Travel', 'Communication', 'Tourist Guide'],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam. Obcaecati animi aspernatur distinctio explicabo consequuntur.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam.',
        ],
        createdAt: new Date().toDateString(),
        views: 122,
    },
    {
        id: 2,
        img: bImg2,
        title: '10 of the Most Underrated Cities in Europe',
        tags: ['City', 'Communication', 'Tourist Guide'],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam. Obcaecati animi aspernatur distinctio explicabo consequuntur.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam.',
        ],
        createdAt: new Date().toDateString(),
        views: 29,
    },
    {
        id: 3,
        img: bImg3,
        title: 'The Seven People You Always Meet Hosteling',
        tags: ['Communication', 'Tourist Guide', 'City'],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam. Obcaecati animi aspernatur distinctio explicabo consequuntur.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam.',
        ],
        createdAt: new Date().toDateString(),
        views: 120,
    },
    {
        id: 4,
        img: bImg4,
        title: 'How to cure wanderlust without leaving your home',
        tags: ['Travel', 'Communication', 'Tourist Guide', 'City'],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam. Obcaecati animi aspernatur distinctio explicabo consequuntur.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam.',
        ],
        createdAt: new Date().toDateString(),
        views: 802,
    },
];

const blogDetails = ({blogList1, blogss}) => {
    
    return (
        <div className={style.blog_detail}>
            <Navbar />
            <Header type="hList" />
            <div className={style.blog_detail_main}>
                <div className={style.blog_detailss}>
                    <h1>{blogList1.title}</h1>

                    <Image
                        src={blogList1.image ? blogList1.image : noPhoto}
                        alt="Travel blogs"
                        className={style.blog_detail_img}
                        height={400}
                        width={600}
                        objectFit="cover"
                        layout='responsive'
                    />

                    <div className={style.blog_detail_tv}>
                        <p>
                            <FaCalendarAlt style={{ marginRight: '3px' }} />
                            {blogList1.createdAt}
                        </p>
                        <p>
                            <FaRegEye style={{ marginRight: '3px' }} />
                            {blogList1.view} views
                        </p>
                    </div>
                    
                    <p className={style.blog_detail_txt}>{blogList1.desc}</p>
                    <h3>Tags:</h3>
                    {blogList1.tags.map((tag, i) => (
                        <span key={i} className={style.blog_detail_tag}>{tag}</span>
                    ))}
                </div>

                <div className={style.blog_detail_right}>
                    <h2>Recent Blogs</h2>
                    {blogss.filter((item) => item._id !== blogList1._id).slice(0, 3).map((blog, i) => (
                        <LatestBlogs blog={blog} key={i} />
                    ))}
                </div>
            </div>

            <BlogComponent blogDetail={blogss} title="You might also like" id={blogList1._id} />

            <Newsletter />
            <Footer />
        </div>
    );
};
export default blogDetails;

// export getStaticPaths for dynamic routes
export async function getStaticPaths() {
    const response = await axios.get(`https://rooms-backend-main.onrender.com/api/blogs`);
    const data = await response.data.message;

    const paths = data.map((item) => ({
        params: {
            blog: item._id,
        },
    }));

    return {
        paths,
        fallback: true,
    };
}

// fetch the individual item data using getStaticProps
export async function getStaticProps(context) {
    // api route
    const { params } = context;
    console.log(params);
    const res = await axios.get(`https://rooms-backend-main.onrender.com/api/blog/${params.blog}`);
    const res2 = await axios.get("https://rooms-backend-main.onrender.com/api/blogs")

    const data = await res.data.message;
    const blogss = await res2.data.message;

    return {
        props: {
            blogList1: data,
            blogss: blogss,
        },
    };
}
