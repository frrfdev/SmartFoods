import React from "react";
import { ForgotPasswordForm } from "../../components/ForgotPasswordForm/ForgotPasswordForm";
import Image from "next/image";
import { useRouter } from "next/router";
import SlideRightLayout from "../../layouts/SlideRightLayout";
import { BackButton } from "../../components/BackButton/BackButton";

export const Login = () => {
  const router = useRouter();

  const handleGoBack = () => router.push("/login");

  return (
    <div className="h-full overflow-hidden">
      <SlideRightLayout>
        <div className="relative grid h-full w-full lg:grid-cols-2">
          <div className="absolute top-4 left-4">
            <BackButton onClick={handleGoBack}></BackButton>
          </div>
          <div className="flex justify-center">
            <div className="flex w-9/12 flex-col items-center justify-center gap-8">
              <h1 className="w-full">
                <span className="text-5xl text-gray-700">
                  Esqueceu sua senha?
                </span>
              </h1>
              <span className="w-full text-sm text-gray-500">
                Esqueceu sua senha?
              </span>
              <ForgotPasswordForm />
            </div>
          </div>
          <div className="relative hidden h-full bg-gray-600 lg:block">
            <Image
              src="/images/forgot_password.jpeg"
              alt="Picture of the author"
              className="object-cover"
              fill
              placeholder="blur"
              blurDataURL="/images/forgot_password.jpeg"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </SlideRightLayout>
    </div>
  );
};

export default Login;
