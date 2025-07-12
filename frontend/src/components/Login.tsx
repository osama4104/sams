import React, { useState } from "react";
import { ISignupDefault, type ISignup } from "../types";
import useSnackbar from "../hooks/useSnackbar";
import TextInput from "./common/TextInput";
import PasswordInput from "./common/PasswordInput";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Link,
  Typography,
} from "@mui/material";

type ILoginFormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const [formData, setFormData] = useState<ILoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof ILoginFormData, string>>
  >({});
  const { showSnackbar, SnackbarComponent } = useSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === "checkbox" ? checked : value.trim();
    setFormData((prev) => {
      const updated = { ...prev, [name]: finalValue };
      validateInputs(name, finalValue.toString());
      return updated;
    });
  };

  const validateInputs = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Invalid email format";
        }
        break;
      }
      case "password":
        if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;
      default:
        break;
    }

    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmitClick = () => {
    const hasErrors = Object.values(formErrors).some(
      (err: string) => err && err.trim() !== ""
    );
    if (hasErrors) {
      showSnackbar({
        message: "Resolve errors before submitting.",
        severity: "error",
      });
      return;
    }

    const isEmpty = Object.entries(formData)
      .filter(([key, value]) => typeof value === "string")
      .some(([, value]) => (value as string).trim() === "");
    if (isEmpty) {
      showSnackbar({
        message: "Email and Password cannot be empty!",
        severity: "warning",
      });
      return;
    }

    showSnackbar({
      message: "Login successful!",
      severity: "success",
    });
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        minHeight="100vh"
      >
        <Card sx={{ maxWidth: 400, p: 2 }}>
          <CardHeader
            title={
              <Typography
                variant="h6"
                sx={{ textAlign: "center", fontWeight: 500 }}
              >
                Login
              </Typography>
            }
          />
          <CardContent>
            <TextInput
              id="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />

            <PasswordInput
              id="password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              error={!!formErrors.password}
              helperText={formErrors.password}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.rememberMe}
                  name="rememberMe"
                  onChange={handleChange}
                />
              }
              label="Remember Me"
            />
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitClick}
            >
              Login
            </Button>
          </CardActions>
          <CardContent style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="caption" align="center">
              Don't have an account?&nbsp;
              <Link href="/signup" underline="hover">
                Sign Up
              </Link>
            </Typography>
          </CardContent>
        </Card>
        <SnackbarComponent />
      </Box>
    </>
  );
};

export default Login;
