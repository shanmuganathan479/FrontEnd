import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState,useEffect } from "react";
import swal from 'sweetalert';
import CircularProgress from '@mui/material/CircularProgress';
import "yup-phone"

const schema = yup.object().shape(
  {
   firstName: yup.string().min(3).max(15).required(),
   lastName: yup.string().min(3).max(15).required(),
   email: yup.string().email().required(),
  // phoneNumber: yup.number().required(),
  phoneNumber: yup.string().phone().required(),
   age: yup.number().min(3).max(100).required(),
   state: yup.string().required(),
   city:yup.string().required(),
   gender:yup.string().required()

});

(async () => 
{
  console.log(await schema.phoneNumber.isValid("+919876543210"));
})();

const states = [
  { id: "AP", name: "Andhra Pradesh" },
  { id: "G", name: "Goa" },
  { id: "KL", name: "Kerala" },
  { id: "TN", name: "Tamilnadu" },
];

const cities = [
  { id: "AP", stateId: "AP", name: "Guntur" },
  { id: "AP", stateId: "AP", name: "Tirupati" },
  { id: "G", stateId: "G", name: "Mapusa" },
  { id: "G", stateId: "G", name: "Panaji" },
  { id: "KL", stateId: "KL", name: "Aluva" },
  { id: "KL", stateId: "KL", name: "Kochi" },
  { id: "TN", stateId: "TN", name: "Chennai" },
  { id: "TN", stateId: "TN", name: "Madurai" },
  { id: "TN", stateId: "TN", name: "Thiruvannamalai" },
];


