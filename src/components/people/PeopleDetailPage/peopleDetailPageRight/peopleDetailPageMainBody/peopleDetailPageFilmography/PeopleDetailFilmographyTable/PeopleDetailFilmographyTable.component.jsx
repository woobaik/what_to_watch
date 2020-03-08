import React, { Fragment } from "react"
import "./PeopleDetailFilmographyTable.style.scss"
import { withRouter } from "react-router-dom"

const PeopleDetailFilmographyTable = props => {
  const { title, roles } = props
  console.log("ROLE")
  return (
    <Fragment>
      <table className="People-Detail-Filmography-Table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Title and Character</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => {
            return (
              <tr key={role.id}>
                <td>
                  {role.release_date
                    ? role.release_date
                      ? role.release_date.split("-")[0]
                      : null
                    : role.first_air_date
                    ? role.first_air_date.split("-")[0]
                    : null}
                </td>
                <td>
                  <span className="title">
                    {role.title ? role.title : role.name}{" "}
                  </span>
                  <span className="as">as</span>{" "}
                  {role.character
                    ? role.character
                    : props.match.params.query
                        .split("-")
                        .slice(1, 10)
                        .join(" ")}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

export default withRouter(PeopleDetailFilmographyTable)
