import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";
import { EyeContainer, Eyelash } from "./SignupForm";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import toast from "react-hot-toast";

function UpdatePasswordForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState(false);
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <EyeContainer>
          <Input
            type={passwordShow ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            disabled={isUpdating}
            onClick={(e) => {
              e.target.select();
            }}
            onKeyDown={(e) => {
              const isCopyKey =
                (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c";

              if (isCopyKey && !passwordShow) {
                e.preventDefault();
                toast("You can't copy password when it is still hidden 😊");
              }
            }}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
          <Eyelash>
            {passwordShow ? (
              <HiEyeSlash onClick={() => setPasswordShow((s) => !s)} />
            ) : (
              <HiEye onClick={() => setPasswordShow((s) => !s)} />
            )}
          </Eyelash>
        </EyeContainer>
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <EyeContainer>
          <Input
            type={confirmPasswordShow ? "text" : "password"}
            autoComplete="new-password"
            id="passwordConfirm"
            disabled={isUpdating}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                getValues().password === value || "Passwords need to match",
            })}
            onKeyDown={(e) => {
              const isCopyKey =
                (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c";

              if (isCopyKey && !confirmPasswordShow) {
                e.preventDefault();
                toast(
                  "You can't copy Confirm password when it is still hidden 😊"
                );
              }
            }}
          />
          <Eyelash>
            {confirmPasswordShow ? (
              <HiEyeSlash onClick={() => setConfirmPasswordShow((s) => !s)} />
            ) : (
              <HiEye onClick={() => setConfirmPasswordShow((s) => !s)} />
            )}
          </Eyelash>
        </EyeContainer>
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
