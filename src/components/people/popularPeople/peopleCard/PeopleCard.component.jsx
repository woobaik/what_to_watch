import React, { useEffect } from "react"
import "./PeopleCard.style.scss"
import { connect } from "react-redux"

import { fetchPeopleList } from "../../../../redux/peopleRedux/peopleActions"

const PeopleCard = props => {
  useEffect(() => {
    props.fetchPersonList()
  }, [])

  return (
    <div>
      {props.peopleList ? (
        props.peopleList.map(person => {
          return (
            <div className="People-card">
              <div className="people-card-image">
                <img
                  src="http://profile.img.afreecatv.com/LOGO/s2/s2apple/s2apple.jpg"
                  alt="actor-face"
                />
              </div>
            </div>
          )
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  console.log("People Card", state)
  return {
    peopleList: state.person.peopleList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPersonList: dispatch(fetchPeopleList)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleCard)
