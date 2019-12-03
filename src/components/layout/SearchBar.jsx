import React, { Fragment, useRef } from "react";
import { connect } from "react-redux";
import { searchNobel, getNobel } from "../../actions/nobelAction";
const SearchBar = ({ searchNobel, getNobel }) => {
  const text = useRef("");
  const onChange = e => {
    searchNobel(text.current.value);
  };

  return (
    <Fragment>
      <div className="nav-wrapper">
        <h1 className="p-2">Search App</h1>
        <form className="form">
          <div className="form-group p-2">
            <label className="p-2" htmlFor="serach">
              Search
            </label>
            <input
              id="search"
              type="search"
              placeholder="Search Nobel price winner"
              ref={text}
              onChange={onChange}
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default connect(null, { searchNobel, getNobel })(SearchBar);
