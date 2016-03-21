import React, { PropTypes } from 'react';
import { Input, Glyphicon, Button } from 'react-bootstrap';

const SearchBar = ({filterText, onUserInput}) => {

  let handleChange = e => onUserInput(e.target.value);

  return (
    <form className="input-group">
      <Input
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={handleChange}
      />
      <span className="input-group-btn">
        <Button><Glyphicon glyph="search" /></Button>
      </span>
    </form>
  )
}

SearchBar.propTypes = {
  filterText: PropTypes.string,
  onUserInput: PropTypes.func.isRequired
}

export default SearchBar;
