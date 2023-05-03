import React from 'react';
import './ChefContainer.css'

const ChefContainer = ({chef}) => {
    const {name, picture, description, likes, years_of_experience, recipes}=chef
    console.log(chef)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Has {years_of_experience} years of cooking experience</p>
                    <p>Made {recipes.length} different recipes</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View recipes</button>
                    </div>
                </div>
            </div>
    );
};

export default ChefContainer;