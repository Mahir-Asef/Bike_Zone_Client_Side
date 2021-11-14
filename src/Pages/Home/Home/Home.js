import React from 'react';
import Navigation from './../../Shared/Navigation/Navigation';
import Hero from "../Hero/Hero";
import BikeSection from './../BikeSection/BikeSection';
import DisplayReview from './../DisplayReview/DisplayReview';
import Banner from './../Banner/Banner';
import Subscription from './../Subscription/Subscription';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Hero></Hero>
            <BikeSection></BikeSection>
            <Banner></Banner>
            <DisplayReview></DisplayReview>
            <Subscription></Subscription>
            <Footer></Footer>
        </div>
    );
};

export default Home;