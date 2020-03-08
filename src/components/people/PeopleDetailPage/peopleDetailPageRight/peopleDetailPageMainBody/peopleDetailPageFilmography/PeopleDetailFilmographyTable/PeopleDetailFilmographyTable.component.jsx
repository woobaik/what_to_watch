import React, { Fragment } from "react"
import "./PeopleDetailFilmographyTable.style.scss"
import { withRouter } from "react-router-dom"

const PeopleDetailFilmographyTable = props => {
  const { title, roles } = props
  console.log("ROLE", props)

  const navigateToMovie = (id, title, name) => {
    console.log("HELLO NAVIAGATION", id, title)
    let urlSafeTitle = title
      .toLowerCase()
      .replace(/[&#,+()/$~%.'":*?<>{}]/g, "")
      .replace(/\s/g, "-")
    let slug = id + "-" + urlSafeTitle
    if (title) {
      props.history.push(`/movie/${slug}`)
    } else if (name) {
      props.history.push(`/tv/${slug}`)
    }
  }
  if (title === "MOVIE AND TV SHOW") {
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
                <tr key={role.id + role.character}>
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
                    <span
                      className="title"
                      onClick={() =>
                        navigateToMovie(role.id, role.title, role.name)
                      }>
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
  } else if (title === "CREW") {
    return (
      <Fragment>
        <table className="People-Detail-Filmography-Table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Title and Role</th>
            </tr>
          </thead>
          <tbody>
            {roles.map(role => {
              return (
                <tr key={role.id + role.job}>
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
                    <span
                      className="title"
                      onClick={() =>
                        navigateToMovie(role.id, role.title, role.name)
                      }>
                      {role.title ? role.title : role.name}{" "}
                    </span>
                    <span className="as">in</span>{" "}
                    {role.job
                      ? role.job
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
}

export default withRouter(PeopleDetailFilmographyTable)
