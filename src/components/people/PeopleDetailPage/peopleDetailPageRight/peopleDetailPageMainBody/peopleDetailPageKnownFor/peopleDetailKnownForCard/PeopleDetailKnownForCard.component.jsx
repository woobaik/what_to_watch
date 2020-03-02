import React from "react"
import "./PeopleDetailKnownForCard.style.scss"

import { IoIosImages } from "react-icons/io"

const PeopleDetailKnownForCard = props => {
  return (
    <div className="known-for-credits-card">
      {props.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w150_and_h225_bestv2${props.poster_path}`}
          alt={props.title ? props.title : props.name}
        />
      ) : (
        <div className="known-for-credits-image">
          {console.log("THIS HAS NO IMAGE", props)}
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
