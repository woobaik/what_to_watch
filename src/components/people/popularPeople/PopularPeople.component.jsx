import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchPeopleList } from "../../../redux/peopleRedux/peopleActions"
import "./PopularPeople.style.scss"

import PeopleCard from "./peopleCard/PeopleCard.component"

const PopularPeople = props => {
  useEffect(
    () => {
      props.fetchPeopleList()
      // eslint-disable-next-line
    },
    // eslint-disable-next-line
    [props.peopleList]
  )

  return (
    <div className="Popular-people">
      <div className="popular-people-title">Popular People</div>
      <div className="people-container">
        {props.peopleList.map(person => {
          return (
            <PeopleCard
              id={person.id}
              key={person.id}
              profile_path={person.profile_path}
              name={person.name}
              knownFor={person.known_for}
            />
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    peopleList: state.person.peopleList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeopleList: dispatch(fetchPeopleList)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularPeople)
