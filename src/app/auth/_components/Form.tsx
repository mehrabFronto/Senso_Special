"use client";

import React, { useState } from "react";
import TextField from "./TextField";

const Form = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData({
      phoneNumber: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full flex flex-col items-center gap-y-2xl max-w-lg"
    >
      <TextField
        value={formData.phoneNumber}
        keyName="phoneNumber"
        inputType="tel"
        handleChange={handleChange}
        placeholder="شماره تماس خود را وارد کنید..."
        icon="/icons/call-black.svg"
        label="شماره تماس:"
      />

      <TextField
        value={formData.password}
        keyName="password"
        inputType="password"
        handleChange={handleChange}
        placeholder="رمز عبور خود را وارد کنید..."
        icon="/icons/lock-black.svg"
        label="رمز ورود:"
      />

      <button
        type="submit"
        className="bg-primary text-background font-bold text-xl py-2 rounded-lg w-1/3"
      >
        ورود
      </button>
    </form>
  );
};

export default Form;
