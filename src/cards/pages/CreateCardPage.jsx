import React from 'react'
import useForm from '../../forms/hooks/useForm';
import cardSchema from '../models/cardSchema';
import initialEditCardForm from '../helpers/initialForms/initialEditCardForm';
import useCards from '../hooks/useCards';
import { useUser } from '../../users/providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import CardForm from '../../components/CardForm';
import initialErrors from '../helpers/initialForms/initialErrors';

export default function CreateCardPage() {

  const { handleCreateCard } = useCards();
  const { user } = useUser();

  const {data, errors, ...rest} = useForm(
    initialEditCardForm,
    cardSchema,
    handleCreateCard,
  );

  if ( user && user.isBusiness ) //little security check to make sure the user is a business
  return (
    <CardForm
    onSubmit={rest.onCreate}
    onReset={rest.handleReset}
    title={`Create new card`}
    styles={{ maxWidth: "800px" }}
    errors={errors}
    data={data}
    onInputChange={rest.handleChange}
    setData={rest.setData}
    >
    </CardForm>
  )
  else return <></>;
}
