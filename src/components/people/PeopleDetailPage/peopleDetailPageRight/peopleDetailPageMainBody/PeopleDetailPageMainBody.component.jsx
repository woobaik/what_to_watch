import React from "react"
import "./PeopleDetailPageMainBody.style.scss"

import DetailPageKnownFor from "./peopleDetailPageKnownFor/PeopleDetailKnownFor.component"

const PeopleDetailPageMainBody = () => {
  return (
    <div className="People-Detail-Page-Main-Body">
      <DetailPageKnownFor />
    </div>
  )
}

export default PeopleDetailPageMainBody
