import React from "react"
import "./PeopleDetailKnownFor.style.scss"
import { connect } from "react-redux"
import Card from "./peopleDetailKnownForCard/PeopleDetailKnownForCard.component"

const PeopleDetailKnownFor = props => {
  console.log("CARDS ARRAY", props.credits)
  return (
    <div className="People-detail-known-for">
      <div className="known-for-title">Known For</div>
      {props.credits.cast
        ? props.credits.cast.map(cast => {
            return (
              <Card
                key={cast.id}
                title={cast.title}
                name={cast.name}
                poster_path={cast.poster_path}
              />
            )
          })
        : null}
      <Card />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    credits: state.person.personCredit
  }
}

export default connect(mapStateToProps)(PeopleDetailKnownFor)
