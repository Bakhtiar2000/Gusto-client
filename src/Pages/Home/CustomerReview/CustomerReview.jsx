import React from 'react';
import './CustomerReview.css'

const CustomerReview = () => {

    return (

            <div className="container">
                <div className="board">
                    <h2 className="text-2xl font-semibold text-light">Word form our customers</h2>
                    <p className="mt-3 text-light">Some of the fullfilled costomers reviews</p>


                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="swiper-slide">
                                <div className="flex">
                                    <div className="comments">
                                        Non, placeat quisquam? Animi sunt, dignissimos est sit reiciendis iste ipsa error?
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </div>
                                    <div className="profile">
                                    <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                                            <a href="#">John V. Bellanmy</a>
                                            <span>Founder & CEO</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="swiper-slide">
                                <div className="flex">
                                    <div className="comments">
                                        Non, placeat quisquam? Animi sunt, dignissimos est sit reiciendis iste ipsa error?
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </div>
                                    <div className="profile">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                                            <a href="#">John V. Bellanmy</a>
                                            <span>Founder & CEO</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="swiper-slide">
                                <div className="flex">
                                    <div className="comments">
                                        Non, placeat quisquam? Animi sunt, dignissimos est sit reiciendis iste ipsa error?
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </div>
                                    <div className="profile">
                                    <img src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                                            <a href="#">John V. Bellanmy</a>
                                            <span>Founder & CEO</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className="swiper-slide">
                                <div className="flex">
                                    <div className="comments">
                                        Non, placeat quisquam? Animi sunt, dignissimos est sit reiciendis iste ipsa error?
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </div>
                                    <div className="profile">
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                                            <a href="#">John V. Bellanmy</a>
                                            <span>Founder & CEO</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

    );
};

export default CustomerReview;
