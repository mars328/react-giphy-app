import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResultsContainer';

export default() => (
  <div>
    <SearchForm onSearchSubmitted={(term) => console.log(term)}/>
    <SearchResults/>
  </div>
);