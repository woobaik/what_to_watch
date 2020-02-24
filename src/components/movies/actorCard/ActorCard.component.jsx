import React from 'react'
import './ActorCard.styles.scss'

import { MdPerson } from 'react-icons/md'

const ActorCard = (props) => {

    return (
        <div className='ActorCard'>
            {/* w138 h175 */}
            {props.profile_path ?
                <img src={`https://image.tmdb.org/t/p/w138_and_h175_face${props.profile_path}`} alt="actor" /> :
                <div className='no-image-person'>
                    <MdPerson />
                </div>}
            <div className='actor-card-description'>
                <p className='actor-card-name'>{props.name}</p>
                <p className='actor-card-role'>{props.character}</p>
            </div>
        </div>
    )
}

export default ActorCard
