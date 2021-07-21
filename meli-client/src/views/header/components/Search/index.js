import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

import "./style.css";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleQueryChange = ({ target: { value } }) => setQuery(value);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") onSearch(query);
  };

  return (
    <InputGroup className="search-input-group">
      <FormControl
        className="search-input"
        placeholder="Nunca dejes de buscar"
        aria-label="Search Field"
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        aria-label="Search Button"
        className="search-button"
        variant="light"
        onClick={() => onSearch(query)}
      >
        <div className="search-icon">
          <AiOutlineSearch />
        </div>
      </Button>
    </InputGroup>
  );
};

export default Search;
