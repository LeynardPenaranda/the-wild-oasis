import PropTypes from "prop-types";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

//eslint-disable-next-line
function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  const sortBy = searchParams.get("sortBy") || "";
  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
};
export default SortBy;
