import React from 'react'
import './MovieDetailInfoLeft.styles.scss'

import { connect } from 'react-redux'
import ActorCard from '../../../actorCard/ActorCard.component'
import HorizontailDivider from '../../../../layouts/divider/HorizontalDivider.component'

const MovieDetailInfoLeft = (props) => {
    console.log('TOPCAST EXISTS?', props.topCast)


    return (
        <div className='movieDetailInfoLeft'>
            <div className="top-billed-cast">
                <p className='section-title'>Top Billed Cast</p>
                <div className='actor-card-container'>
                    {props.topCast ? props.topCast.filter(
                        (cast) => cast.order < 5).map((cast) => {
                            return <ActorCard key={cast.cast_id} name={cast.name} profile_path={cast.profile_path} character={cast.character} />
                        }) : 'Loading...'}
                </div>
                <p className='full-cast-link'>Full Cast & Crew</p>
                <HorizontailDivider />
            </div>
            <div className="media-container"></div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        topCast: state.movies.cast.cast
    }
}
export default connect(mapStateToProps)(MovieDetailInfoLeft)
