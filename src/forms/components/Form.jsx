import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import FormButton from './FormButton'
import LoopIcon from '@mui/icons-material/Loop';
import { useNavigate } from 'react-router-dom';

export default function Form({
  title,
  onSubmit,
  onReset,
  validateForm,
  to,
  color,
  spacing,
  styles,
  children,
  buttonStyle,
}) {

    const navigate = useNavigate();

  return (
    <Box
      component={"form"}
      color={color}
      sx={{ mt: 2, mb: 2, p: { xs: 2, sm: 4 }, width:"50%", ...styles }}
      onSubmit={onSubmit}
      autoComplete='off'
      noValidate

    >
      <Typography type="h5" component="h1" textAlign={"center"}>
        {title}
      </Typography>

      <Grid container spacing={spacing}>
        {children}
      </Grid>

      <Grid container spacing={spacing}>
      <Grid item xs={12} sm={6} sx={{ pr: {sm:1}, ...buttonStyle}}>
          <FormButton
            node="cancel"
            color="error"
            component="div"
            variant="outlined"
            onClick={() => navigate(to)}
          />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ pl: {sm:1}, ...buttonStyle}}>
          <FormButton
            node={<LoopIcon />}
            varient="outlined"
            component="div"
            onClick={() => onReset()}
          />
        </Grid>
        <Grid item xs={12} sx={{mt: 2, ...buttonStyle}}>
          <FormButton
            node="submit"
            onClick={() => onSubmit()}
            size="large"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
