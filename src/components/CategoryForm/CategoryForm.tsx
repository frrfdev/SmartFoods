import React from "react";
import { Formik } from "formik";
import { FieldGroup } from "../FormGroup/FormGroup";
import type { CategoryFormProps } from "./CategoryForm.types";
import { categoryFormValidator } from "./CategoryForm.validator";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { useCategory } from "../../hooks/api/useCategory";
import type { CategoryData } from "../../@types/CategoryData";

("use client");

const INITIAL_VALUES = {
  title: "",
  description: "",
  categoryId: "",
  image: [],
} as CategoryFormProps;

interface Props {
  categoryToEdit?: CategoryFormProps | CategoryData | null;
  setCategoryToEdit: (term: CategoryData | null) => void;
}

export const CategoryForm = ({ categoryToEdit, setCategoryToEdit }: Props) => {
  const { storeCategoryMutation, updateCategoryMutation } = useCategory();

  const cancelEdit = () => setCategoryToEdit(null);

  return (
    <Formik
      initialValues={categoryToEdit || INITIAL_VALUES}
      validate={categoryFormValidator}
      enableReinitialize
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        if (categoryToEdit) await updateCategoryMutation.mutate(values);
        else await storeCategoryMutation.mutate(values);
        setSubmitting(false);
        setCategoryToEdit(null);
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
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-5 pt-2 lg:pt-20"
        >
          <h2 className="text-3xl">Cadastrar nova categoria</h2>
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

          <Button type="submit" disabled={isSubmitting}>
            <span>{categoryToEdit ? "Editar" : "Cadastrar"}</span>
          </Button>
          {categoryToEdit ? (
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

export default CategoryForm;
