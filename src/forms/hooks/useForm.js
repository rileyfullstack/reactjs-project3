import { useState, useCallback } from "react";
import { object, func } from "prop-types";
import Joi, { string } from "joi";
import { useUser } from "../../users/providers/UserProvider";
import { useSnack } from "../../providers/SnackBarProvider";

const useForm = (initialForm, schema, handleSubmit, cardId,) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { user } = useUser();
  const { setSnack } = useSnack();

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  const validateProperty = useCallback(
    ({ name, value }) => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      const errorMessage = validateProperty(target);
      if (errorMessage)
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      else
        setErrors((prev) => {
          let obj = { ...prev };
          delete obj[name];
          return obj;
        });

      setData((prev) => ({ ...prev, [name]: value }));
    },
    [validateProperty]
  );

  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  }, [schema, data]);

  const checkForMissingProperties = useCallback(() => {
    const newErrors = { ...errors };
    for (const property in data) {
      if (data[property] === "") {
        newErrors[property] = "Required field";
      }
    }
    setErrors(newErrors);
    return newErrors;
  }, [data, errors]);

  const onSubmit = useCallback(() => {
    const errorCheck = checkForMissingProperties();
    if (Object.keys(errorCheck).length === 0) {
      handleSubmit(data);
      }
      else setSnack('error', "Please fix the errors");
  }, [handleSubmit, data, checkForMissingProperties,]);

  const onEdit = useCallback(() => {
    const errorCheck = checkForMissingProperties();
    if (Object.keys(errorCheck).length === 0) {
    handleSubmit(cardId, data);
    }
    else setSnack('error', "Please fix the errors");
  }, [handleSubmit, cardId, data, checkForMissingProperties]);

  const onCreate = useCallback( () => {
    const errorCheck = checkForMissingProperties();
    if (Object.keys(errorCheck).length === 0) {
    handleSubmit(data);
    }
    else setSnack('error', "Please fix the errors");
  }, [handleSubmit, data, user, checkForMissingProperties]);
  return {
    data,
    errors,
    onSubmit,
    handleChange,
    handleReset,
    validateForm,
    setData,
    onEdit,
    onCreate,
  };
};

useForm.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  handleSubmit: func.isRequired,
  cardId: string,
  dataFromServer: object,
};

export default useForm;