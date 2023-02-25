import React from "react";
import { Formik } from "formik";
import { FieldGroup } from "../FormGroup/FormGroup";
import type { CategoryFormProps } from "./CategoryForm.types";
import { categoryFormValidator } from "./CategoryForm.validator";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Upload } from "../Upload/Upload";
import { useCategory } from "../../hooks/api/useCategory";

("use client");

const INITIAL_VALUES = {
  title: "",
  description: "",
  categoryId: "",
  image: [],
} as CategoryFormProps;

export const CategoryForm = () => {
  const { storeCategory } = useCategory();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validate={categoryFormValidator}
      onSubmit={async (values, { setSubmitting }) => {
        await storeCategory(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-5 pt-2 lg:pt-20"
        >
          <h2 className="text-3xl">Cadastrar nova categoria</h2>
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
            touched={touched.description}
            isRequired
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
            label="Categoria ascendente"
            name="categoryId"
            touched={touched.categoryId}
            errors={errors.categoryId}
          >
            <Select
              name="categoryId"
              value={values.categoryId}
              options={[]}
              placeholder="Selecione a categoria ascendente"
            />
          </FieldGroup>

          <Upload
            value={values.image}
            name="image"
            onChange={(files) => setFieldValue("image", files)}
          ></Upload>

          <Button type="submit">
            <span>Cadastrar</span>
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default CategoryForm;
