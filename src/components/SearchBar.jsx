import React from 'react';
import { Input, Glyphicon, Button } from 'react-bootstrap';

const SearchBar = (props) =>
  (
    <form className="input-group">
      <Input type="text" placeholder="Search" />
      <span className="input-group-btn">
        <Button><Glyphicon glyph="search" /></Button>
      </span>
    </form>
  )

export default SearchBar;
