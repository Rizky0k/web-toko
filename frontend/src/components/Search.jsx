// import PropTypes from 'prop-types'
import "./Search.css";
import { debounce } from "lodash";

// eslint-disable-next-line react/prop-types
const Search = ({ search }) => {

  const debounceSearch = debounce(search, 500)

  const searchChange = (event) => {
    const inputValue = event.target.value;
    debounceSearch(inputValue)
  }
  return (
    <input
      placeholder="Masukkan pencarian"
      // onChange={({ target }) => search(target.value)}
      onChange={searchChange}
    />
  );
};

export default Search;