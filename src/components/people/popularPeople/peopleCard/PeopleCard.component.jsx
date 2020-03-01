import React from "react"
import "./PeopleCard.style.scss"

const PeopleCard = props => {
  console.log(props)
  return (
    <div>
      <div className="People-card">
        <div className="people-card-image">
          <img
            src={`https://image.tmdb.org/t/p/w235_and_h235_face${props.profile_path}`}
            alt="actor-face"
          />
        </div>
        <div className="people-card-name">{props.name}</div>
        <div className=".people-card-credits">
          {props.knownFor.map(show => {
            console.log(show)
            return show.name
          })}
        </div>
      </div>
    </div>
  )
}

export default PeopleCard
