import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchPeopleList } from "../../../redux/peopleRedux/peopleActions"
import "./PopularPeople.style.scss"

import PeopleCard from "./peopleCard/PeopleCard.component"

const PopularPeople = props => {
  useEffect(() => {
    props.fetchPeopleList()
  }, [])

  return (
    <div className="Popular-people">
      <div className="people-container">
        {props.peopleList.map(person => {
          return (
            <PeopleCard
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
  console.log("MapSTatE TO PROPS", state)
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
