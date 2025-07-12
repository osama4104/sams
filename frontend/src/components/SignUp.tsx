import React, { useState } from 'react'
import { ISignupDefault, type ISignup } from '../types'
import useSnackbar from '../hooks/useSnackbar';
import TextInput from './common/TextInput';
import PasswordInput from './common/PasswordInput';
import { Box, Button, Card, CardActions, CardContent, CardHeader, Link, Typography } from '@mui/material';

type ISignupFormData = ISignup & { confirmPassword: string };

const SignUp = () => {
   const [formData, setFormData] = useState<ISignupFormData>({ ...ISignupDefault, confirmPassword: "" });
   const [formErrors, setFormErrors] = useState<Partial<Record<keyof ISignupFormData, string>>>({});
   const { showSnackbar, SnackbarComponent } = useSnackbar();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => {
         const updated = { ...prev, [name]: value.trim() };
         validateInputs(name, value.trim(), updated);
         if (name === "password") {
            validateInputs("confirmPassword", updated.confirmPassword, updated);
         }
         return updated;
      });
   };

   const validateInputs = (name: string, value: string, updatedFormData: typeof formData) => {
      let error = '';

      switch (name) {
         case "email":
            {
               const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
               if (!emailRegex.test(value)) {
                  error = 'Invalid email format';
               }
               break;
            }
         case "password":
            if (value.length < 6) {
               error = 'Password must be at least 6 characters';
            }
            break;
         case "username":
            if (value.length < 3) {
               error = 'Username must be at least 3 characters';
            }
            break;
         case "confirmPassword":
            if (value !== updatedFormData.password) {
               error = 'Passwords do not match';
            }
            break;
         default:
            break;
      }

      setFormErrors(prev => ({ ...prev, [name]: error }));
   }

   const handleSubmitClick = () => {
      const hasErrors = Object.values(formErrors).some((err: string) => err && err.trim() !== '');
      if (hasErrors) {
         showSnackbar({ message: 'Resolve errors before submitting.', severity: 'error' });
         return;
      }

      const isEmpty = Object.values(formData).filter((data: string) => data.trim() === '').length > 0;
      if (isEmpty) {
         showSnackbar({ message: 'Cannot submit empty form!', severity: 'warning' });
         return;
      }

      showSnackbar({ message: 'Form submitted successfully!', severity: 'success' });
   };

   return (
      <>
         <Box display="flex" justifyContent="center" alignItems="center" width="100vw" minHeight="100vh">
            <Card sx={{ maxWidth: 400, p: 2 }}>
               <CardHeader
                  title={
                     <Typography variant='h6'>
                        <span style={{ display: "flex", justifyContent: "center", fontWeight: 400, fontSize: '1.25rem' }}>Sign Up</span>
                     </Typography>
                  }
               />
               <CardContent>
                  <TextInput
                     id="username"
                     name="username"
                     label="Username"
                     value={formData.username}
                     onChange={handleChange}
                     error={!!formErrors.username}
                     helperText={formErrors.username}
                  />

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

                  <PasswordInput
                     id="confirmPassword"
                     name="confirmPassword"
                     label="Confirm Password"
                     value={formData.confirmPassword}
                     onChange={handleChange}
                     error={!!formErrors.confirmPassword}
                     helperText={formErrors.confirmPassword}
                  />
               </CardContent>
               <CardActions style={{ justifyContent: "center" }}>
                  <Button variant="contained" color="primary" onClick={handleSubmitClick}>
                     Submit
                  </Button>
               </CardActions>
               <CardContent style={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="caption" align="center">
                     Already have an account?&nbsp;
                     <Link href="/login" underline="hover">
                        Login
                     </Link>
                  </Typography>
               </CardContent>
            </Card>
            <SnackbarComponent />
         </Box>
      </>
   )
}

export default SignUp