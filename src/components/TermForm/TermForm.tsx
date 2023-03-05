import React from "react";
import { Formik } from "formik";
import { FieldGroup } from "../FormGroup/FormGroup";
import type { TermFormProps } from "./TermForm.types";
import { termFormValidator } from "./TermForm.validator";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { useTerm } from "../../hooks/api/useTerm";
import type { TermData } from "../../@types/TermData";

("use client");

const INITIAL_VALUES = {
  title: "",
  description: "",
  termId: "",
} as TermFormProps;

interface Props {
  termToEdit?: TermFormProps | TermData | null;
  setTermToEdit: (term: TermData | null) => void;
}

export const TermForm = ({ termToEdit, setTermToEdit }: Props) => {
  const { storeTermMutation, updateTermMutation } = useTerm();

  const cancelEdit = () => setTermToEdit(null);

  return (
    <Formik
      initialValues={termToEdit || INITIAL_VALUES}
      validate={termFormValidator}
      enableReinitialize
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        if (termToEdit) await updateTermMutation.mutate(values);
        else await storeTermMutation.mutate(values);
        setSubmitting(false);
        resetForm();
        setTermToEdit(null);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-5 pt-2 lg:pt-20"
        >
          <h2 className="text-3xl">
            {termToEdit ? "Editar" : "Cadastrar novo"} termo
          </h2>
          <FieldGroup
            label="Título"
            errors={errors.title}
            touched={touched.title}
            isRequired
          >
            <Input
              name="title"
              placeholder="O nome é como aparece em seu site"
              onChange={handleChange}
              variant="outlined"
              onBlur={handleBlur}
              value={values.title}
            />
          </FieldGroup>
          <FieldGroup
            label="Descrição"
            errors={errors.description}
            isRequired
            touched={touched.description}
          >
            <Input
              name="description"
              variant="outlined"
              placeholder="O nome é como aparece em seu site"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
          </FieldGroup>

          <FieldGroup
            label="Termo ascendente"
            touched={touched.termId}
            errors={errors.termId}
          >
            <Select
              name="termId"
              placeholder="Escolha o termo ascendente"
              value={values.termId}
              options={[]}
            />
          </FieldGroup>

          <Button type="submit" disabled={isSubmitting}>
            <span>{termToEdit ? "Editar" : "Cadastrar"}</span>
          </Button>
          {termToEdit ? (
            <Button
              type="button"
              status={"secondary"}
              disabled={isSubmitting}
              onClick={cancelEdit}
            >
              <span>Cancelar</span>
            </Button>
          ) : null}
        </form>
      )}
    </Formik>
  );
};

export default TermForm;
