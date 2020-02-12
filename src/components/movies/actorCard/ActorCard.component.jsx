import React from 'react'
import './ActorCard.styles.scss'

const ActorCard = () => {
    return (
        <div className='ActorCard'>
            {/* w138 h175 */}
            <img src="https://image.tmdb.org/t/p/w138_and_h175_face/ecv9SBN9m1cEZFfSopph6wf8fk.jpg" alt="actor-picture" />
            <div className='actor-card-description'>
                <p className='actor-card-name'>Margot Robbie</p>
                <p className='actor-card-role'>Harleen Quinzel / Harley Quinn</p>
            </div>
        </div>
    )
}

export default ActorCard
