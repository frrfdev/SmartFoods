import React from "react";
import { Formik } from "formik";
import { FieldGroup } from "../FormGroup/FormGroup";
import type { CategoryFormProps } from "./TermForm.types";
import { termFormValidator } from "./TermForm.validator";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Upload } from "../Upload/Upload";

("use client");

const INITIAL_VALUES = {
  title: "",
  description: "",
  termId: "",
  image: undefined,
} as CategoryFormProps;

export const CategoryForm = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validate={termFormValidator}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        /* and other goodies */
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-5 pt-2 lg:pt-20"
        >
          <h2 className="text-3xl">Cadastrar novo termo</h2>
          <FieldGroup
            label="Título"
            name="title"
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
            name="description"
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
            name="termId"
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

          <Upload></Upload>

          <Button type="submit">
            <span>Cadastrar</span>
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default CategoryForm;
