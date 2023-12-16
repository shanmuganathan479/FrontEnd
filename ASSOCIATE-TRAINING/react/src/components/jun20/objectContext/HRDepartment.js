import React from "react";
import { BiodataProvider } from "./BioData";
import APEDepartment from "./APEDepartment";
const HRDepartment = () => {

    
  return (
    <div>
      <h2>HRDepartment</h2>
      <BiodataProvider
        value={{ name: "shan", EmpId: "I6135", contactNo: 8111091455 }}
      >
        <APEDepartment />
      </BiodataProvider>
    </div>
  );
};

export default HRDepartment;
