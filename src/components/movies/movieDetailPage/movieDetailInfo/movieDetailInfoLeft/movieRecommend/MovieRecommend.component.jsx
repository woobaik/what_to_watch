import React from "react"
import Coverflow from "react-coverflow"
import "./MovieRecomment.style.scss"
const fn = function() {
  /* do your action */
}
const MovieRecommend = () => {
  return (
    <div className="Movie-recommend">
      hello
      <Coverflow
        displayQuantityOfSide={2}
        navigation
        infiniteScroll
        enableHeading
        media={{
          "@media (max-width: 900px)": {
            width: "600px",
            height: "300px"
          },
          "@media (min-width: 900px)": {
            width: "100%",
            height: "700px"
          }
        }}>
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0">
          <img
            src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/nMhv6jG5dtLdW7rgguYWvpbk0YN.jpg"
            alt="I am Not an Animal"
            style={{
              display: "block",
              width: "100%"
            }}
          />
        </div>
        <img
          src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/qcr9bBY6MVeLzriKCmJOv1562uY.jpg"
          alt="The Simpsons"
          data-action="http://andyyou.github.io/react-coverflow/"
        />
        <img
          src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/jQNOzoiaIQWxJAx8OUighnvnhRA.jpg"
          alt="Thieves of the Wood"
          data-action="http://naver.com"
        />
      </Coverflow>
    </div>
  )
}

export default MovieRecommend
