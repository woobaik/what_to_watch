import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchPeopleList } from "../../../redux/peopleRedux/peopleActions"
import "./PopularPeople.style.scss"
import Paginate from "../../layouts/paginate/Paginate.component"
import { css } from "@emotion/core"
import SyncLoader from "react-spinners/SyncLoader"
import PeopleCard from "./peopleCard/PeopleCard.component"

const override = css`
  display: block;
  margin: 0 auto;
  height: 85vh;
  text-align: center;
  padding-top: 40vh;
  background-color: lightyellow;
`

const PopularPeople = props => {
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(
    () => {
      props.fetchPeopleList(currentPage)
      // eslint-disable-next-line
    },
    // eslint-disable-next-line
    [currentPage]
  )

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
    <div className="Popular-people">
      <div className="popular-people-title">Popular People</div>
      <div className="popular-people-paginate-container">
        <Paginate
          pageChange={currentPage => setCurrentPage(currentPage)}
          currentPage={currentPage}
        />
      </div>
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
      <div className="popular-people-paginate-container">
        <Paginate
          pageChange={currentPage => setCurrentPage(currentPage)}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log("STATTE FOR POPULAR PEOPLE", state)
  return {
    peopleList: state.person.peopleList,
    loading: state.person.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeopleList: pageNumber => dispatch(fetchPeopleList(pageNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularPeople)
