import React from 'react'
import './MovieDetailInfoLeft.styles.scss'

import ActorCard from '../../../actorCard/ActorCard.component'
import HorizontailDivider from '../../../../layouts/divider/HorizontalDivider.component'

const MovieDetailInfoLeft = () => {
    return (
        <div className='movieDetailInfoLeft'>
            <div className="top-billed-cast">
                <p className='section-title'>Top Billed Cast</p>
                <div className='actor-card-container'>
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                    <ActorCard />
                </div>
                <p className='full-cast-link'>Full Cast & Crew</p>
                <HorizontailDivider />
            </div>
            <div className="media-container"></div>
        </div>
    )
}

export default MovieDetailInfoLeft
