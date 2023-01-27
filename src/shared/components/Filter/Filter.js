import React from "react";
import "./Filter.scss"
export const Filter = () => {
  const FILTER = "Filters";
  return (
    <div className="main-filter">
      <div className="filter-header">{FILTER}</div>
      <div className="filter-items">
        <div className="item">
          <label >Category</label>
          <input placeholder="Filter"/>
        </div>
        <div className="item">
          <label >Brand</label>
          <input placeholder="Filter"/>
        </div>
        <div className="item">
        <label >Cost Range</label>

          <input placeholder="Filter"/>
        </div>
      </div>
    </div>
  );
};
export default Filter;
