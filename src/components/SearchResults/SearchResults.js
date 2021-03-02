import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import './SearchResults.css';
import {Link} from 'react-router-dom';

const SearchResults = ({ filteredMakeup }) => {
  const itemsToDisplay = filteredMakeup.map((item) => {
    return (
        <SearchResult
          id={item.id}
          key={item.id}
          name={item.name}
          brand={item.brand}
          img={item["image_link"]}
          tags={item["tag_list"]}
          productType={item["product_type"]}
        />
    );
  });

  return (
      <div className="searchResultsContainer">
        {itemsToDisplay}
      </div>
  )
};

export default SearchResults;