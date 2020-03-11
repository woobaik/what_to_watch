import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { fetchTVcredit } from "../../../redux/tvRedux/tvActions"
import { fetchCast } from "../../../redux/movieRedux/movieActions"
import "./PeopleCastforShow.style.scss"
import Card from "./castSmallCard/CastCard.component"
import Grid from "@material-ui/core/Grid"

import Paper from "@material-ui/core/Paper"
import { GoPerson } from "react-icons/go"
const PeopleCastForShow = props => {
  console.log("Cast Show", props)

  useEffect(() => {
    props.fetchCredit()
  }, [])
  return (
    <div className="People-Cast-For-Show">
      <Grid container spacing={3}>
        <Grid item xs={props.crew && props.crew.length > 0 ? 6 : 12}>
          {props.cast
            ? props.cast.map(cast => {
                return (
                  <Paper className="grid-item" key={cast.id}>
                    <div className="image-container">
                      {cast.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                        />
                      ) : (
                        <div>empty</div>
                      )}
                    </div>
                  </Paper>
                )
              })
            : null}
        </Grid>
        <Grid item xs={props.cast && props.cast.length > 0 ? 6 : 12}>
          {props.cast
            ? props.crew.map(crew => {
                return (
                  <Paper className="grid-item" key={crew.id}>
                    <div className="image-container">
                      {crew.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w138_and_h175_face/${crew.profile_path}`}
                        />
                      ) : (
                        <div>
                          <GoPerson />
                        </div>
                      )}
                    </div>
                  </Paper>
                )
              })
            : null}
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log("C9 CHHUL9", state)
  console.log("OWN PROPS", ownProps.match.url.slice(0, 3))

  if (ownProps.match.url.slice(0, 3) === "/tv") {
    return {
      crew: state.tvs.cast.crew,
      cast: state.tvs.cast.cast,
      loading: state.loading
    }
  }
  return {
    crew: state.movies.cast.crew,
    cast: state.movies.cast.cast,
    loading: state.movies.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("MapdispatchTOProps", ownProps)
  console.log(ownProps.match.url.slice(0, 4))
  let videoId = ownProps.match.params.query.split("-")[0]
  if (ownProps.match.url.slice(0, 4) === "/tv/") {
    return {
      fetchCredit: () => dispatch(fetchTVcredit(videoId))
    }
  }
  return {
    fetchCredit: () => dispatch(fetchCast(videoId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PeopleCastForShow)
)
