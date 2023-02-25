import React from "react";
import { Formik } from "formik";
import { FieldGroup } from "../FormGroup/FormGroup";
import type { ForgotPasswordFormProps } from "./ForgotPasswordForm.types";
import { loginFormValidator } from "./ForgotPasswordForm.validator";
import { Button } from "../Button/Button";
import { useAuthContext } from "../../context/AuthContext";
import { Input } from "../Input/Input";
import { useRouter } from "next/router";

("use client");

const INITIAL_VALUES = {
  email: "",
  password: "",
} as ForgotPasswordFormProps;

export const ForgotPasswordForm = () => {
  const router = useRouter();
  const { isLoading: isLogingIn } = useAuthContext();

  const handleGoBack = () => router.push("/login");

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validate={loginFormValidator}
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
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
          <FieldGroup
            label="E-mail"
            name="email"
            touched={touched.email}
            errors={errors.email}
          >
            <Input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="seuemail@gmail.com"
            />
          </FieldGroup>
          <Button type="submit" status="primary" disabled={isLogingIn}>
            Recuperar
          </Button>
          <span className="text-sm text-black">
            Efetuar login?{" "}
            <a className="cursor-pointer text-red-500" onClick={handleGoBack}>
              Login
            </a>
          </span>
        </form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
