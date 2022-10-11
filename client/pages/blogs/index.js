import axios from 'axios';
import React from 'react';
import Blog from '../../components/Blog/Blog';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Tags from '../../components/Tags/Tags';
import bImg1 from '../../images/blog1.jpg';
import bImg2 from '../../images/blog2.jpg';
import bImg3 from '../../images/blog3.jpg';
import bImg4 from '../../images/blog4.jpg';
import style from '../../styles/blogpage.module.scss';

const Blogs = [
    {
        id: 1,
        img: bImg1,
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
    {
        id: 5,
        img: bImg1,
        title: 'How to cure wanderlust without leaving your home',
        tags: ['Travel', 'Communication', 'Tourist Guide'],
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam. Obcaecati animi aspernatur distinctio explicabo consequuntur.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam rerum ea doloribus quae alias velit porro eligendi laudantium dolor necessitatibus delectus ab esse, corporis labore dignissimos molestiae cupiditate quo. Ipsa adipisci error beatae, deleniti accusantium molestias quae cumque nulla quasi sunt laborum! Possimus, numquam.',
        ],
        createdAt: new Date().toDateString(),
        views: 122,
    },
];

const index = ({blogs}) => (
    <div className={style.blog_page}>
        <Navbar />
        <Header type="hList" />
        <div className={style.blog_page_main}>
            <div className={style.blog_list}>
                <form action="" className={style.blog_search}>
                    <input type="text" name="" placeholder="Search blogs..." />
                    <input type="submit" value="Search" />
                </form>

                <p>{blogs.length} blogs found.</p>
                {blogs.map((blogs) => (
                    <Blog blogs={blogs} key={blogs._id} />
                ))}
            </div>

            <div className={style.blog_search_tag}>
                <h2>Tags</h2>
                <Tags />
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
);

export default index;

export async function getStaticProps() {
    const res = await axios.get('http://localhost:4000/api/blogs')
    const data = await res.data.message;

    return {
        props: {
            blogs: data
        }
    }
}