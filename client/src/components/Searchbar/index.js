import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css'
const Searchbar = ({ handler }) => {
    return (
        <div className='barCont'>
            <SearchIcon sx={{ color: '#eee', fontSize: 20}} />
            <input
                type={'search'}
                placeholder='search...'
                onChange={e => handler(e.target.value)}
            />
        </div>
    );
};

export default Searchbar;