const Form = () => 
{
  let [newSpin, setNewSpin] = useState(false)
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [email,setEmail]=useState()
  const [phoneNumber,setPhoneNumber]=useState()
  const [age,setAge]=useState()
  const [state,setState]=useState()
  const [city,setCity]=useState()
   const [enableSubmit,setEnableSubmit]=useState(true)
  
  const spinner = () => {
    setNewSpin(true);
  
    setTimeout(() => 
    {
    setNewSpin(false)
    }, 3000)};


    let [check, setCheck] = useState(false)

  const handleCheck = () => {
    setEnableSubmit(false)
    swal("Conditions", "We are storing your data into dom only because we dont have separate database", "success");
    
    setTimeout(() => 
    {
    setCheck(false)
    }, 3000)};





  const { register, handleSubmit,formState: { errors }, reset, } = useForm({
    resolver: yupResolver(schema),
  });


  const handleForm=(e,data)=>
  {
    e.preventDefault();
    swal("Successfully Registered")

     console.log(data);
    reset(); 
  }


  useEffect(() => {
    setState(states);
  }, []);

  const handleState = (id) => {
    const dt = cities.filter((x) => x.stateId === id);
    setCity(dt);
  };






  
  
  return (
       <div> 
       <div>
    {/* <form onSubmit={handleSubmit(onSubmitHandler)}> */}
    <form onSubmit={handleForm}>
       <h1>FORM</h1>
        <br />
        <div className='formContent'>
        
      <label className='formHeader1'>First Name</label>
      <br/>
      <input {...register("firstName")} placeholder="Enter you firstname" type="text" required  className='formBox' value={firstName}/>
      <p className='errorMessage'>{errors.firstName?.message}</p>
      <br />

      <label className='formHeader2'>Last Name</label>
        <br/>
      <input {...register("lastName")} placeholder="Enter your lastname" type="text" required  className='formBox' value={lastName}/>
      <p className='errorMessage'>{errors.lastName?.message}</p>
      <br />

      <label className='formHeader3' >E-mail</label>
      <br/>
      <input {...register("email")} placeholder="Enter your email" type="email" required className='formBox' value={email}/>
      <p className='errorMessage'>{errors.email?.message}</p>
      <br />

      <label className='formHeader4'>Phone Number</label>
      <br/>
      
      {/* <select {...register("phoneNumber")} className='phoneDropdown'  id="phoneNumber" name="phoneNumber" value={phoneNumber}>
        <option value="+91" selected>+91</option>
        <option value="+61">+61</option>
        <option value="+1">+1</option>
        <option value="+45">+45</option>
        <option value="+62">+62</option>
        <option value="+81">+81</option>
       </select> */}
       &nbsp;

      <input {...register("phoneNumber")} 
      placeholder="Enter your phonenumber" type="number" required className='formBox' id="Number" value={phoneNumber} /> 
      <p className='errorMessage'>{errors.phoneNumber?.message}</p>

      <br />

      <label className='formHeader5'>Age</label>
        <br/>
      <input {...register("age")} placeholder="Enter your age" type="number" required className='formBox' value={age} />
      <p className='errorMessage'>{errors.age?.message}</p>
      <br />







      <div className="dropdown">
     
      <label   className='formHeader6' >State</label>
        <br/>
        
      <select
        id="ddlStates"
        className='formDropDown'
        onChange={(e) => handleState(e.target.value)}
      >
        <option value="0">Select State</option>
        {state && state !== undefined
          ? state.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.name}
                </option>
              );
            })
          : "No State"}
      </select>
      
      <br></br>
      <label className='formHeader7'>City</label>
        <br/> 
      <select id="ddlCity"  className='formDropDown2'>
        <option value="0">Select City</option>
        {city && city !== undefined
          ? city.map((ctr, index) => {
              return (
                <option key={index} value={ctr.id}>
                  {ctr.name}
                </option>
              );
            })
          : "No City"}
      </select>
    </div>


     

        {/* <select {...register("state")} className='formDropDown'  id="state" name="state" value={state}>

       <option value="select you state..." selected>Select your state.....</option>
        <option value="tiruvarur">TamilNadu</option>
        <option value="thanjavur">AndhraPradesh</option>
        <option value="nagapattinam">Kerala</option>
       </select>
       <br/> */}


       


      {/* <label className='formHeader7'>City</label>
        <br/>  */}


      {/* <select {...register("city")} className='formDropDown'  id="country" name="city" value={city}>

       <option value="select you state..." selected>Select your city.....</option>
        <option value="tiruvarur">Tiruvarur</option>
        <option value="thanjavur">Thanjavur</option>
        <option value="nagapattinam">Nagapattinam</option>

        <option value="vijayawada">Viajayawada</option>
        <option value="tirupati">Tirupati</option>
        <option value="guntur">Guntur</option>

        <option value="kochi">Kochi</option>
        <option value="kozhikode">Kozhikode</option>
        <option value=""thrissur>Thrissur</option>
       </select> */}





       <br/>
       <br/>
       <br/>

      <label className='formHeader8' >Gender</label>
       <br/>
       <input {...register("gender")} type="radio"  name="gender" value="male" required checked />
       <label>Male</label>
       <br/>
       <input {...register("gender")} type="radio"  name="gender" value="female" required/>
       <label className='femaleButton'>Female</label>
       <br/>
       <input {...register("gender")}  type="radio"  name="gender" value="others" required/>
       <label className='othersButton'>Others</label>

       <br/>
       <br />
      <br />
       <input type="checkbox" onClick={handleCheck}  name="agree" value="conditions" required />
       <label >I agree your terms & conditions</label>
       <br/>
       <a href="http://127.0.0.1:5500/src/components/Pages/blank.html" target="_blank">&read more....</a>
       {
        check && (
         <CircularProgress />
          )
      }
       <br/>
       <br/>
      <br/>
      <br />
      <button disabled={enableSubmit} type="submit"  onClick={spinner} id="submitButton"> submit</button>
      <br/>
      
      {
        newSpin && (
         <CircularProgress />
          )
      }
      <br />
      <br />
      </div>
      <br/>
     
    </form>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>

    
  );
};

export default Form;

