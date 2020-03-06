import React from "react"
import "./PeopleCard.style.scss"
import { withRouter } from "react-router-dom"
import { MdPerson } from "react-icons/md"

const PeopleCard = props => {
  const personKnownFor = () => {
    const knownForArray = []
    let str = ""
    props.knownFor.forEach(show => {
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

  const onClickUrl = () => {
    const urlSafeName = props.name.replace(/\s/g, "-")
    props.history.push(`/people/${props.id}-${urlSafeName}`)
  }
  return (
    <div className="People-card" onClick={onClickUrl}>
      <div className="people-card-image">
        {props.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w235_and_h235_face${props.profile_path}`}
            alt={props.name}
          />
        ) : (
          <MdPerson />
        )}
      </div>
      <div className="people-card-name">{props.name}</div>
      <div className="people-card-credits">{personKnownFor()}</div>
    </div>
  )
}

export default withRouter(PeopleCard)
