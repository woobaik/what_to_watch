import React from 'react'
import './MovieCategoryDetailCard.styles.scss'

const MovieCategoryDetailCard = () => {
    return (
        <div className='Movie-category-detail-card'>
            <div className='category-detail-card-image'>
                <img src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg' alt='movie poster' />
            </div>
            <div className='category-detail-card-content'>
                <div className='category-detail-card-header'>
                    <div className='category-detail-card-title'>
                        The Shawshank Redemption
                    </div>
                    <div className='category-detail-card-release-date'>

                    </div>
                </div>
                <div className='category-detail-card-stroy'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium et dolor nemo eveniet! Corporis neque qui tenetur vitae tempora! Aspernatur unde quisquam hic consequatur nobis esse provident et optio facilis.
                </div>
                <div className='category-detail-card-footer'>
                    More Info
                </div>

            </div>
        </div>
    )
}

export default MovieCategoryDetailCard
