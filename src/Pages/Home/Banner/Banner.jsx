import React from 'react';

const Banner = () => {
    return (
        <div className=" w-full border-b-8 border-x-8">
            <div id="slide1" className="relative w-full">
                <img src="../../../public/assets/Gusto Banner.png" className="w-full" />
                <div className="text-white absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 flex-col items-center">
                    <h2 className='lg:text-6xl text-3xl lg:mb-12 mb-5'>Taste the best of italian food</h2>
                    <p className='lg:text-2xl text-md lg:mb-10 mb-3 md:w-5/6'>Welcome to Gusto, your go-to destination for discovering the best Italian chefs and their mouth-watering recipes. We are dedicated to showcasing the culinary excellence of Italy, from traditional classics to innovative modern cuisine. Discover the best Italian chefs and recipes, and experience the delicious flavors of this vibrant and diverse cuisine.</p>
                    <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold md:text-xl md:w-1/3 py-2 px-4 rounded-full">
                        Make Reservation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

