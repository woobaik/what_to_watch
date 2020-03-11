import React from "react"
import "./ActorCard.styles.scss"
import { useHistory } from "react-router-dom"
import { MdPerson } from "react-icons/md"

const ActorCard = props => {
  // Navigate to person detail

  let history = useHistory()
  const navigateToPersonDetail = () => {
    let personUrl = props.id + "-" + props.name.replace(/[\W]/g, "-")

    history.push(`/people/${personUrl}`)
  }

  return (
    <div className="ActorCard" onClick={navigateToPersonDetail}>
      {/* w138 h175 */}
      {props.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w138_and_h175_face${props.profile_path}`}
          alt="actor"
        />
      ) : (
        <div className="no-image-person">
          <MdPerson />
        </div>
      )}
      <div className="actor-card-description">
        <p className="actor-card-name">{props.name}</p>
        <p className="actor-card-role">{props.character}</p>
      </div>
    </div>
  )
}

export default ActorCard
