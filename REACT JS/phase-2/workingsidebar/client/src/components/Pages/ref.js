import React from 'react'
//  import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema =yup.object().shape({
// //   firstName:yup.string().min(3).max(15).required(),
// firstName:yup.string().min(1, { message: 'Required' }),
//   lastName:yup.string().min(3).max(15).required(),
// //   email:yup.string().required(),
// email: yup.string().email().required(),
//   phoneNumber:yup.number().required(),
//   age:yup.number().required(),
//   state:yup.string().required(),
  
// })
 function Form()
 {
//   const {register, handleSubmit, errors}=useForm({
//        resolver: yupResolver(schema),
//   })

//   const submitForm=(data)=>
//   {
//     console.log(data)

//   }
  return (
    <div>
      <h1>FORM</h1>
      <div className='formContent'>

        <form onSubmit={handleSubmit(submitForm)}>
        <label className='formHeader'>First Name</label>
        <br/>
       <input className='formBox'type="text" placeholder="Your name.." name='firstName'   />
       {/* <p>{errors.firstName.message}</p> */}
       {/* {errors.firstName?.message && <p>{errors.firstName?.message}</p>} */}
        <br/>
        <label className='formHeader'>Last Name</label>
        <br/>

       <input  className='formBox' type="text" placeholder="Your last name.."  name='lastName'/>
       {/* <p>{errors.lastName?.message}</p> */}
        <br/>
{/*         
        <label className='formHeader' >E-mail</label>
        <br/>
        <input {...register("email")} placeholder="email" type="email" required /><p>{errors.email?.message}</p> */}

       {/* <input  className='formBox' type="text" placeholder="Your email.."  name='email' /* ref={register}*/ /> */}
       {/* <p>{errors.email?.message}</p> */}
        <br/>
        <label className='formHeader'>Phone Number</label>
        <br/>

       <input className='formBox' type="number" placeholder="Your phone number.."  name='phoneNumber' /* ref={register}*//>
       {/* <p>{errors.phoneNumber?.message}</p> */}
        <br/>
        <label className='formHeader'>Age</label>
        <br/>

       <input className='formBox' type="number" placeholder="Your Age.. "  name='age' /* ref={register}*//>
       {/* <p>{errors.age?.message}</p> */}
        <br/>
        <label   className='formHeader' >State</label>
        <br/>

       <input  className='formBox' type="text" placeholder="Your state.. "  name='state' /* ref={register}*//>
       {/* <p>{errors.state?.message}</p> */}
        <br/>
        <label className='formHeader'>City</label>
        <br/>


        <select className='formDropDown'  id="country" name="city"  /* ref={register}*/>
        <option value="australia">Tiruvarur</option>
        <option value="canada">Thanjavur</option>
        <option value="usa">Nagapattinam</option>
       </select>
       <br/>

       <label className='formHeader' >Gender</label>
       <br/>
       <input type="radio"  name="gender" value="male" />
       <label>MALE</label>
       <br/>
       <input type="radio"  name="gender" value="female" />
       <label className='femaleButton'>FEMALE</label>
       <br/>
       <input type="radio"  name="gender" value="others" />
       <label className='othersButton'>OTHERS</label>
       <br/>
       <br/>
       <br/>
       <br/>
       <input type="checkbox"  name="agree" value="conditions"  />
       <label >I agree your terms & conditions</label>
       <br/>
        <input className='submitButton' type="submit"  />
        <br/>
        <br/>
       <br/>
       <br/>
       </form>
       </div> 
       <br/>
       <br/>
       <br/>
    </div>
  )
}
export default Form;
