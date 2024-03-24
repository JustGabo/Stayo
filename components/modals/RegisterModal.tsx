"use client";
import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegiterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import useLoginModal from "@/app/hooks/useLoginModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Success")
        registerModal.onClose();
        loginModal.onOpen()
      })
      .catch(() => {
        toast.error('Something went wrong')
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  
  const toggle = useCallback(()=>{
    registerModal.onClose()
    loginModal.onOpen()
  },[loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-3">
      <Heading title="Welcome to Stayo" subtitle="Create an account"/>
      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
      <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
      <Input id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} required />
    </div>
  )


  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button outline label="Continue with Google" icon={FcGoogle} onClick={()=>{}} />
      {/* <Button outline label="Continue with Google" icon={AiFillGithub} onClick={()=>{}} /> */}
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-1
          text-sm
          font-light
        "
      >
        <p>Already have an account?
          <span 
            onClick={toggle} 
            className="
              text-neutral-800
              cursor-pointer 
              font-semibold
              hover:underline
            "
            > Log in</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
