import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CatagoriesDetails = (props) => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h3>catagories details:{category} </h3>
            <p>selected category: {category}</p>
        </div>
    );
};

export default CatagoriesDetails;