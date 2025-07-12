import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FilledInput, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useState } from 'react'

interface PasswordInputProps {
   id: string;
   name: string;
   label: string;
   value: string;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   error?: boolean;
   helperText?: string;
   disabled?: boolean;
   required?: boolean;
   variant?: 'standard' | 'filled' | 'outlined';
   fullWidth?: boolean;
};

const PasswordInput = (props: PasswordInputProps) => {
   const { id, name, label, value, onChange, error = false, helperText = '', disabled = false, required = false, variant = 'standard', fullWidth = true } = props;
   const [showPassword, setShowPassword] = useState<boolean>(false);

   const InputComponent = {
      standard: Input,
      filled: FilledInput,
      outlined: OutlinedInput,
   }[variant];

   const toggleShowPassword = () => {
      setShowPassword(prev => !prev);
   };

   return (
      <FormControl variant={variant} fullWidth={fullWidth} margin='dense' error={error}>
         {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
         <InputComponent
            id={id}
            name={name}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            label={variant === 'outlined' ? label : undefined}
            endAdornment={
               <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword}>
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
               </InputAdornment>
            }
         />
         {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl >
   )
}

export default PasswordInput