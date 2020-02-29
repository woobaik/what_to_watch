import React from "react"
import "./PeopleCard.style.scss"
import { connect } from "react-redux"

import { fetchPersonDetail } from "../../../../redux/peopleRedux/peopleActions"

const PeopleCard = props => {
  console.log("PEOPLE CARD", props)
  return (
    <div className="People-card">
      <div className="people-card-image">
        <img
          src="https://image.tmdb.org/t/p/w235_and_h235_face/5MgWM8pkUiYkj9MEaEpO0Ir1FD9.jpg"
          alt="actor-face"
        />
      </div>
      <div className="people-card">
        <p className="people-card-name">Cho Yeo-jeong</p>
        <p className="people-card-credits">
          Parasite, The Target, The concubine
        </p>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPersonData: dispatch(fetchPersonDetail)
  }
}

export default connect(null, mapDispatchToProps)(PeopleCard)
