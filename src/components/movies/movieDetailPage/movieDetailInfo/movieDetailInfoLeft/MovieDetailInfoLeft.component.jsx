import React from 'react'
import './MovieDetailInfoLeft.styles.scss'

import ActorCard from '../../../actorCard/ActorCard.component'

const MovieDetailInfoLeft = () => {
    return (
        <div className='movieDetailInfoLeft'>
            <div className="top-billed-cast">
                <ActorCard />
            </div>
        </div>
    )
}

export default MovieDetailInfoLeft
