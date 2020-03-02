import React from "react"
import "./PeopleDetailPageRight.style.scss"
import HorizontalDivider from "../../../layouts/divider/HorizontalDivider.component"
import PeopleDetailHeader from "./PeopleDetailHeader/PeopleDetailHeader.component"

const PeopleDetailPageRight = () => {
  return (
    <div className="People-detail-page-right">
      <PeopleDetailHeader />
      <HorizontalDivider />
    </div>
  )
}

export default PeopleDetailPageRight
