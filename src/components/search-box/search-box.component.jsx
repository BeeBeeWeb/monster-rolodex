import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, onSearch }) => { 
    return (
        <input
            type='search'
            placeholder={placeholder}
            className='search'
            onChange={e => onSearch(e.target.value)}
        />
    )
}