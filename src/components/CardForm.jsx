import React from "react";
import { func, object, string } from "prop-types";
import { Container } from "@mui/material";
import Form from "../forms/components/Form";
import Input from "../forms/components/Input";
import ROUTES from "../routes/routesModel";

const CardForm = ({
  onSubmit,
  onReset,
  title,
  data,
  errors,
  onInputChange,
}) => {
  console.log("CardForm", data);
  return (
    <Container
    sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    }}>
      <Form
        onSubmit={onSubmit}
        onReset={onReset}
        styles={{ maxWidth: "800px" }}
        title={title}
        to={ROUTES.CARDS}
        buttonStyle={{padding: 2, pb: 0}}
      >
        <Input
          name="title"
          label="title"
          error={errors.title}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="subtitle"
          label="subtitle"
          error={errors.subtitle}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="description"
          label="description"
          error={errors.description}
          onChange={onInputChange}
          data={data}
          sm={12}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="phone"
          label="phone"
          error={errors.phone}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="email"
          label="email"
          error={errors.email}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="web"
          label="web"
          error={errors.web}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="url"
          label="image URL"
          error={errors.url}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="alt"
          label="image alt"
          error={errors.alt}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="state"
          label="state"
          error={errors.state}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
                <Input
          name="country"
          label="country"
          error={errors.country}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
                <Input
          name="city"
          label="city"
          error={errors.city}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
                <Input
          name="street"
          label="street"
          error={errors.street}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />

        <Input
          name="houseNumber"
          label="house number"
          error={errors.houseNumber}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
        name="zip"
        label="zip"
        error={errors.zip}
        onChange={onInputChange}
        data={data}
        sm={6}
        padding={2}
        paddingBottom={0}
        />
        <Input
        name="bizNumber"
        label="business number"
        error={errors.bizNumber}
        onChange={onInputChange}
        data={data}
        sm={6}
        padding={2}
        paddingBottom={0}
        />
      </Form>
    </Container>
  );
};

CardForm.propTypes = {
  onReset: func.isRequired,
  title: string.isRequired,
  errors: object.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
  setData: func.isRequired,
};


export default React.memo(CardForm);
