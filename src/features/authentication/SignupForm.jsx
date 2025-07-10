import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
//eslint-disable-next-line
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import styled from "styled-components";
import { useSignUp } from "./useSignUp";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  //eslint-disable-next-line
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignUp();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "This field is required" })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <EyeContainer>
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must be 8 or above 8 characters",
              },
            })}
            disabled={isLoading}
          />
          <Eyelash>
            {showPassword ? (
              <HiEyeSlash onClick={() => setShowPassword((s) => !s)} />
            ) : (
              <HiEye onClick={() => setShowPassword((s) => !s)} />
            )}
          </Eyelash>
        </EyeContainer>
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <EyeContainer>
          <Input
            type={confirmShowPassword ? "text" : "password"}
            id="passwordConfirm"
            {...register("passwordConfirm", {
              required: "this field is required",
              validate: (value) =>
                value === getValues().password || "Password need to match",
            })}
            disabled={isLoading}
          />

          <Eyelash>
            {confirmShowPassword ? (
              <HiEyeSlash onClick={() => setConfirmShowPassword((c) => !c)} />
            ) : (
              <HiEye onClick={() => setConfirmShowPassword((c) => !c)} />
            )}
          </Eyelash>
        </EyeContainer>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={reset}>
          Cancel
        </Button>
        <Button>
          {isLoading ? (
            <>
              {`Creating...`} <SpinnerMini />
            </>
          ) : (
            `Create new user`
          )}
        </Button>
      </FormRow>
    </Form>
  );
}

export const Eyelash = styled.span`
  position: absolute;
  top: 25%;
  right: 3%;
  font-size: 1.7rem;
  cursor: pointer;
`;

export const EyeContainer = styled.div`
  width: 100%t;
  height: max-content;
  position: relative;
`;
export default SignupForm;
