import Head from 'next/head';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import LovelyHomeDetail from '../components/lovelyHomeDetail/LovelyHomeDetail';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Propertys from '../components/Propertys/Propertys';
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item3.jpg';
import item4 from '../images/item4.jpg';
import item5 from '../images/item5.jpg';
import item6 from '../images/item6.jpg';
import item7 from '../images/item7.jpg';
import item8 from '../images/item8.jpg';
import item9 from '../images/item9.jpg';
import styles from '../styles/index.module.scss';

const propertyDetails = [
    {
        id: 2,
        img: item2,
        title: 'Apartments',
        items: '306 Apartments',
    },
    {
        id: 1,
        img: item1,
        title: 'Hotels',
        items: '1100 Hotels',
    },
    {
        id: 3,
        img: item3,
        title: 'Resorts',
        items: '2123 Resorts',
    },
    {
        id: 4,
        img: item4,
        title: 'Villas',
        items: '1350 Villas',
    },
    {
        id: 5,
        img: item5,
        title: 'Cabins',
        items: '1780 Cabins',
    },
];

const HomesDetails = [
    {
        id: 2,
        img: item6,
        title: 'The patio Barcelona',
        location: 'Barcelona',
        price: '$135',
        rating: '9.5',
    },
    {
        id: 1,
        img: item7,
        title: 'Flora Ciado Apartments',
        location: 'Lisbon',
        price: '$105',
        rating: '8.7',
    },
    {
        id: 3,
        img: item8,
        title: 'Sea front Apartments',
        location: 'London',
        price: '$165',
        rating: '9.5',
    },
    {
        id: 4,
        img: item9,
        title: 'The tower of Chevel',
        location: 'Chevel',
        price: '$135',
        rating: '9.6',
    },
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Navbar />
                <Header />
                <Features />
                <Propertys propertyDetails={propertyDetails} />
                <LovelyHomeDetail homeDetails={HomesDetails} />
                <Newsletter />
                <Footer />
            </main>
        </div>
    );
}
