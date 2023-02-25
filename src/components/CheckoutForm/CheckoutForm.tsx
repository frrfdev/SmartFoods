import React from "react";
import { Formik } from "formik";
import { FieldGroup } from "../../components/FormGroup/FormGroup";
import { Input } from "../../components/Input/Input";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Cart } from "../../components/Cart/Cart";
import { checkoutFormValidator } from "./CheckoutForm.validator";

export const CheckoutForm = () => {
  return (
    <div>
      <h3 className="mb-10 text-3xl">Dados Pessoais</h3>
      <Formik
        initialValues={{
          name: "",
          whatsapp: "",
          paymentMethod: "",
          observation: "",
        }}
        validate={checkoutFormValidator}
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
            className="flex w-full flex-col gap-5 lg:flex-row"
          >
            <div className="flex w-full flex-col gap-10">
              <div className="flex gap-4">
                <FieldGroup
                  label="Name"
                  name="name"
                  touched={touched.name}
                  errors={errors.name}
                >
                  <Input
                    name="name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Digite seu nome"
                  />
                </FieldGroup>
                <FieldGroup
                  label="Whatsapp"
                  name="whatsapp"
                  errors={errors.whatsapp}
                  touched={touched.whatsapp}
                >
                  <Input
                    name="whatsapp"
                    variant="outlined"
                    placeholder="Digite seu whatsapp"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.whatsapp}
                  />
                </FieldGroup>
              </div>

              <div>
                <h3>Método de pagamento</h3>

                <div className="flex flex-col gap-2">
                  <CheckBox>Pix</CheckBox>
                  <CheckBox>Mastercard</CheckBox>
                  <CheckBox>Visa</CheckBox>
                </div>
              </div>

              <div>
                <h3>Observação</h3>

                <FieldGroup label="" name="observation">
                  <Input variant="outlined"></Input>
                </FieldGroup>
              </div>
            </div>
            <div className="w-full">
              <Cart></Cart>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
