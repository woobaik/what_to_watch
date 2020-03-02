import React from "react"
import "./peopleDetailPageLeft.style.scss"

import { connect } from "react-redux"

const PeopleDetailPageLeft = props => {
  // need to get dead date if person has passed away

  const detailLeftItemGenerator = (header, content) => {
    console.log("greeting!", content)
    if (content && content.slice(0, 8) === "https://") {
      return (
        <div className="people-detail-left-info-item">
          <div className="detail-info-item-title">{header}</div>
          <div className="detail-info-item-content">
            <a href={content}>{content}</a>
          </div>
        </div>
      )
    }
    if (content && typeof content === "object") {
      return (
        <div className="people-detail-left-info-item">
          <div className="detail-info-item-title">{header}</div>
          {content.map((name, index) => {
            return (
              <div key={index} className="detail-info-item-content">
                {name}
              </div>
            )
          })}
        </div>
      )
    }

    return (
      <div className="people-detail-left-info-item">
        <div className="detail-info-item-title">{header}</div>
        <div className="detail-info-item-content">{content}</div>
      </div>
    )
  }

  return (
    <div className="People-detail-page-left">
      <div className="people-detail-left-image">
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.person.profile_path}`}
          alt={props.person.name}
        />
        <div className="people-detail-left-info">
          <div className="people-detail-left-info-title">Personal Info</div>

          {detailLeftItemGenerator(
            "Known For",
            props.person.known_for_department
          )}

          {props.person.gender === 1
            ? detailLeftItemGenerator("Gender", "Female")
            : detailLeftItemGenerator("Gender", "Male")}

          {detailLeftItemGenerator("Birthday", props.person.birthday)}

          {detailLeftItemGenerator(
            "Place of birth",
            props.person.place_of_birth
          )}

          {props.person.homepage
            ? detailLeftItemGenerator("Official Site", props.person.homepage)
            : null}

          {detailLeftItemGenerator("Also Known As", props.person.also_known_as)}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    person: state.person.person
  }
}
export default connect(mapStateToProps)(PeopleDetailPageLeft)
