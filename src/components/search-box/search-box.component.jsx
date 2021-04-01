import React from 'react';

import './search-box.style.css';

export const SearchBox = function({placeholder, searchHandler}){
    return(
        <input className='search' type='search' placeholder={placeholder} onChange={searchHandler} />
    );
}