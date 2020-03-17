import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import { fetchTVcredit } from "../../../redux/tvRedux/tvActions"
import { fetchCast } from "../../../redux/movieRedux/movieActions"
import "./PeopleCastforShow.style.scss"
import Card from "./castSmallCard/CastCard.component"

import { MdPerson } from "react-icons/md"
const PeopleCastForShow = props => {
  console.log("Cast Show", props)

  useEffect(() => {
    props.fetchCredit()
  }, [])
  return (
    <div className="People-Cast-For-Show">
      <div className="People-cast-container">
        <div className="full-cast-role-title">
          Cast{" "}
          <span className="full-cast-number">
            {props.cast ? `(${props.cast.length})` : null}
          </span>
        </div>
        <div className="credit-container">
          <div className="grid-items">
            {props.cast && props.cast.lenghth > 0 ? (
              props.cast.map(cast => {
                return (
                  <div className="individual-item">
                    <div className="image-container">
                      {cast.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w66_and_h66_face/${cast.profile_path}`}
                        />
                      ) : (
                        <div className="no-image">
                          <MdPerson />
                        </div>
                      )}
                    </div>
                    <div className="item-content">
                      <p className="item-content-name">{cast.name}</p>
                      <p className="item-content-character">{cast.character}</p>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="individual-item no-content">
                "We will add cast list soon!"
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="People-cast-container">
        <div className="full-cast-role-title">
          Crew{" "}
          <span className="full-cast-number">
            {props.crew ? `(${props.crew.length})` : null}
          </span>
        </div>
        <div className="credit-container">
          <div className="grid-items">
            {props.crew && props.crew.length > 0 ? (
              props.crew.map(crew => {
                return (
                  <div className="individual-item">
                    <div className="image-container">
                      {crew.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w66_and_h66_face/${crew.profile_path}`}
                        />
                      ) : (
                        <div className="no-image">
                          <MdPerson />
                        </div>
                      )}
                    </div>
                    <div className="item-content">
                      <p className="item-content-name">{crew.name}</p>
                      <p className="item-content-character">{crew.job}</p>
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="individual-item no-content">
                "We'll add crew list soon!"
              </div>
            )}
          </div>
        </div>
      </div>
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
