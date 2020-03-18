import React, { Fragment } from "react"
import { connect } from "react-redux"
import Autosuggest from "react-autosuggest"
import "./MovieSearchBar.style.scss"
import { IoIosSearch } from "react-icons/io"

import {
  updateInputValue,
  loadSuggestions,
  clearSuggestions
} from "../../../redux/searchRedux/searchActions"

const getSuggestionValue = suggestion => {
  console.log("wtf", suggestion)
  return suggestion.name
}

const renderSuggestion = suggestion => {
  return <span>{suggestion.name}</span>
}

const handleSubmit = e => {
  e.preventDefault()
  console.log("hello")
}

const MovieSearch = props => {
  console.log("박광우", props)
  const status = props.isLoading ? "Loading..." : "Type to load suggestions"

  const inputProps = {
    placeholder: "Search for a movie, tv show, person...",
    autoComplete: "abcd",
    name: "search",
    id: "search",
    value: props.value,
    onChange: props.onChange
  }

  return (
    <Fragment>
      <form className="search-form" onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={props.suggestions}
          onSuggestionsFetchRequested={props.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={props.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />

        <button id="search-icon">
          <IoIosSearch />
        </button>
      </form>
    </Fragment>
  )
}

const mapStateToProps = state => {
  console.log("did it go through/? map state to props", state.search)
  return {
    suggestions: state.search.searchResults,
    value: state.search.inputValue,
    isLoading: state.search.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (event, { newValue }) => dispatch(updateInputValue(newValue)),
    onSuggestionsFetchRequested: ({ value }) =>
      dispatch(loadSuggestions(value)),
    onSuggestionsClearRequested: () => dispatch(clearSuggestions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch)

// <input
// type="text"
// id="search"
// placeholder="Search for a movie, tv show, person..."
// autoComplete="off"
// />
