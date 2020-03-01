import React from "react"
import "./PeopleCard.style.scss"

const PeopleCard = props => {
  const personKnownFor = () => {
    const knownForArray = []
    let str = ""
    props.knownFor.map(show => {
      if (show.name) {
        knownForArray.push(show.name)
      } else if (show.title) {
        knownForArray.push(show.title)
      }
    })

    str = knownForArray.join(", ")

    if (str.length < 35) {
      return str
    } else {
      return str.slice(0, 35) + "..."
    }
  }

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
        <div className="people-card-credits">{personKnownFor()}</div>
      </div>
    </div>
  )
}

export default PeopleCard
