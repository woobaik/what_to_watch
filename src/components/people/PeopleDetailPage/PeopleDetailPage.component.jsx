import React, { useEffect } from "react"
import "./PeopleDetailPage.style.scss"
import { connect } from "react-redux"

import {
  fetchPersonDetail,
  fetchPersonCredit
} from "../../../redux/peopleRedux/peopleActions"
import { css } from "@emotion/core"

import PeopleDetailPageLeft from "./peopleDetailPageLeft/PeopleDetailPageLeft.component"
import PeopleDetailPageRight from "./peopleDetailPageRight/PeopleDetailPageRight.component"
import { SyncLoader } from "react-spinners"

//LOADING SPINNER
const override = css`
  display: block;
  margin: 0 auto;
  height: 85vh;
  text-align: center;
  padding-top: 40vh;
  background-color: lightyellow;
`

const PeopleDetailPage = props => {
  console.log("우오오 tv", props)
  useEffect(() => {
    props.fetchPersonDetail()
    props.fetchPesonCredits()
  }, [])

  if (props.loading) {
    return (
      <SyncLoader
        css={override}
        size={20}
        //size={"150px"} this also works
        color={"#3cb"}
        loading={true}
        margin={5}
      />
    )
  }

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
  console.log("우오오 Map State To Props- Detail Page", state)
  return {
    person: state.person.person,
    personCredit: state.person.personCredit,
    loading: state.person.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("MAP DISPATCH TO PROPS", ownProps)
  let personId = ownProps.match.params.query.split("-")[0]

  return {
    fetchPersonDetail: () => dispatch(fetchPersonDetail(personId)),
    fetchPesonCredits: () => dispatch(fetchPersonCredit(personId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetailPage)
