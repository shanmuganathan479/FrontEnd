import React, { useContext } from 'react'
import BiodataContext from './BioData'

const APEDepartment = () => {
   const {name,EmpId,contactNo}= useContext(BiodataContext)
  return (
    <div>
        <h2>APEDepartment</h2>
       <h3>Emp name is : {name} EmpId is :{EmpId} Emp Contact No is :{contactNo}</h3>
    </div>
  )
}

export default APEDepartment

