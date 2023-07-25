import React from 'react'
import UserForm from '../components/UserForm'
import useForm from '../../forms/hooks/useForm';
import useUsers from '../hooks/useUsers';
import { useUser } from '../providers/UserProvider';
import signupSchema from '../models/joi-schema/signupSchema';
import initialSignupForm from '../helpers/initialForms/initialSignupForm';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

export default function SignupPage() {

  const { user } = useUser();
  const { handleSignup } = useUsers();

  const {data, errors, ...rest} = useForm(
    initialSignupForm,
    signupSchema,
    handleSignup,
  );

  if (user) {
    return <Navigate to={ROUTES.SANDBOX} />
  }

  return (
    <UserForm
    onSubmit={rest.onSubmit}
    onReset={rest.handleReset}
    onFormChange={rest.handleChange}
    title='Signup'
    styles={{ maxWidth: "800px" }}
    errors={errors}
    data={data}
    onInputChange={rest.handleChange}
    setData={rest.setData}
    >
    </UserForm>
  )
}
