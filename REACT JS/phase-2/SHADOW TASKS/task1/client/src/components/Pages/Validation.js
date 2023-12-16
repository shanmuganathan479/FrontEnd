// import yup from 'react-yup'
import * as yup from "yup"

 export const userValiadtion =yup.object().shape({
    firstName:yup.string().min(3).max(15).required(),
    lasttName:yup.string().min(3).max(15).required(),
    // email:yup.string.email().required(),   

})