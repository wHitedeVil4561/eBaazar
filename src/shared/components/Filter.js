import React from "react";
export const Filter = ({filterOptions}) => {
  const FILTER = "Filters";
  console.log(filterOptions, typeof filterOptions);
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xl text-dark-blue">{FILTER}</span>
      <div className="p-3 grid grid-cols-5 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-white rounded-md shadow-md">
        {filterOptions.map((item) => {
          return (
            <div className="item">
              <div className="mb-2 text-base font-roboto">{item.label}</div>
              <input className="w-full border border-input-border h-9 rounded-lg px-5 outline-none" placeholder={item.placeholder} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Filter;
