import React from "react";
import Form from "./_components/Form";

const AuthPage = () => {
  return (
    <main className="max-w-screen-lg mx-auto min-h-[80vh] px-md py-2xl flex flex-col items-center gap-y-3xl">
      <h1 className="text-primary text-3xl font-bold">ورود به حساب کاربری</h1>
      <Form />
    </main>
  );
};

export default AuthPage;
