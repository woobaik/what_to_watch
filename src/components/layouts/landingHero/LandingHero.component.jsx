import React from "react"
import "./LandingHero.style.scss"

import MovieSearchBar from "../../movies/movieSearchBar/MovieSearchBar.component"

const LandingHero = () => {
	return (
		<div className="Landing-hero">
			<div className="hero-img-container">
				<div className="hero-content">
					<div className="hero-text">
						<h1>Welcome.</h1>
						<h3>
							Millions of movies, TV shows and people to discover. Explore now.
						</h3>
					</div>
					<div className="hero-search-bar">
						<MovieSearchBar sticky={true} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingHero
