import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangedHandler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangedHandler}
  />
);

export default SearchBox;
