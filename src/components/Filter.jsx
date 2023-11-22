import React, { useState } from "react";
import "./Filter.css";

function Filter({ onFilterChange }) {
  const [filterData, setFilterData] = useState({
    petStatus: "",
    type: "",
    sex: "",
    address: "",
    date: "",
  });

  const handleChange = (e) => {
    setFilterData({
      ...filterData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filterData);
  };

  return (
    <div className="search-filter">
      <div className="search-filter__header">Filter Pets</div>
      <form className="search-filter__form">
        <div>
          <h3 className="search-filter__label">Status</h3>
          <input
            type="radio"
            name="petStatus"
            id="Lost"
            value="Lost"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Lost</label>
          <input
            type="radio"
            name="petStatus"
            id="Found"
            value="Found"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Found</label>
        </div>
        <div>
          <h3 className="search-filter__label">Type</h3>
          <input
            type="radio"
            name="type"
            id="Dog"
            value="Dog"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Dog</label>
          <input
            type="radio"
            name="type"
            id="Cat"
            value="Cat"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Cat</label>
        </div>
        <div>
          <h3 className="search-filter__label">Sex</h3>
          <input
            type="radio"
            name="sex"
            id="Male"
            value="Male"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Male</label>
          <input
            type="radio"
            name="sex"
            id="Female"
            value="Female"
            className="search-filter__radio-input"
            onChange={handleChange}
          />
          <label className="search-filter__radio-label">Female</label>
        </div>
        <div className="search-filter__button-container">
          <button
            type="submit"
            className="secondary-button"
            onClick={handleSubmit}
          >
            Find
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
