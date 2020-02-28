import React from "react"
import "./MovieDetailInfoRightstyles.scss"

import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaLink
} from "react-icons/fa"

import ISO6391 from "iso-639-1"

const stringifyReleaseDate = release_date => {
  if (!release_date) {
    return "FETCHING..."
  }
  const releaseDateArray = release_date.split("-")
  let year = releaseDateArray[0]
  let month = releaseDateArray[1]
  let date =
    releaseDateArray[2].length > 1
      ? releaseDateArray[2]
      : releaseDateArray[2].split("")[1]

  const fullDate = new Date(year, month, date)
  month = fullDate.toLocaleString("default", { month: "long" })

  return `${month} ${date}, ${year}`
}

const runtimeCalculator = runtime => {
  if (!runtime) {
    return "FETCHING..."
  }
  let hours = Math.floor(runtime / 60)
  let mins = runtime % 60
  if (runtime % 60 === 0) {
    return `${hours}h`
  }
  return `${hours}h ${mins}m`
}

const rightInfoItem = (title, information) => {
  return (
    <div className="right-info-item">
      <h5>{title}</h5>
      <h6>{information}</h6>
    </div>
  )
}

const MovieDetailInfoRight = ({ videoInfo, videoKeywords }) => {
  console.log("Right INFO", videoInfo)
  console.log("Right INFO keyword", videoKeywords)
  // API Provides keywords in diffrent way depending on TV or Movie
  let keywordsOrResults = ""
  if (videoInfo.name) {
    keywordsOrResults = "results"
  } else {
    keywordsOrResults = "keywords"
  }

  //for tv show needs to have   Network,  certification original  language,     type, Runtime    , genre, keywords,
  //for movie, needs to have    Releasing info,         Original Language,       Runtime,    budget,  Revenue,  Genres Keywords,
  return (
    <div className="MovieDetailInfoRight">
      <div className="social-icons">
        <FaFacebookSquare />
        <FaTwitterSquare />
        <FaInstagram />
        <FaLink />
      </div>

      <div className="right-info-items">
        <h5>Facts</h5>
      </div>

      {videoInfo.original_name !== videoInfo.name
        ? rightInfoItem("Original Name", videoInfo.name)
        : null}
      {videoInfo.type ? rightInfoItem("Type", videoInfo.type) : null}

      {rightInfoItem("Status", videoInfo.status)}

      {videoInfo.release_date ? (
        //  only movie data has release date
        rightInfoItem(
          "Release Information",
          stringifyReleaseDate(videoInfo.release_date)
        )
      ) : (
        // if not it is tv data
        <div className="right-info-item">
          <h5>Networks</h5>
          {videoInfo.networks ? (
            videoInfo.networks.length > 0 ? (
              videoInfo.networks.map(network => {
                return (
                  <img
                    key={network.id}
                    src={`https://image.tmdb.org/t/p/h30${network.logo_path}`}
                    alt={network.name}
                  />
                )
              })
            ) : (
              "-"
            )
          ) : (
            <div>not yetS</div>
          )}
        </div>
      )}

      <div className="right-info-item">
        <h5>Original Language</h5>
        {/* ISO6391 is a external library for fetcing full name from shorten name */}
        <h6>{ISO6391.getName(videoInfo.original_language)}</h6>
      </div>
      <div className="right-info-item">
        <h5>Runtime</h5>
        <h6>
          {videoInfo.episode_run_time
            ? runtimeCalculator(videoInfo.episode_run_time[0])
            : runtimeCalculator(videoInfo.runtime)}{" "}
        </h6>
      </div>

      {videoInfo.budget ? (
        <div className="right-info-item">
          <h5>Budget</h5>
          <h6>${videoInfo.budget.toLocaleString()}.00</h6>
        </div>
      ) : null}

      {videoInfo.revenue ? (
        <div className="right-info-item">
          <h5>Revenue</h5>
          <h6>${videoInfo.revenue.toLocaleString()}.00</h6>
        </div>
      ) : null}

      <div className="right-info-item">
        <h5>Genres</h5>
        <ul className="button-holder">
          {videoInfo.genres
            ? videoInfo.genres.map(genre => {
                return (
                  <button key={genre.id} className="custom-button">
                    {genre.name.toUpperCase()}
                  </button>
                )
              })
            : "FETCHING"}
        </ul>
      </div>

      <div className="right-info-item">
        <h5>Keywords</h5>
        <ul className="button-holder">
          {videoKeywords[keywordsOrResults]
            ? videoKeywords[keywordsOrResults].map(keyword => {
                return (
                  <button key={keyword.id} className="custom-button">
                    {keyword.name}
                  </button>
                )
              })
            : "FETCHING..."}
        </ul>
      </div>

      <div className="right-info-">
        <h5>Content Score</h5>
        100
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.url.slice(0, 3) === "/tv") {
    console.log("OWN PROPS state", state)
    return {
      videoInfo: state.tvs.tv,
      videoKeywords: state.tvs.tvKeywords
    }
  }
  return {
    videoInfo: state.movies.movie,
    videoKeywords: state.movies.keywords
  }
}
export default withRouter(connect(mapStateToProps)(MovieDetailInfoRight))
