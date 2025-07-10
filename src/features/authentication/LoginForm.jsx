import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import styled from "styled-components";
import { EyeContainer, Eyelash } from "./SignupForm";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import toast from "react-hot-toast";

const LoggingIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const [eyePassword, setEyePassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <EyeContainer>
          <Input
            type={eyePassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            onKeyDown={(e) => {
              const isCopyKey =
                (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c";

              if (isCopyKey && !eyePassword) {
                e.preventDefault();
                toast(
                  "You can't copy password when it is still in hidden mode"
                );
              }
            }}
            required
          />
          {password !== "" && (
            <Eyelash>
              {eyePassword ? (
                <HiEyeSlash onClick={() => setEyePassword((c) => !c)} />
              ) : (
                <HiEye onClick={() => setEyePassword((c) => !c)} />
              )}
            </Eyelash>
          )}
        </EyeContainer>
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {isLoading ? (
            <LoggingIn>
              <span>Logging in... </span>
              <SpinnerMini />
            </LoggingIn>
          ) : (
            `Login`
          )}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
