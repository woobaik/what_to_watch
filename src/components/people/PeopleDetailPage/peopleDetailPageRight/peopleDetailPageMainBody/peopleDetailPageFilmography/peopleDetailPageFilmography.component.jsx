import React from "react"
import "./peopleDetailPageFilmography.style.scss"
import PhilmographyTable from "./PeopleDetailFilmographyTable/PeopleDetailFilmographyTable.component"
import { connect } from "react-redux"

const peopleDetailPageFilmography = props => {
  console.log("TABLE", props)
  const { cast, crew } = props
  return (
    <div className="People-detail-page-filmography">
      {cast && cast.length > 0 ? (
        <PhilmographyTable title="MOVIE AND TV SHOW" roles={cast} />
      ) : null}

      {crew && crew.length > 0 ? (
        <PhilmographyTable title="CREW" roles={crew} />
      ) : null}
    </div>
  )
}

const mapStateToProps = state => {
  console.log("MJ", state)
  if (
    (state.person.personCredit.cast &&
      state.person.personCredit.cast.length > 0) ||
    (state.person.personCredit.crew &&
      state.person.personCredit.crew.length > 0)
  ) {
    return {
      cast: state.person.personCredit.cast.sort((a, b) => {
        let aCastDate = a.release_date ? a.release_date : a.first_air_date
        let bCastDate = b.release_date ? b.release_date : b.first_air_date
        aCastDate = aCastDate || "2125-1-1"
        bCastDate = bCastDate || "2125-1-1"
        return Date.parse(bCastDate) - Date.parse(aCastDate)
      }),
      crew: state.person.personCredit.crew.sort((a, b) => {
        let aCastDate = a.release_date ? a.release_date : a.first_air_date
        let bCastDate = b.release_date ? b.release_date : b.first_air_date
        aCastDate = aCastDate || "2125-1-1"
        bCastDate = bCastDate || "2125-1-1"
        return Date.parse(bCastDate) - Date.parse(aCastDate)
      })
    }
  }
}

export default connect(mapStateToProps)(peopleDetailPageFilmography)
