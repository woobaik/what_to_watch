import React from "react"
import "./PeopleDetailPageMainBody.style.scss"

import DetailPageKnownFor from "./peopleDetailPageKnownFor/PeopleDetailKnownFor.component"
import DetailPageFilmography from "./peopleDetailPageFilmography/peopleDetailPageFilmography.component"

const PeopleDetailPageMainBody = () => {
  return (
    <div className="People-Detail-Page-Main-Body">
      <DetailPageKnownFor />
      <DetailPageFilmography />
    </div>
  )
}

export default PeopleDetailPageMainBody
