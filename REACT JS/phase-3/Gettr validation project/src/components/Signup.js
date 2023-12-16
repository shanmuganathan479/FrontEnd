/* eslint-disable */
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import settrLogo from "../assests/images/settrLogo.jpg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  boxContainer: {
    "& > :not(style)": {
      m: 1,
      width: 1000,
      height: 650,
      marginLeft: 185,
      marginTop: 70,
      marginBottom: 65,
      backgroundColor: "whitesmoke",
    },
  },
  SignupContainer: {
    display: "flex",
    flexDirection: "row",
  },
  brandLogo: {
    width: 200,
    height: 200,
    borderRadius: "100%",
    position: "relative",
    left: 75,
    top: 100,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginLeft: 100,
    marginTop: 27,
    border: "2px solid violet",

    "& .MuiTextField-root": {
      margin: 8,
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: 16,
      color: "white",
      backgroundColor: "#9c27b0",
      width: 300,
    },
    "& .MuiFormHelperText-root": {
      color: "red",
    },
    "& .MuiCheckbox-root": {
      color: "#9c27b0",
      backgroundColor: "white",
      width: 0,
      height: 0,
      marginRight: 300,
    },
  },
  imageContainer: {
    border: "2px solid violet",
    width: 360,
    height: 400,
    position: "relative",
    left: 515,
    bottom: 421,
  },
  SignupHeader: {
    fontFamily: "sans-serif",
  },
  sigupLink: {
    position: "relative",
    left: 10,
    pointer: "cursor",
  },
  conditon: {
    position: "relative",
    left: 53,
    bottom: 49,
  },
  checkboxContainer: {
    marginBottom: -65,
  },
});

export default function Signup() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    navigate("/");
  };

  const handleSubmit = (values) => {
    dispatch({
      type: "SIGNUP",
      payload: {
        id: new Date().getTime(),
        values,
      },
    });
    toast.success("Hey there explore our world!", {
      position: "top-center",
    });
    setTimeout(() => {
      navigate("/content");
    }, 3000);
  };

  const handleCheck = () => {
    swal("you have accepted our conditions");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email("please enter valid email").required(),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <Box className={classes.boxContainer}>
          <Paper elevation={22} className={classes.paperContainer}>
            <div className={classes.SignupContainer}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {(props, e) => (
                  <Form>
                    <div className={classes.root}>
                      <h2 className={classes.loginHeader}>Signup</h2>
                      <Field
                        as={TextField}
                        label="Name"
                        variant="outlined"
                        type="name"
                        name="name"
                        required
                        placeholder="Enter you name"
                        color="primary"
                        helperText={<ErrorMessage name="name" />}
                      />

                      <Field
                        as={TextField}
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter you email"
                        color="primary"
                        helperText={<ErrorMessage name="email" />}
                      />
                      <Field
                        as={TextField}
                        label="Password"
                        variant="outlined"
                        type="password"
                        required
                        placeholder="Enter you password"
                        name="password"
                        color="primary"
                        helperText={<ErrorMessage name="password" />}
                      />
                      <div className={classes.checkboxContainer}>
                        <Checkbox
                          onClick={handleCheck}
                          className={classes.checkbox}
                          required
                        />{" "}
                        <p className={classes.conditon}>
                          I agree your conditions
                        </p>
                      </div>
                      <div>
                        <Button type="submit" variant="contained">
                          Signup
                        </Button>
                      </div>
                      <p>
                        Already have account ?
                        <Link
                          className={classes.sigupLink}
                          onClick={handleSwitch}
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className={classes.imageContainer}>
              <img
                src={settrLogo}
                alt="NoImage"
                className={classes.brandLogo}
              ></img>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  );
}
