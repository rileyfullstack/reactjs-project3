import { Container } from '@mui/material'
import React from 'react'
import Form from '../../forms/components/Form';
import ROUTES from '../../routes/routesModel';
import Input from '../../forms/components/Input';
import useForm from '../../forms/hooks/useForm';
import initialLoginForm from '../helpers/initialForms/initialLoginForm';
import loginSchema from '../models/joi-schema/loginSchema';
import { useUser } from '../providers/UserProvider';
import useUsers from '../hooks/useUsers';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {

  const { user } = useUser();
  const { handleLogin } = useUsers();

  const {data, errors, ...rest} = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin,
  );
  
  if (user) {
    return <Navigate to={ROUTES.SANDBOX} />
  }

  return (
    <Container
      sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Form
      title="My form"
      onSubmit={rest.onSubmit}
      onReset={rest.handleReset} 
      to={ROUTES.SANDBOX}
      validateForm={rest.validateForm}
      >
        <Input mb={2}
        label={"email address"} 
        name={"email"} 
        data={data} 
        error={errors.email} 
        onChange={rest.handleChange}
        type={"email"}
        />
        <Input mb={2}
        label={"password"} 
        name={"password"} 
        data={data} 
        error={errors.password} 
        onChange={rest.handleChange}
        type={"password"}
        />
      </Form>
    </Container>
  )
}