import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Catagories from '../Catagories/Catagories';

const Home = () => {
    const category = useContext(CategoryContext);


    return (
        <div style={{border:'1px solid black'}}>
            <h1>Home: {category}</h1>
            <Catagories count={category}></Catagories>
        </div>
    );
};

export default Home;