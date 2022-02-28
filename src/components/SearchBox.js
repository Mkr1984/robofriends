import React from "react";
import './SearchBox.scss'

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <input 
            type='search' 
            placeholder="search robots"
            className="my-3 p-2"
            onChange={searchChange}
        />
    );
}

export default SearchBox;