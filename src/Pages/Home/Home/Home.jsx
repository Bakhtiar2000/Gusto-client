import React from 'react';
import './Home.css'
import ChefContainer from '../ChefContainer/ChefContainer';
import Banner from '../Banner/Banner';
import BestRecipe from '../BestRecipe/BestRecipe';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <ChefContainer></ChefContainer>
            <BestRecipe></BestRecipe>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;
// style={{backgroundImage: `url(../../../../public/assets/icons/Gusto Restaurant Front View.png)`,
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed',
//         backgroundPosition: 'center',
//         backgroundColor: 'rgba(255, 255, 255, 0.8)'}}