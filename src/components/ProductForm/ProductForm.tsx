import { Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { productFormValidator } from "./ProductForm.validator";
import { FieldGroup } from "../FormGroup/FormGroup";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";
import { Upload } from "../Upload/Upload";
import autoAnimate from "@formkit/auto-animate";
import { ProductConfigCollapsible } from "../ProductConfigCollapsible/ProductConfigCollapsible";
import { CategorySelect } from "../CategorySelect/CategorySelect";
import { ProductTypeSelect } from "../ProductTypeSelect/ProductTypeSelect";
import { TermSelect } from "../TermSelect/TermSelect";
import { useFiles } from "../../hooks/utils/useFiles";
import { useProduct } from "../../hooks/api/useProduct";
import type { OptionData, ProductOptionData } from "../../@types/OptionData";
import { SuccessModal } from "../SuccessModal/SuccessModal";
import { MoneyInput } from "../MoneyInput/MoneyInput";

export interface ProductConfigData {
  id: string;
  title: string;
  configs: ProductOptionData[];
}

export const ProductForm = () => {
  const parentRef = useRef(null);
  const { files, setFiles } = useFiles();
  const { storeProductMutation } = useProduct();

  const [productConfigs, setProductConfigs] = React.useState<
    ProductConfigData[]
  >([]);
  const [productType, setProductType] = React.useState<string>("");
  const [selectedTerm, setSelectedTerm] = React.useState<
    OptionData | undefined
  >();

  const [successAnimation, setSuccessAnimation] = React.useState(false);

  const handleUpdateProductConfig = (
    id: string,
    configs: ProductOptionData[]
  ) => {
    setProductConfigs(
      productConfigs.map((config) => {
        if (config.id === id) {
          return {
            ...config,
            configs,
          };
        }
        return config;
      })
    );
  };

  const handleRemoveProductConfig = (id: string) => {
    setProductConfigs(
      productConfigs.filter((config: ProductConfigData) => config.id !== id)
    );
  };

  const handleChangeProductType = (value: string) => {
    setProductType(value);
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
          termId: "",
        }}
        validate={productFormValidator}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setSuccessAnimation(true);

          await storeProductMutation.mutate({
            ...values,
            images: files,
            configs: productConfigs,
          });
          resetForm();
          setSelectedTerm(undefined);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4"
            ref={parentRef}
          >
            <FieldGroup
              label="Titulo"
              errors={errors.title}
              touched={touched.title}
              isRequired
            >
              <Input
                variant="outlined"
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
              />
            </FieldGroup>

            <FieldGroup
              label="Descrição"
              errors={errors.description}
              touched={touched.description}
              isRequired
            >
              <Input
                variant="outlined"
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </FieldGroup>

            <div className="flex gap-3">
              <FieldGroup
                label="Preço"
                errors={errors.price}
                touched={touched.price}
                isRequired
              >
                <MoneyInput
                  variant="outlined"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
              </FieldGroup>
              <FieldGroup
                label="Preço Promocional"
                errors={errors.promotionalPrice}
                touched={touched.promotionalPrice}
              >
                <Input
                  variant="outlined"
                  type="text"
                  name="promotionalPrice"
                  value={values.promotionalPrice}
                  onChange={handleChange}
                />
              </FieldGroup>
            </div>

            <div className="flex gap-3">
              <FieldGroup
                label="Categoria"
                errors={errors.categoryId}
                touched={touched.categoryId}
                isRequired
              >
                <CategorySelect
                  value={values.categoryId}
                  onValueChange={(value) =>
                    handleChange({
                      target: { name: "categoryId", value: value },
                    })
                  }
                  name="categoryId"
                />
              </FieldGroup>

              <FieldGroup
                label="Sub-categoria"
                errors={errors.subCategoryId}
                touched={touched.subCategoryId}
              >
                <Select
                  name="subCategoryId"
                  value={values.subCategoryId}
                  onValueChange={(value) =>
                    handleChange({
                      target: { name: "subCategoryId", value: value },
                    })
                  }
                  options={[
                    { value: "1", label: "Sub-categoria 1", key: "1" },
                    { value: "2", label: "Sub-categoria 2", key: "2" },
                    { value: "3", label: "Sub-categoria 3", key: "3" },
                    { value: "4", label: "Sub-categoria 4", key: "4" },
                    { value: "5", label: "Sub-categoria 5", key: "5" },
                    { value: "6", label: "Sub-categoria 6", key: "6" },
                  ]}
                />
              </FieldGroup>
            </div>

            <h2 className="mt-5 text-lg font-bold">
              Selecione o tipo de produto
            </h2>
            <FieldGroup
              label="Tipo de Produto"
              errors={errors.typeId}
              touched={touched.typeId}
              isRequired
            >
              <ProductTypeSelect
                name="typeId"
                value={values.typeId}
                onValueChange={(value) => {
                  handleChange({
                    target: { name: "typeId", value: value },
                  });
                  handleChangeProductType(value);
                }}
              />
            </FieldGroup>

            {productType === "2" ? (
              <>
                <div className="flex items-end gap-4">
                  <FieldGroup
                    label="Configuração do produto"
                    errors={errors.termId}
                    touched={touched.termId}
                  >
                    <TermSelect
                      name="termId"
                      value={values.termId}
                      onValueChange={(value, option) => {
                        handleChange({
                          target: { name: "termId", value: value },
                        });
                        setSelectedTerm(option);
                      }}
                    />
                  </FieldGroup>
                  <span className="h-[40px]">
                    <Button
                      type="button"
                      size="sm"
                      disabled={!selectedTerm}
                      onClick={() => {
                        setProductConfigs([
                          ...productConfigs,
                          {
                            id: values.typeId,
                            configs: [],
                            title: selectedTerm?.label as string,
                          },
                        ]);
                      }}
                    >
                      <span>Incluir</span>
                    </Button>
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {productConfigs.map((config: ProductConfigData) => {
                    return (
                      <ProductConfigCollapsible
                        id={config.id}
                        handleRemoveProductConfig={handleRemoveProductConfig}
                        key={config.id}
                        config={config}
                        onUpdate={handleUpdateProductConfig}
                      ></ProductConfigCollapsible>
                    );
                  })}
                </div>
              </>
            ) : null}

            <Button type="submit">
              <span>Cadastrar</span>
            </Button>
          </form>
        )}
      </Formik>

      <div className="h-[500px] w-full border-l-2 border-gray-100 px-5">
        <Upload value={files} onChange={setFiles}></Upload>
      </div>

      {successAnimation ? (
        <SuccessModal
          onEnd={() => setSuccessAnimation(false)}
          isVisible={successAnimation}
        />
      ) : null}
    </div>
  );
};
