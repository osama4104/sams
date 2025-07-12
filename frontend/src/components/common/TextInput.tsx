import { FilledInput, FormControl, FormHelperText, Input, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react'

interface TextInputProps {
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

const TextInput = (props: TextInputProps) => {
   const { id, name, label, value, onChange, error = false, helperText = '', disabled = false, required = false, variant = 'standard', fullWidth = true } = props;

   const InputComponent = {
      standard: Input,
      filled: FilledInput,
      outlined: OutlinedInput
   }[variant];

   return (
      <FormControl variant={variant} fullWidth={fullWidth} margin='dense' error={error} disabled={disabled} required={required}>
         {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
         <InputComponent
            id={id}
            name={name}
            type={'text'}
            value={value}
            onChange={onChange}
            label={variant === 'outlined' ? label : undefined}
         />
         {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
   )
}

export default TextInput