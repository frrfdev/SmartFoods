import React from "react";
import { Formik } from "formik";
import { FieldGroup } from "../FormGroup/FormGroup";
import type { LoginFormProps } from "./LoginForm.types";
import { loginFormValidator } from "./LoginForm.validator";
import { Button } from "../Button/Button";
import { useAuthContext } from "../../context/AuthContext";
import { Input } from "../Input/Input";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { useRouter } from "next/router";

("use client");

const INITIAL_VALUES = {
  email: "",
  password: "",
} as LoginFormProps;

export const LoginForm = () => {
  const router = useRouter();

  const { user, handleLogin, isLoading: isLogingIn } = useAuthContext();

  const handleForgotPassword = () => router.push("/forgotPassword");

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validate={loginFormValidator}
      onSubmit={(values, { setSubmitting }) => {
        handleLogin({ ...values, accessType: "password" });
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
      }) => (
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
          <FieldGroup
            label="E-mail"
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
          <FieldGroup
            label="Password"
            errors={errors.password}
            touched={touched.password}
          >
            <PasswordInput
              type="password"
              name="password"
              placeholder="Digite sua senha"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              prefix={<span className="text-red-500">🔒</span>}
            />
          </FieldGroup>
          <Button type="submit" disabled={isLogingIn}>
            <span>Login</span>
          </Button>
          <span className="text-sm text-black">
            Esqueceu seu acesso?{" "}
            <a
              className="cursor-pointer text-red-500"
              onClick={handleForgotPassword}
            >
              Recuperar senha
            </a>
          </span>
          {user && <div>{user.email}</div>}
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
