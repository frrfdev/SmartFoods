import { Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { productFormValidator } from "./ProductForm.validator";
import { FieldGroup } from "../FormGroup/FormGroup";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import { Upload } from "../Upload/Upload";
import { Collapsible } from "../Collapsible/Collapsible";
import { FaTimes } from "react-icons/fa";
import autoAnimate from "@formkit/auto-animate";
import { ProductConfigCollapsible } from "../ProductConfigCollapsible/ProductConfigCollapsible";

export const ProductForm = () => {
  const parentRef = useRef(null);
  const [productConfigs, setProductConfigs] = React.useState<any>([]);

  const handleRemoveProductConfig = (id: string) => {
    setProductConfigs(productConfigs.filter((config: any) => config.id !== id));
  };

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <Formik
        initialValues={{
          title: "",
          description: "",
          price: 0,
          promotionalPrice: 0,
          categoryId: "",
          subCategoryId: "",
          typeId: "",
          options: [],
          images: [],
        }}
        validate={productFormValidator}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <FieldGroup label="Titulo" name="title">
              <Input variant="outlined" type="text" name="title" />
            </FieldGroup>

            <FieldGroup label="Descrição" name="description">
              <Input variant="outlined" type="text" name="description" />
            </FieldGroup>

            <div className="flex gap-3">
              <FieldGroup label="Preço" name="price">
                <Input variant="outlined" type="text" name="price" />
              </FieldGroup>
              <FieldGroup label="Preço Promocional" name="promotionalPrice">
                <Input variant="outlined" type="text" name="promotionalPrice" />
              </FieldGroup>
            </div>

            <div className="flex gap-3">
              <FieldGroup label="Categoria" name="categoryId">
                <Select
                  options={[
                    { value: "1", textValue: "Categoria 1" },
                    { value: "2", textValue: "Categoria 2" },
                    { value: "3", textValue: "Categoria 3" },
                    { value: "4", textValue: "Categoria 4" },
                    { value: "5", textValue: "Categoria 5" },
                    { value: "6", textValue: "Categoria 6" },
                  ]}
                />
              </FieldGroup>

              <FieldGroup label="Sub-categoria" name="subCategoryId">
                <Select
                  options={[
                    { value: "1", textValue: "Sub-categoria 1" },
                    { value: "2", textValue: "Sub-categoria 2" },
                    { value: "3", textValue: "Sub-categoria 3" },
                    { value: "4", textValue: "Sub-categoria 4" },
                    { value: "5", textValue: "Sub-categoria 5" },
                    { value: "6", textValue: "Sub-categoria 6" },
                  ]}
                />
              </FieldGroup>
            </div>

            <h2 className="mt-5 text-lg font-bold">
              Selecione o tipo de produto
            </h2>
            <FieldGroup label="Tipo de Produto" name="typeId">
              <Select
                options={[
                  { value: "1", textValue: "Tipo 1" },
                  { value: "2", textValue: "Tipo 2" },
                  { value: "3", textValue: "Tipo 3" },
                  { value: "4", textValue: "Tipo 4" },
                  { value: "5", textValue: "Tipo 5" },
                  { value: "6", textValue: "Tipo 6" },
                ]}
              />
            </FieldGroup>

            <div className="flex items-end gap-4">
              <FieldGroup label="Configuração do produto" name="typeId">
                <Select
                  options={[
                    { value: "1", textValue: "Configuração 1" },
                    { value: "2", textValue: "Configuração 2" },
                    { value: "3", textValue: "Configuração 3" },
                    { value: "4", textValue: "Configuração 4" },
                    { value: "5", textValue: "Configuração 5" },
                    { value: "6", textValue: "Configuração 6" },
                  ]}
                />
              </FieldGroup>
              <span className="h-[40px]">
                <Button
                  size="sm"
                  onClick={() => {
                    setProductConfigs([
                      ...productConfigs,
                      { id: values.typeId },
                    ]);
                  }}
                >
                  <span>Incluir</span>
                </Button>
              </span>
            </div>

            <div className="flex flex-col gap-2" ref={parentRef}>
              {productConfigs.map((config: any) => {
                return (
                  <ProductConfigCollapsible
                    id={config.id}
                    handleRemoveProductConfig={handleRemoveProductConfig}
                    key={config.id}
                  ></ProductConfigCollapsible>
                );
              })}
            </div>

            <Button type="submit">
              <span>Cadastrar</span>
            </Button>
          </form>
        )}
      </Formik>

      <div className="h-[500px] w-full border-l-2 border-gray-100 px-5">
        <Upload></Upload>
      </div>
    </div>
  );
};
