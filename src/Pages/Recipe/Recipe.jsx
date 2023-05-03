import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const loader= useLoaderData()
    console.log(loader)
    return (
        <div>
            
        </div>
    );
};

export default Recipe;