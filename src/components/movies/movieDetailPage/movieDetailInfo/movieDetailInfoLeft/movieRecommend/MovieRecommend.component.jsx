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
  console.log("MovieRECOMMEND", props.recommendedVideos.results)

  return (
    <div className="Movie-recommend">
      <div className="Movie-recommend-title">Movie Recommend</div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={100000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-items">
        {props.recommendedVideos.results &&
        props.recommendedVideos.results.length > 0 ? (
          props.recommendedVideos.results.map(result => {
            return (
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${result.poster_path}`}
                />
                <div>{result.name ? result.name : result.title}</div>
              </div>
            )
          })
        ) : (
          <div>hello</div>
        )}
      </Carousel>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log("VIDEO PROOPS", state)
  console.log("VIDEO PROOPS", ownProps)

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
