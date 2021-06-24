import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import CatagoriesDetails from '../CatagoriesDetails/CatagoriesDetails'

const Catagories = () => {
    const {category} = useContext(CategoryContext);
    return (
        <div>
            <h4>Select your category</h4>
            <CatagoriesDetails count={category}></CatagoriesDetails>
        </div>
    );
};

export default Catagories;