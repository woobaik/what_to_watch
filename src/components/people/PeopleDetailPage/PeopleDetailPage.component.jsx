import React, { useEffect } from "react"
import "./PeopleDetailPage.style.scss"
import { connect } from "react-redux"

import { fetchPersonDetail } from "../../../redux/peopleRedux/peopleActions"

import PeopleDetailPageLeft from "./peopleDetailPageLeft/PeopleDetailPageLeft.component"
import PeopleDetailPageRight from "./peopleDetailPageRight/PeopleDetailPageRight.component"

const PeopleDetailPage = props => {
  console.log("SEXSSUKANG", props)
  useEffect(() => {
    props.fetchPersonDetail()
  }, [])

  return (
    <div className="people-detail-page">
      <div className="people-detail-left">
        <PeopleDetailPageLeft />
      </div>
      <div className="people-detail-right">
        <PeopleDetailPageRight />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log("Map State To Props- Detail Page", state)
  return {
    person: state.person.person
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("MAP DISPATCH TO PROPS", ownProps)
  let personId = ownProps.match.params.query.split("-")[0]

  return {
    fetchPersonDetail: () => dispatch(fetchPersonDetail(personId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetailPage)
