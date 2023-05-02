import React from 'react';
import './Home.css'
import ChefContainer from '../ChefContainer/ChefContainer';
import Banner from '../Banner/Banner';
import BestRecipe from '../BestRecipe/BestRecipe';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div classNameName=''>
            <Banner></Banner>
            <ChefContainer></ChefContainer>
            <BestRecipe></BestRecipe>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;