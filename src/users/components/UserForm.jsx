import React from "react";
import { func, object, string } from "prop-types";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";

const buttonStyle = {
  padding: 2,
  pb: 0,
}

const UserForm = ({
  onSubmit,
  onReset,
  title,
  errors,
  data,
  onInputChange,
  setData,
}) => {
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
          name="first"
          label="first name"
          error={errors.first}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="middle"
          label="middle name"
          error={errors.middle}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
          required={false}
        />
        <Input
          name="last"
          label="last name"
          error={errors.last}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="phone"
          label="phone"
          type="phone"
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
          type="email"
          error={errors.email}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="password"
          label="password"
          type="password"
          error={errors.password}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
        />
        <Input
          name="url"
          label="image url"
          error={errors.url}
          onChange={onInputChange}
          data={data}
          sm={6}
          padding={2}
          paddingBottom={0}
          required={false}
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
          required={false}
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
          required={false}
        />
        <Input
          label="country"
          name="country"
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
          label="house Number"
          type="number"
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
          required={false}
        />
        <Grid item>
          <FormControlLabel
            onChange={(e) => {
              setData({ ...data, isBusiness: !!e.target.checked });
            }}
            name="isBusiness"
            control={<Checkbox value={data.isBusiness} color="primary" />}
            label="Signup as business"
            sx={buttonStyle}
          />
        </Grid>
      </Form>
    </Container>
  );
};

UserForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  onFormChange: func.isRequired,
  title: string.isRequired,
  errors: object.isRequired,
  data: object.isRequired,
  onInputChange: func.isRequired,
  setData: func.isRequired,
};

export default React.memo(UserForm);
