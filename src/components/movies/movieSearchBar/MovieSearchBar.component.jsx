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
  console.log("wtffffffffffffffffffffff", suggestion)
  return suggestion
}

const renderSuggestion = suggestion => {
  return <span>{suggestion.name}</span>
}

const handleSubmit = e => {
  e.preventDefault()
  console.log("hello")
}

const MovieSearch = props => {
  const status = props.isLoading ? "Loading..." : "Type to load suggestions"
  console.log("인풋밸류", props.value)
  console.log("인풋밸류로딩", props.isLoading)
  const inputProps = {
    placeholder: "Search for a movie, tv show, person...",
    autoComplete: "abcd",
    name: "search",
    id: "search",
    value: props.value,
    onChange: props.onChange
  }

  console.log("서제스천 되나?", props.suggestions)

  return (
    <Fragment>
      <form className="search-form" onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={[]}
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
  console.log("did it go through/? map state to props", state.search.value)
  return {
    suggestions: state.search.searchResults,
    value: state.search.inputValue,
    isLoading: state.search.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (_event, { newValue }) => {
      console.log("NEWVALUE", newValue)
      return dispatch(updateInputValue(newValue))
    },
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
