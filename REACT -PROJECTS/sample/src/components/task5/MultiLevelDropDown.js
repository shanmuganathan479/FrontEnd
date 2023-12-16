import React, { useState } from "react";
import { SampleData } from "./SampleData";
const MultiLevelDropDown = () => {
  const [secondData, setsecondData] = useState([
    {
      name: "John",
      age: 25,
      hobbies: ["reading", "swimming"],
      address: {
        city: "New York",
        country: "USA",
      },
    },
  ]);

  const handleChange = (e) => {
    const currentId = e.target.value;
    const filterValues = SampleData.filter((item, index) => {
      return Number(currentId) === index;
    });

    setsecondData(filterValues);
  };
  return (
    <div>
      <h1>MultiLevelDropDown</h1>
      <select onChange={handleChange}>
        {SampleData.map((item, index) => {
          return (
            <option value={index} key={index}>
              {item.name}
            </option>
          );
        })}
      </select>

      {secondData.map((item, index) => {
          return (
            <select key={index}>
              <option>{item.address.city}</option>
              <option>{item.address.country}</option>
            </select>
          );
        })}

      {/* {secondData.map((item, index) => {
       return item.hobbies.map((value, ind) => {
          return (
            <select key={ind}>
              <option>{value}</option>
            </select>
          );
        });
      })} */}


    </div>
  );
};

export default MultiLevelDropDown;
