/* eslint-disable */
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import settrLogo from "../assests/images/settrLogo.jpg";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@material-ui/core/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  boxContainer: {
    "& > :not(style)": {
      m: 1,
      width: 1000,
      height: 500,
      marginLeft: 185,
      marginTop: 70,
      marginBottom: 5,
      backgroundColor: "whitesmoke",
    },
  },
  loginContainer: {
    display: "flex",
    flexDirection: "row",
  },
  brandLogo: {
    width: 200,
    height: 200,
    borderRadius: "100%",
    position: "relative",
    left: 80,
    top: 80,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginLeft: 100,
    marginTop: 21,
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
    width: 370,
    height: 360,
    position: "relative",
    left: 515,
    bottom: 373,
  },
  loginHeader: {
    fontFamily: "sans-serif",
  },
  sigupLink: {
    position: "relative",
    left: 10,
    pointer: "cursor",
  },
  remember: {
    position: "relative",
    left: 53,
    bottom: 48,
  },
  checkboxContainer: {
    marginBottom: -65,
  },
  forgot: {
    position: "relative",
    left: 72,
    bottom: 16,
  },
});

export default function Login() {
  const navigate = useNavigate();
  const classes = useStyles();
  const users = useSelector((state) => state.users);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("please enter valid email").required(),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const handleSubmit = (loginUsers) => {
    const result = users.filter(
      (signupUsers) => signupUsers.values.email === loginUsers.email
    );
    console.log(result);

    if (result.length < 1) {
      toast.error("There is no users with this email go and signup ", {
        position: "top-center",
      });
    } else {
      toast.success("welcome back !", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/content");
      }, 3000);
    }
  };

  const handleSwitch = () => {
    navigate("/signup");
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const handleCheck = () => {
    swal("we will not forgot you");
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <Box className={classes.boxContainer}>
          <Paper elevation={22} className={classes.paperContainer}>
            <div className={classes.loginContainer}>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {(props) => (
                  <Form>
                    <div className={classes.root}>
                      <h2 className={classes.loginHeader}>Welcome back !</h2>
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
                          className={classes.checkbox}
                          onClick={handleCheck}
                          required
                        />{" "}
                        <p className={classes.remember}>Remember me</p>
                      </div>
                      <Link className={classes.forgot}>Forgot password?</Link>
                      <div>
                        <Button type="submit" variant="contained">
                          Login
                        </Button>
                      </div>
                      <p>
                        Don't have account ?
                        <Link
                          className={classes.sigupLink}
                          onClick={handleSwitch}
                        >
                          Signup
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
