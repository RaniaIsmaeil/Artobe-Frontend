import Announcement from '../components/Announcement';
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Drawings from '../components/Drawings';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

 

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Drawings/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Home
