import React, { useState } from "react"
import "./PeopleDetailHeader.style.scss"
import { connect } from "react-redux"

const PeopleDetailHeader = ({ person }) => {
	const [readMore, setReadMore] = useState(false)

	// if person biography is longer than 600, truncate this biography
	const biographyTruncate = (str) => {
		if (str.length > 600) {
			return str.slice(0, 600) + "..."
		}

		return str
	}

	return (
		<div className="people-detail-right-header">
			<div className="people-detail-right-header-title">{person.name}</div>
			<div className="people-detail-right-header-biography">
				<p className="people-detail-right-biography-text">Biography</p>
				{person.biography
					? readMore
						? person.biography
						: biographyTruncate(person.biography)
					: `We don't have a biography for ${person.name} yet!`}
			</div>
			<div className="people-detail-right-header-modal-button">
				{person.biography ? (
					person.biography.length > 600 ? (
						readMore ? null : (
							<button onClick={() => setReadMore(true)}>Read More</button>
						)
					) : null
				) : null}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		person: state.person.person,
	}
}

export default connect(mapStateToProps)(PeopleDetailHeader)
