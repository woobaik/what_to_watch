import React from "react"
import "./PeopleDetailKnownForCard.style.scss"
import { useHistory } from "react-router-dom"
import { IoIosImages } from "react-icons/io"

const PeopleDetailKnownForCard = props => {
  const history = useHistory()

  const navigateToMovieDetail = () => {
    let urlTarget = props.title ? props.title : props.name

    let urlSafeTitle = urlTarget
      .toLowerCase()
      .replace(/[&#,+()/$~%.'":*?<>{}]/g, "")
      .replace(/\s/g, "-")
    let slug = props.id + "-" + urlSafeTitle

    if (props.title) {
      history.push(`/movie/${slug}`)
    } else {
      history.push(`/tv/${slug}`)
    }
  }

  return (
    <div className="known-for-credits-card" onClick={navigateToMovieDetail}>
      {props.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w150_and_h225_bestv2${props.poster_path}`}
          alt={props.title ? props.title : props.name}
        />
      ) : (
        <div className="known-for-credits-image">
          <IoIosImages />
        </div>
      )}

      <div className="known-for-credit-title">
        {props.title ? props.title : props.name}
      </div>
    </div>
  )
}

export default PeopleDetailKnownForCard
