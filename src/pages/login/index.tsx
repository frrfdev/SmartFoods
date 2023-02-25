import React from "react";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import Image from "next/image";
import SlideRightLayout from "../../layouts/SlideRightLayout";
import Head from "next/head";
import { Loading } from "../../components/Loading/Loading";

export const Login = () => {
  return (
    <Loading isLoading={false}>
      <div className="h-full overflow-hidden">
        <SlideRightLayout>
          <Head>
            <title>Login</title>
          </Head>
          <div className="grid h-full w-full lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="flex w-9/12 flex-col items-center justify-center gap-5">
                <h1 className="w-full">
                  <span className="text-5xl text-red-500">FOOD</span>
                </h1>
                <span className="w-full text-sm text-gray-500">
                  Digite seu login e senha para acessar sua área administrativa
                </span>
                <LoginForm />
              </div>
            </div>
            <div className="relative hidden h-full bg-gray-600 lg:block">
              <Image
                src="/images/main.jpg"
                alt="Picture of the author"
                className="object-cover"
                fill
                placeholder="blur"
                blurDataURL="/images/main.jpg"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
        </SlideRightLayout>
      </div>
    </Loading>
  );
};

export default Login;
