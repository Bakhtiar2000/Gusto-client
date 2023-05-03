import React from 'react';
import './Home.css'
import ChefContainer from '../ChefContainer/ChefContainer';
import Banner from '../Banner/Banner';
import BestRecipe from '../BestRecipe/BestRecipe';
import CustomerReview from '../CustomerReview/CustomerReview';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData()
    console.log(chefs)
    return (
        <div className='home'>

            <Banner></Banner>
            <div className='home-container'>
                <div className='text-center my-20 ms-10 me-10'>
                    <h2 className='text-3xl font-extrabold text-white'>Our Chefs</h2>
                    <p className='my-5 text-white stroke-black'>Meet our most experienced chefs and explore what they can provide you</p>
                    <div className='chefs'>
                        {
                            chefs.map(chef => <ChefContainer
                                key={chef.id} chef={chef}
                            ></ChefContainer>)
                        }
                    </div>
                </div>
                <BestRecipe></BestRecipe>
                <CustomerReview></CustomerReview>
            </div>
        </div>
    );
};

export default Home;
// style={{backgroundImage: `url(../../../../public/assets/icons/Gusto Restaurant Front View.png)`,
//         backgroundRepeat: 'no-repeat',
//         backgroundAttachment: 'fixed',
//         backgroundPosition: 'center',
//         backgroundColor: 'rgba(255, 255, 255, 0.8)'}}