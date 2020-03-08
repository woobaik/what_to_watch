import React from "react"
import { withRouter } from "react-router-dom"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./MovieRecomment.style.scss"

import { connect } from "react-redux"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 2000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
}
const MovieRecommend = props => {
  const carouselNavigation = (type, id, name) => {
    let urlSafeTitle = name
      .toLowerCase()
      .replace(/[&#,+()/$~%.'":*?<>{}]/g, "")
      .replace(/\s/g, "-")
    if (type === "tv") {
      props.history.push(`/tv/${id}-${urlSafeTitle}`)
    } else {
      props.history.push(`/movie/${id}-${urlSafeTitle}`)
    }
  }

  console.log("Eminem", props)

  if (
    props.recommendedVideos.results &&
    props.recommendedVideos.results.length === 0
  ) {
    return null
  }
  return (
    <div className="Movie-recommend">
      <div className="Movie-recommend-title">Movie Recommend</div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="carousel-container"
        dotListClass="react-multi-carousel-dot-list"
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
        {props.recommendedVideos.results &&
        props.recommendedVideos.results.length > 0 ? (
          props.recommendedVideos.results.map(result => {
            return (
              <div
                className="movie-detail-carousel-card"
                key={result.id}
                onClick={() =>
                  carouselNavigation(
                    result.name ? "tv" : "movie",
                    result.id,
                    result.name ? result.name : result.title
                  )
                }>
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${result.poster_path}`}
                  alt={result.name ? result.name : result.title}
                />
                <div>{result.name ? result.name : result.title}</div>
              </div>
            )
          })
        ) : (
          <div></div>
        )}
      </Carousel>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.url.slice(0, 4) === "/tv/") {
    return {
      recommendedVideos: state.tvs.recomm
    }
  }

  return {
    recommendedVideos: state.movies.recomm
  }
}

export default withRouter(connect(mapStateToProps)(MovieRecommend))
