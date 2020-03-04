import React from "react"
import "./PeopleDetailHeader.style.scss"
import { connect } from "react-redux"
const PeopleDetailHeader = ({ person }) => {
  const biographyTruncate = str => {
    if (str.length > 600) {
      return str.slice(0, 600) + "..."
    }

    return str
  }

  return (
    <div className="people-detail-right-header">
      <div className="people-detail-right-header-title">{person.name}</div>
      <div className="people-detail-right-header-biography">
        <p className="people-detail-right-biography-text">Biography</p>
        {person.biography
          ? biographyTruncate(person.biography)
          : `We don't have a biography for ${person.name}`}
      </div>
      <div className="people-detail-right-header-modal-button">
        {person.biography ? (
          person.biography.length > 600 ? (
            <button>MODAL BUTTON</button>
          ) : null
        ) : null}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    person: state.person.person
  }
}

export default connect(mapStateToProps)(PeopleDetailHeader)
