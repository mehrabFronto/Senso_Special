"use client";

import Image from "next/image";
import React, { useState } from "react";

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
      <TextFiled
        value={formData.phoneNumber}
        keyName="phoneNumber"
        inputType="tel"
        handleChange={handleChange}
        placeholder="شماره تماس خود را وارد کنید..."
        icon="/icons/call-black.svg"
        label="شماره تماس:"
      />

      <TextFiled
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

type TextFiledProps = {
  value: string;
  keyName: string;
  inputType: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: string;
  label: string;
};

const TextFiled = ({
  value,
  keyName,
  inputType,
  handleChange,
  placeholder,
  icon,
  label,
}: TextFiledProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-sm" dir="rtl">
      <label htmlFor={keyName} className="font-bold text-lg">
        {label}
      </label>
      <div className="w-full flex items-center">
        <button
          type="submit"
          title="search"
          className="bg-primary border border-primary rounded-r-lg overflow-hidden py-1 px-2"
        >
          <Image
            src={icon}
            alt="search"
            width={50}
            height={50}
            className="w-9 h-9 p-0.5"
          />
        </button>

        <input
          dir="rtl"
          type={inputType}
          value={value}
          name={keyName}
          id={keyName}
          onChange={handleChange}
          className="w-full bg-secondary rounded-l-lg p-2.5 placeholder:text-dark-gray border border-dark-gray border-r-0 outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
