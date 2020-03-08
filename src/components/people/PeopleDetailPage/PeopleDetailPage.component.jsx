import React, { useEffect } from "react"
import "./PeopleDetailPage.style.scss"
import { connect } from "react-redux"

import {
  fetchPersonDetail,
  fetchPersonCredit,
  cleanUpPersonDetail
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
  useEffect(() => {
    props.fetchPersonDetail()
    props.fetchPesonCredits()

    return () => {
      props.cleanUpPerson()
    }
    // eslint-disable-next-line
  }, [props.match.url])

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
  return {
    person: state.person.person,
    personCredit: state.person.personCredit,
    loading: state.person.loading
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let personId = ownProps.match.params.query.split("-")[0]

  return {
    fetchPersonDetail: () => dispatch(fetchPersonDetail(personId)),
    fetchPesonCredits: () => dispatch(fetchPersonCredit(personId)),
    cleanUpPerson: () => dispatch(cleanUpPersonDetail())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetailPage)
