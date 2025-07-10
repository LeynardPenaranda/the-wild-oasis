import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

import Input from "../../ui/Input";
import { useRecoverPass } from "./useRecoverPass";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

function RecoverFormEmail() {
  const { recover, isRecovering } = useRecoverPass();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function onsubmit(data) {
    recover(data);
  }
  return (
    <Form onSubmit={handleSubmit(onsubmit)}>
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
          disabled={isRecovering}
        />
      </FormRow>

      <Button disabled={isRecovering}>
        {isRecovering ? `Submitting...` : `Submit`}
      </Button>
      <Button variation="secondary" onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </Form>
  );
}

export default RecoverFormEmail;
