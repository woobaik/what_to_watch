import React from "react"
import "./PeopleDetailHeader.style.scss"
const PeopleDetailHeader = () => {
  return (
    <div className="people-detail-right-header">
      <div className="people-detail-right-header-title">Timothee Chalamet</div>
      <div className="people-detail-right-header-biography">
        <p className="people-detail-right-biography-text">Biography</p>
        Timothée Hal Chalamet (born December 27, 1995) is an American actor.
        Chalamet began his acting career in short films before appearing in the
        television drama series Homeland. He made his feature film debut in
        Jason Reitman's drama Men, Women & Children (2014) and appeared in
        Christopher Nolan's science fiction film Interstellar (2014). In 2017,
        he gained wider recognition for his supporting roles in Greta Gerwig's
        directorial debut Lady Bird and Scott Cooper's western Hostiles, and for
        his lead role in Luca Guadagnino's…
      </div>
      <div className="people-detail-right-header-modal-button">
        <button>MODAL BUTTON</button>
      </div>
    </div>
  )
}

export default PeopleDetailHeader
