import { Alert, Snackbar, type AlertColor } from '@mui/material';
import { useState } from 'react'
import type ISnackbarOptions from '../types/ISnackbarOptions';

const useSnackbar = () => {
   const [open, setOpen] = useState<boolean>(false);
   const [message, setMessage] = useState<string>("");
   const [severity, setSeverity] = useState<AlertColor>('info');

   const showSnackbar = ({ message = "", severity = 'info' }: ISnackbarOptions) => {
      setMessage(message);
      setSeverity(severity);
      setOpen(true);
   }

   const SnackbarComponent = () => (
      <Snackbar
         open={open}
         autoHideDuration={4000}
         onClose={() => setOpen(false)}
         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
         <Alert onClose={() => setOpen(false)} severity={severity} sx={{ width: '100%' }}>
            {message}
         </Alert>
      </Snackbar>
   )
   return { showSnackbar, SnackbarComponent };
}

export default useSnackbar;