// import { searchProduct } from "../api";
// import PropTypes from 'prop-types'
import './Search.css'

// eslint-disable-next-line react/prop-types
const Search = ({ search }) => {
  return (
    <input
      placeholder="Masukkan pencarian"
      onChange={({ target }) => search(target.value)}
    />
  );
};
// Search.PropTypes = {
//   search: PropTypes.func.isRequired
// }

export default Search;
