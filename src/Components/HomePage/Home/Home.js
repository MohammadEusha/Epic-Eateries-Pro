import React from 'react';
import About from '../About/About';
import Appbar from '../Appbar/Appbar';
import FoodCards from '../FoodCards/FoodCards';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#12161f' }}>
            <Appbar></Appbar>
            <Header></Header>
            <About></About>
            <FoodCards></FoodCards>
            <Review></Review>
            <Footer />
        </div>
    );
};

export default Home;