import React from "react"
import { connect } from "react-redux"
import Autosuggest from "react-autosuggest"
import "./MovieSearchBar.style.scss"
import { IoIosSearch } from "react-icons/io"
import { MdLocalMovies, MdTv, MdPerson, MdSearch } from "react-icons/md"

import { withRouter } from "react-router-dom"

import {
  updateInputValue,
  loadSuggestions,
  clearSuggestions
} from "../../../redux/searchRedux/searchActions"

const renderSuggestion = suggestion => {
  let icon = undefined
  switch (suggestion.media_type) {
    case "movie":
      icon = <MdLocalMovies />
      break
    case "tv":
      icon = <MdTv />
      break
    case "person":
      icon = <MdPerson />
      break
    default:
      icon = <MdSearch />
      break
  }

  return (
    <div className="suggestion-row">
      {icon}
      <span className="suggestion-title-text">
        {suggestion.name ? suggestion.name : suggestion.title}
      </span>

      <span className="suggestion-title-year-or-department">
        {suggestion.first_air_date ||
        suggestion.release_date ||
        suggestion.known_for_department
          ? `(${suggestionReleaseDateHelper(suggestion)})`
          : null}
      </span>
    </div>
  )
}

const suggestionReleaseDateHelper = suggestion => {
  if (suggestion.media_type === "tv") {
    return suggestion.first_air_date.split("-")[0]
  } else if (suggestion.media_type === "movie") {
    return suggestion.release_date.split("-")[0]
  } else {
    return suggestion.known_for_department
  }
}

const handleSubmit = e => {
  e.preventDefault()
}

const MovieSearch = props => {
  const status = props.isLoading ? "Loading..." : "Type to load suggestions"

  const getSuggestionValue = suggestion => {
    return suggestion.name || suggestion.title
  }

  const onSuggestionSelected = (_event, { suggestion }) => {
    let mediaType = suggestion.media_type
    if (mediaType === "person") {
      mediaType = "people"
    }

    let title = suggestion.title || suggestion.name
    let urlSafeTitle = title
      .toLowerCase()
      .replace(/[&#,+()/$~%.'":*?<>{}]/g, "")
      .replace(/\s/g, "-")
    let slug = suggestion.id + "-" + urlSafeTitle
    props.history.push(`/${mediaType}/${slug}`)
  }

  const inputProps = {
    placeholder: `TYPE HERE for Searching For a Movie, TV show, Person...
    autoComplete: "off",
    name: "search",
    id: "search",
    value: props.value,
    onChange: props.onChange
  }

  return (
    <div className="search-form-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={props.suggestions}
          onSuggestionsFetchRequested={props.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={props.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={onSuggestionSelected}
          focusInputOnSuggestionClick={false}
        />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    suggestions: state.search.searchResults,
    value: state.search.inputValue,
    isLoading: state.search.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (_event, { newValue }) => {
      return dispatch(updateInputValue(newValue))
    },
    onSuggestionsFetchRequested: ({ value }) =>
      dispatch(loadSuggestions(value)),
    onSuggestionsClearRequested: () => dispatch(clearSuggestions())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieSearch)
)
