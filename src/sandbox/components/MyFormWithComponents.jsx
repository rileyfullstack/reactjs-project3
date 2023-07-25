import { Container } from '@mui/material'
import React from 'react'
import Form from '../../forms/components/Form';
import ROUTES from '../../routes/routesModel';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import Input from '../../forms/components/Input';

const form = {
  firstName: "",
  lastName: "",
}

export default function MyFormWithComponents() {

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
    } else {
      setErrors((prev) => ({ ...prev, [target.name]: null }));
    }
  };

  const handleSubmit = () => {
    console.log("form submitted", data);
  }

  const handleReset = () => {
    setData(form);
  }

  const validateForm = () => {
    const validateSchema = Joi.object(schema)
    const { error } = validateSchema.validate(data)
    if (error) {
        return error
    }
    else {
        return null
    }
  }

  return (
    <Container
      sx={{
        mt: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Form
      title="My form"
      onSubmit={handleSubmit}
      onReset={handleReset} 
      validateForm={validateForm} 
      to={ROUTES.SANDBOX}
      >
        <Input mb={2}
        label={"First name"} 
        name={"firstName"} 
        data={data} 
        error={errors.firstName} 
        onChange={handleChange}
        />
        <Input mb={2}
        label={"Last name"} 
        name={"lastName"} 
        data={data} 
        error={errors.lastName} 
        onChange={handleChange}
        />
      </Form>
    </Container>
  )
}
