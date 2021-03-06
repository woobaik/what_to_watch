import React from "react"
import { withRouter } from "react-router-dom"
import "./MovieDetailInfoLeft.styles.scss"
import { connect } from "react-redux"
import ActorCard from "../../../../commonComponent/actorCard/ActorCard.component"
import HorizontailDivider from "../../../../layouts/divider/HorizontalDivider.component"
import MovieDetailVideo from "../../movieDetailVideo/MovieDetailVideo.component"
import MovieRecommend from "./movieRecommend/MovieRecommend.component"

const MovieDetailInfoLeft = props => {
  let site,
    key = undefined

  if (
    props.media &&
    props.media.length > 0 &&
    props.media[0].site === "YouTube"
  ) {
    site = props.media[0].site
    key = props.media[0].key
  }
  return (
    <div className="movieDetailInfoLeft">
      {props.topCast && props.topCast.length > 0 ? (
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

          <p
            className="full-cast-link"
            onClick={() => props.history.push(`${props.match.url}/full-cast`)}>
            Full Cast & Crew
          </p>
        </div>
      ) : null}

      <HorizontailDivider />
      {site && key ? (
        <div className="media-container">
          <div className="section-title">Video</div>
          <MovieDetailVideo site={site} vId={key} />
        </div>
      ) : null}

      <MovieRecommend />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.url.slice(0, 3) === "/tv") {
    return {
      topCast: state.tvs.cast.cast,
      media: state.tvs.media.results
    }
  }

  return {
    topCast: state.movies.cast.cast,
    media: state.movies.media.results
  }
}
export default withRouter(connect(mapStateToProps)(MovieDetailInfoLeft))
