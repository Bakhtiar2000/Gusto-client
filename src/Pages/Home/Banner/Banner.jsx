import React from 'react';

const Banner = () => {
    return (
        <div className=" w-full border-b-8 border-x-8">
            <div id="slide1" className="relative w-full">
                <img src="../../../public/assets/Gusto Banner.png" className="w-full" />
                <div className="text-white absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 flex-col items-center">
                    <h2 className='lg:text-6xl text-3xl lg:mb-12 mb-5'>Taste the best of italian food</h2>
                    <p className='lg:text-2xl text-md lg:mb-10 mb-3 md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat impedit adipisci corrupti quo molestiae et at neque similique libero. Similique perferendis ad facere aliquam illum quam voluptatibus iste tempore illo error blanditiis expedita esse quaerat veniam eius suscipit earum, cum, at nisi molestias consectetur. Iure voluptatibus voluptates quo odio quibusdam.</p>
                    <button className="bg-orange-400 hover:bg-orange-600 text-white font-bold md:text-xl md:w-1/3 py-2 px-4 rounded-full">
                        Make Reservation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;

