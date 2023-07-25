import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

const form = {
  firstName: "",
  lastName: "",
}

export default function MyForm() {

  const navigate = useNavigate();
  const [data, setData] = React.useState(form);
  const [errors, setErrors] = React.useState(form);

  const schema = Joi.object({
    firstName: Joi.string().min(2).max(10).required(),
    lastName: Joi.string().min(2).max(10).allow(""),
  });

  const joiPropertySchema = (target) => {
    const { error } = schema.extract(target.name).validate(target.value);
    return error ? error.details[0].message : null;
  }

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }));
    const errorMessage = joiPropertySchema(target);
    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [target.name]: errorMessage }));
    }
    else { 
      setErrors((prev) => ({ ...prev, [target.name]: null }));
    }};

  const handleSubmit = () => {
    console.log("form submitted", data);
  }
  const handleCancel = () => {
    navigate("/");
  }
  const handleReset = () => {
    setData(form);
  }



  return (
    <>
      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        sx={{ m: 2}}
      >
        <Typography>My Form</Typography>
        <Box>
          <TextField 
          label="First Name" 
          name="firstName" 
          onChange={handleChange}
          value={data["firstName"] ? data["firstName"] : ""}
          helperText={errors["firstName"] ? errors["firstName"] : ""}
          error={Boolean(errors["firstName"])}
          />
          <TextField 
          label="Last Name" 
          name="lastName" 
          onChange={handleChange}
          value={data["lastName"] ? data["lastName"] : ""}
          helperText={errors["lastName"] ? errors["lastName"] : ""}
          error={Boolean(errors["lastName"])}
          />
        </Box>
        <Box>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </Box>
      </Box>
    </>
  );
}
