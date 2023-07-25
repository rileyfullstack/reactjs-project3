import React, { useEffect, useState } from 'react'
import useForm from '../../forms/hooks/useForm';
import { useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import { useUser } from '../../users/providers/UserProvider';
import cardSchema from '../models/cardSchema';
import CardForm from '../../components/CardForm';
import initialEditCardForm from '../helpers/initialForms/initialEditCardForm';
import normalizeCardForClient from '../helpers/normalization/normalizeCardForClient';

export default function EditCardPage() {
  const { handleUpdateCard, handleGetCard } = useCards();
  const {id} = useParams();
  const { user } = useUser();
  const [loadingCheck, setLoading] = useState(true);

  const { data, errors, ...rest } = useForm(
    initialEditCardForm, // initially empty
    cardSchema,
    handleUpdateCard,
    id,
  );

  useEffect(() => {
    handleGetCard(id).then((cardData) => {
      rest.setData(normalizeCardForClient(cardData));
      setLoading(false);
    });
  }, [])

  if ( !user || !user.isBusiness )
  {
    return <></>;
  }

  if ( loadingCheck ) {
    return <div>Loading...</div>;
  }

  return (
    <CardForm
      onSubmit={rest.onEdit}
      onReset={rest.handleReset}
      onFormChange={rest.handleChange}
      title={`Edit Card: ${id}`}
      styles={{ maxWidth: "800px" }}
      errors={errors}
      data={data}
      onInputChange={rest.handleChange}
      setData={rest.setData}
    >
    </CardForm>
  )
}
