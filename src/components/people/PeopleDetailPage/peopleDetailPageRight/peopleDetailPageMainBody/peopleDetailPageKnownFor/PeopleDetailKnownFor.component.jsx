import React from "react"
import "./PeopleDetailKnownFor.style.scss"
import { connect } from "react-redux"
import Card from "./peopleDetailKnownForCard/PeopleDetailKnownForCard.component"

const PeopleDetailKnownFor = props => {
  return (
    <div className="People-detail-known-for">
      <div className="known-for-title">Known For</div>
      <div className="known-for-cards-deck">
        {props.credits
          ? props.credits.map(cast => {
              return (
                <Card
                  id={cast.id}
                  key={cast.id}
                  title={cast.title}
                  name={cast.name}
                  poster_path={cast.poster_path}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log("MinJae", state)
  if (
    state.person.personCredit.cast &&
    state.person.personCredit.cast.length > 0
  ) {
    const result = state.person.personCredit.cast.sort((a, b) => {
      return b.popularity - a.popularity
    })

    return {
      credits: result.slice(0, 8)
    }
  }

  return {
    credits: state.person.personCredit.cast
  }
}

export default connect(mapStateToProps)(PeopleDetailKnownFor)
