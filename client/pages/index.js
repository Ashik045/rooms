import axios from 'axios';
import Head from 'next/head';
import BlogComponent from '../components/BlogComponent/BlogComponent';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LovelyHomeDetail from '../components/lovelyHomeDetail/LovelyHomeDetail';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Propertys from '../components/Propertys/Propertys';
import SpecialServices from '../components/SpecialServices/SpecialServices';
import WhyUs from '../components/WhyUs/WhyUs';
import bImg1 from '../images/blog1.jpg';
import bImg2 from '../images/blog2.jpg';
import bImg3 from '../images/blog3.jpg';
import bImg4 from '../images/blog4.jpg';
import styles from '../styles/index.module.scss';

// const HomesDetails = [
//     {
//         id: 2,
//         img: item6,
//         title: 'The patio Barcelona',
//         location: 'Barcelona',
//         price: '$135',
//         rating: '9.5',
//     },
//     {
//         id: 1,
//         img: item7,
//         title: 'Flora Ciado Apartments',
//         location: 'Lisbon',
//         price: '$105',
//         rating: '8.7',
//     },
//     {
//         id: 3,
//         img: item8,
//         title: 'Sea front Apartments',
//         location: 'London',
//         price: '$165',
//         rating: '9.5',
//     },
//     {
//         id: 4,
//         img: item9,
//         title: 'The tower of Chevel',
//         location: 'Chevel',
//         price: '$135',
//         rating: '9.6',
//     },
// ];

// dumm
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

export default function Home({ propertyList, propertyList2, homesDetails, blogss }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Rooms - Find your hostel</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/home_icon-icons.com_73532.ico" />
            </Head>

            <main className={styles.main}>
                <Navbar />
                <Header />
                <Features propertyList={propertyList} />
                <LovelyHomeDetail homesDetails={homesDetails} />
                <Propertys propertyList2={propertyList2} />
                <WhyUs />
                <SpecialServices />
                <BlogComponent blogDetail={blogss} title="Rooms Blogs"  />
                <Newsletter />
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const response = await axios.get(
        'https://rooms-backend-main.onrender.com/api/hotels/getHotelByCity?cities=berlin,tokyo,dubai'
    );
    const response2 = await axios.get('https://rooms-backend-main.onrender.com/api/hotels/getHotelByType');
    const response3 = await axios.get('https://rooms-backend-main.onrender.com/api/hotels?featured=true&limit=4');
    const res = await axios.get('https://rooms-backend-main.onrender.com/api/blogs')

    const data = await response.data.message;
    const data2 = await response2.data.message;
    const data3 = await response3.data.message;
    const blog = res.data.message;

    return {
        props: {
            propertyList: data,
            propertyList2: data2,
            homesDetails: data3,
            blogss: blog
        },
    };
}
