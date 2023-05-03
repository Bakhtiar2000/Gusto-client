import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-black text-white md:flex justify-around items-start p-5'>
            <div>
                <p className='text-5xl mt-5 mb-10'>Gusto</p>
                <p className='text-md my-2'>Address:</p>
                <p className='text-md my-2'>Email: gustobanani@gmail.com</p>
                <p className='text-md my-2'>Phone: +8801534288567</p>
                <div className="links my-10">
                    <a href="https://www.facebook.com/"><img src="../../../../public/assets/icons/fb.png" alt=""/></a>
                    <a href="https://www.twitter.com/"><img src="../../../../public/assets/icons/twitter.png" alt=""/></a>
                    <a href="https://www.youtube.com/"><img src="../../../../public/assets/icons/youtube.png" alt=""/></a>
                </div>

            </div>
            <div className='mb-5'>
            <h3 className="text-3xl my-5">Message us for reservation</h3>
            <form>
                <input className='my-3 rounded p-3 ' type="text" placeholder="Your Name"/><br/>
                <input className='my-3 rounded p-3 ' type="email" placeholder="Your Email"/><br/>
                <textarea className='my-3 rounded p-3 ' cols="35" rows="5" placeholder="Message"></textarea><br/>
                <input  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    );
};

export default Footer;