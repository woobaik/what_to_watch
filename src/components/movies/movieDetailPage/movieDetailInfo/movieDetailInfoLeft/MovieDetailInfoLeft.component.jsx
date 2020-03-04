import React from "react"
import { withRouter } from "react-router-dom"
import "./MovieDetailInfoLeft.styles.scss"
import { connect } from "react-redux"
import ActorCard from "../../../../commonComponent/actorCard/ActorCard.component"
import HorizontailDivider from "../../../../layouts/divider/HorizontalDivider.component"
import MovieDetailVideo from "../../movieDetailVideo/MovieDetailVideo.component"

const MovieDetailInfoLeft = props => {
  return (
    <div className="movieDetailInfoLeft">
      <div className="top-billed-cast">
        <p className="section-title">Top Billed Cast</p>
        <div className="actor-card-container">
          {props.topCast
            ? props.topCast
                .filter((cast, index) => index < 5)
                .map(cast => {
                  return (
                    <ActorCard
                      key={cast.cast_id ? cast.cast_id : cast.credit_id}
                      id={cast.id}
                      name={cast.name}
                      profile_path={cast.profile_path}
                      character={cast.character}
                    />
                  )
                })
            : "Loading..."}
        </div>
        <p className="full-cast-link">Full Cast & Crew</p>
      </div>
      <HorizontailDivider />
      <div className="media-container">
        <div className="section-title">Video</div>
        <MovieDetailVideo />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.url.slice(0, 3) === "/tv") {
    return {
      topCast: state.tvs.cast
    }
  }

  return {
    topCast: state.movies.cast.cast
  }
}
export default withRouter(connect(mapStateToProps)(MovieDetailInfoLeft))
