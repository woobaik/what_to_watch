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

            <div className='right-info-items'>
                <h5>Facts</h5>
            </div>

            <div className='right-info-item'>
                <h5>Status</h5>
                <h6>Released</h6>

            </div>
            <div className='right-info-item'>
                <h5>Release Information</h5>
                <h6>February 7, 2020</h6>
                <h6>Theatrical</h6>
            </div>
            <div className='right-info-item'>
                <h5>Original Language</h5>
                <h6>English</h6>
            </div>
            <div className='right-info-item'>
                <h5>Runtime</h5>
                <h6>1h 49m</h6>
            </div>
            <div className='right-info-item'>
                <h5>Budget</h5>
                <h6>$75,000,000.00</h6>
            </div>
            <div className='right-info-item'>
                <h5>Revenue</h5>
                <h6>$84,500,000.00</h6>
            </div>
            <div className='right-info-item'>
                <h5>Genres</h5>
                <ul>
                    <li>ACTION</li>
                    <li>CRIME</li>
                    <li>COMEDY</li>
                    <li></li>
                </ul>
            </div>
            <div className='right-info-item'>
                <h5>Keywords</h5>
                <ul>
                    <li>
                        dc comics
                    </li>
                    <li>
                        based on comic
                    </li>
                    <li>
                        woman director
                    </li>
                    <li>
                        dc extended universe
                    </li>
                </ul>
            </div>
            <div className='right-info-'>
                <h5>Content Score</h5>
                100
            </div>






        </div>
    )
}

export default MovieDetailInfoRight