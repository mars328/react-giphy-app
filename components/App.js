import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import SearchResults from './SearchResults/SearchResults';

const results = [
  {
    full: 'https://media1.giphy.com/media/g5KhmX06Q0XBu/200_s.gif',
    thumbnail: 'https://media1.giphy.com/media/g5KhmX06Q0XBu/100_s.gif'
  }, {
    full: 'https://media0.giphy.com/media/uw3fTCTNMbXAk/200_s.gif',
    thumbnail: 'https://media0.giphy.com/media/uw3fTCTNMbXAk/100_s.gif'
  }
];

export default() => (
  <div>
    <SearchForm onSearchSubmitted={(term) => console.log(term)}/>
    <SearchResults results={results}/>
  </div>
);