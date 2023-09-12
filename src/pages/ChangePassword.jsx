import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import Footer from "../components/ListingPage/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
// import { addUser } from "../Redux/Actions/user";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import "./CSS/ForgetPassword.css";
import { Header } from "../components/PlanPage/Header";
import { useParams, useLocation } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [severity, setSeverity] = useState("success");
  const { enqueueSnackbar } = useSnackbar();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const token = queryParams.get("token");
  
  // const { token } = useParams();

  const url = window.location.href;
  const tokenMatch = url.match(/token=([^&]*)/);
  const token = tokenMatch ? tokenMatch[1] : null;

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(token);
    const resetData = {
      password: data.password,
      resetToken: token,
    };
    console.log(resetData);
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/UserAuthentication/ResetPassword`,
        resetData
      )
      .then((response) => {
        console.log(response);

        setLoading(false);
        reset();
        navigate("/");
        enqueueSnackbar("Password Changed Successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setSeverity("error");
        setLoading(false);
        setOpen(true);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <>
      <Header />
      <div className="div-bggradientpassword" />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 10,
            marginBottom: 35,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#005ca8" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change your Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="password"
              label="New Password"
              name="password"
              type="password"
              autoComplete="password"
              error={errors.password ? true : false}
              helperText={
                (errors.password?.type === "required" &&
                  "New Password is required") ||
                (errors.password?.type === "pattern" &&
                  "New Password format is incorrect")
              }
              {...register("password", {
                required: true,
                pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
              })}
            />
            <TextField
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="Password"
              id="confirmPassword"
              autoComplete="current-confirmPassword"
              error={errors.confirmPassword ? true : false}
              helperText={
                (errors.confirmPassword?.type === "required" &&
                  "Confirm Password is required") ||
                (errors.confirmPassword?.validate === "validate" &&
                  "Passwords do not match")
              }
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <LoadingButton
              type="submit"
              fullWidth
              loading={loading}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Password
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
                  Didn't recieve Email?
                </Link>
              </Grid>
              {/* <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
            </Grid>
          </Box>
        </Box>

        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Container>
      <Footer />
    </>
  );
}
