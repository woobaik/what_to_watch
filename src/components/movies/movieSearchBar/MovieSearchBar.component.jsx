import React, { Fragment } from 'react'
import './MovieSearchBar.style.scss'
import { IoIosSearch } from "react-icons/io";


const MovieSearch = () => {
    return (
        <Fragment>
            <form className='search-form'>
                <input type='text' id='search' placeholder='Search for a movie, tv show, person...' autoComplete='off' />
                <button id='search-icon'><IoIosSearch /></button>
            </form>
        </Fragment>
    )
}

export default MovieSearch
