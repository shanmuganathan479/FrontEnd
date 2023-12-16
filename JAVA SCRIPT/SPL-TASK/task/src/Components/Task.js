import React from "react";
import Hospital from "./HospitalData";
export default function task() {
  return (
    <div>
      <h1 className="HD"> HOSPITAL DATA'S</h1>

      <div style={{ display: "inline-block" }}>

        

        <table className="class1" border="3px solid" height="363px" >
          {/* <tr>Category1:Medications</tr> */}

          <tr>
            
            <th>Medications↓</th>
            <th>Name</th>
            <th>Strength</th>
            <th>Dose</th>
            <th>Route</th>
            <th>Sig</th>
            <th>PillCount</th>
            <th>Refills</th>
          </tr>

          {Hospital.medications.map((item3) => {
            return (
             
              <>
                {item3.aceInhibitors.map((sub) => {
                  return (
                    <>
                    
                      <th>AceInhibitors</th>
                      <td>{sub.name}</td>
                      <td>{sub.strength}</td>
                      <td>{sub.dose}</td>
                      <td>{sub.route}</td>
                      <td>{sub.sig}</td>
                      <td>{sub.pillCount}</td>
                      <td>{sub.refills}</td>
                    </>
                  );
                })}
              </>
            );
          })}

          {Hospital.medications.map((item3) => {
            return (
              <>
                {item3.antianginal.map((sub) => {
                  return (
                    <tr>
                      <th>Aantianginal</th>
                      <td>{sub.name}</td>
                      <td>{sub.strength}</td>
                      <td>{sub.dose}</td>
                      <td>{sub.route}</td>
                      <td>{sub.sig}</td>
                      <td>{sub.pillCount}</td>
                      <td>{sub.refills}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}

          {Hospital.medications.map((item3) => {
            return (
              <>
                {item3.anticoagulants.map((sub) => {
                  return (
                    <tr>
                      <th>Anticoagulants</th>
                      <td>{sub.name}</td>
                      <td>{sub.strength}</td>
                      <td>{sub.dose}</td>
                      <td>{sub.route}</td>
                      <td>{sub.sig}</td>
                      <td>{sub.pillCount}</td>
                      <td>{sub.refills}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}

          {Hospital.medications.map((item3) => {
            return (
              <>
                {item3.betaBlocker.map((sub) => {
                  return (
                    <tr>
                      <th>Beta Blocker</th>
                      <td>{sub.name}</td>
                      <td>{sub.strength}</td>
                      <td>{sub.dose}</td>
                      <td>{sub.route}</td>
                      <td>{sub.sig}</td>
                      <td>{sub.pillCount}</td>
                      <td>{sub.refills}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}

          {Hospital.medications.map((item3) => {
            return (
              <>
                {item3.diuretic.map((sub) => {
                  return (
                    <tr>
                      <th>Diuretic</th>
                      <td>{sub.name}</td>
                      <td>{sub.strength}</td>
                      <td>{sub.dose}</td>
                      <td>{sub.route}</td>
                      <td>{sub.sig}</td>
                      <td>{sub.pillCount}</td>
                      <td>{sub.refills}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}

          {Hospital.medications.map((item3) => {
            return (
              <>
                {item3.mineral.map((sub) => {
                  return (
                    <>
                      <th>Mineral</th>
                      <td>{sub.name}</td>
                      <td>{sub.strength}</td>
                      <td>{sub.dose}</td>
                      <td>{sub.route}</td>
                      <td>{sub.sig}</td>
                      <td>{sub.pillCount}</td>
                      <td>{sub.refills}</td>
                    </>
                  );
                })}
              </>
            );
          })}
        </table>
      </div>
      <div style={{ display: "inline-block" }}>
        <table border="3px solid" height="363px">
         {/* <tr>Category2:Labs</tr> */}
          <tr>   
             
            <th>Name</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
          {Hospital.labs.map((item) => {
            console.log("print", item);
            return (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                  <td>{item.location}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>

      <div style={{ display: "inline-block" }}>
        <table border="3px solid" height="363px">
          {/* <tr >Category3:Imaging</tr> */}
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
          {Hospital.imaging.map((item1) => {
            return (
              <>
                <tr>
                  <td>{item1.name}</td>
                  <td>{item1.time}</td>
                  <td>{item1.location}</td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
}