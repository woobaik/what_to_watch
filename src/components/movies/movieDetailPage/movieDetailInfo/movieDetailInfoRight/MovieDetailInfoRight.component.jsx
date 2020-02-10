import React from 'react'
import './MovieDetailInfoRightstyles.scss'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLink } from 'react-icons/fa'

const MovieDetailInfoRight = () => {
    return (
        <div className='MovieDetailInfoRight'>
            <div className='social-icons'>
                <FaFacebookSquare />
                <FaTwitterSquare />
                <FaInstagram />
                <FaLink />
            </div>

            <div className='right-info-facts'>
                <h4>Facts</h4>
            </div>

            <div className='right-info-status'>
                <h4>Status</h4>
            </div>
            <div className='right-info-'>
                <h4>Release Information</h4>
            </div>
            <div className='right-info-'>
                <h4>Original Language</h4>
            </div>
            <div className='right-info-'>
                <h4>Runtime</h4>
            </div>
            <div className='right-info-'>
                <h4>Budget</h4>
            </div>
            <div className='right-info-'>
                <h4>Revenue</h4>
            </div>
            <div className='right-info-'>
                <h4>Genres</h4>
            </div>
            <div className='right-info-'>
                <h4>Keywords</h4>
            </div>
            <div className='right-info-'>
                <h4>Content Score</h4>
            </div>






        </div>
    )
}

export default MovieDetailInfoRight