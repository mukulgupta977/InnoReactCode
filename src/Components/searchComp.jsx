import React from 'react';

export const SearchBox = ({placeholder,changeHandler}) => (
    <input
    className='search' 
    type='search' 
    placeholder={placeholder} 
    onChange={changeHandler}
    />
);