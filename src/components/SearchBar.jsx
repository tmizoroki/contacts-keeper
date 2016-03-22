import React, { PropTypes } from 'react';
import { Input, Glyphicon, Button } from 'react-bootstrap';

const SearchBar = ({textToFilter, filterText}) => {

  let handleChange = e => filterText(e.target.value);

  return (
    <form className="input-group search-group">
      <Input
        className="filter-bar"
        type="text"
        placeholder="Search"
        value={textToFilter}
        onChange={handleChange}
      />
      <span className="input-group-btn">
        <Button><Glyphicon glyph="search" /></Button>
      </span>
    </form>
  )
}

SearchBar.propTypes = {
  textToFilter: PropTypes.string,
  filterText: PropTypes.func.isRequired
}

export default SearchBar;
