import React from 'react';
import PropTypes from 'prop-types';
// import './SearchForm.css';

export default function SearchForm({onSearchSubmitted}) {
  let searchField = null;
  const searchSubmitted = (e) => {
    e.preventDefault();
    onSearchSubmitted(searchField.value);
  }

  return (
    <form onSubmit={searchSubmitted}>
      <input ref={(e) => searchField = e} type="text" placeholder="Find Giphys..."/>
      <input type="submit" value="Search"/>
    </form>
  )

}

SearchForm.propTypes = {
  onSearchSubmitted: PropTypes.func.isRequired
};