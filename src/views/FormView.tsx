import React, { useState, useEffect } from "react";
import { getPeople } from "../api/people";
import { PersonView } from "./PersonView";
import styled from "styled-components";

const Container = styled.div`
  width: 1130px;
  height: 1200px;
  background: #ffffff;
  display: flex;
`;
const Header = styled.h1`
  margin-top: 101px;
  margin-bottom: 0px;
  width: 100%;
  height: 52.64px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 165%;
  letter-spacing: 0.15em;
  color: #000000;
`;

const Input = styled.input`
  background: transparent;
  font-size: 20px;
  outline: none;
  border-width: 0 0 1.55px;
  border-color: black;
  color: black;
  width: 100%;
  margin-bottom: 0.1px;
  &:focus {
    outline: none;
    border-width: 0 0 5px;
  }
  &.error {
    border-color: #ff0000;
  }
`;

const FormGroup = styled.form`
  color: black;
  display: block;
  width: 752.87px;
  margin: 50px auto;
`;

const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 165%;

  margin-bottom: 26.45px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const Line = styled.div`
  border-bottom: #071594 solid 9.29px;
  margin-bottom: 55.74px;
  width: 166.17px;
  display: flex;
`;
const Confirm = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
`;

const Checkbox = styled.input`
  background: transparent;
  width: 30px;
  height: 30px;
  margin-right: 21px;
  
`;
const Button = styled.button`
  width: 224.3px;
  height: 54.88px;
  background: #071594;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  font-family: "Lato";
  font-style: italic;
  font-weight: 400;
  font-size: 30px;
  line-height: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  text-align: center;
  padding-top: 10px;
  `;

const HeaderGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  flex-wrap: wrap;
  text-align: right;
`;

const ErrorMessage = styled.div`
  height: 30px;
  font-family: "Inter";
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  line-height: 165%;
  display: flex;
  align-items: center;
  color: #ff0000;
  justify-content: flex-end;
`;

const ErrorMessageCheckbox = styled.div`
  height: 30px;
  font-family: "Inter";
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  line-height: 165%;
  display: flex;
  align-items: center;
  color: #ff0000;
  justify-content: flex-end;
  padding-left: 50px;
  margin-top: 3px;
`;

type Props = {
  starwars: string[];
  setLoggedIn: (loggedIn: boolean) => void;
};

export const FormView = (props: Props) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<number>(0);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [telError, setTelError] = useState<string>("");
  const [checkboxError, setCheckboxError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { login, password, email, tel, confirm };
    const starwarsData = props.starwars;
    console.log(starwarsData);
    const isFormValid: boolean = validate();
    if (isFormValid == true) {
      fetch(`https://example/`, {
        method: "POST",
        body: JSON.stringify({ user, starwarsData }),
      }).then(() => console.log("new user added"));
      props.setLoggedIn(true);
    }
  };

  const validate = () => {
    let correctValidation = true;

    if (login.length == 0) {
      setLoginError("Wypełnij pole");
      correctValidation = false;
    }
    if (password.length == 0) {
      setPasswordError("Wypełnij pole");
      correctValidation = false;
    }
    if (email.length == 0) {
      setEmailError("Wypełnij pole");
      correctValidation = false;
    }
    if (!tel) {
      setTelError("Wypełnij pole");
      correctValidation = false;
    }
    if (confirm == false) {
      setCheckboxError("Wymagana akceptacja regulaminu");
      correctValidation = false;
    }
    return correctValidation;
  };

  return (
    <Container>
      <FormGroup onSubmit={handleSubmit}>
        <HeaderGroup>
          <Header>FORMULARZ REJESTRACYJNY</Header>
          <Line />
        </HeaderGroup>
        <Label htmlFor="login">Login:</Label>
        <Input
          className={`${loginError != "" ? "error" : ""}`}
          type="text"
          id="login"
          name="login"
          onChange={(e) => {
            setLogin(e.target.value);
            setLoginError("");
          }}
        />
        <ErrorMessage>{loginError}</ErrorMessage>
        <Label htmlFor="password">Hasło:</Label>
        <Input
          className={`${passwordError != "" ? "error" : ""}`}
          type="password"
          id="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError("");
          }}
        />
        <ErrorMessage>{passwordError}</ErrorMessage>
        <Label htmlFor="email">E-mail:</Label>
        <Input
          className={`${passwordError != "" ? "error" : ""}`}
          type="email"
          id="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
        />
        <ErrorMessage>{emailError}</ErrorMessage>
        <Label htmlFor="tel">Numer telefonu:</Label>
        <Input
          className={`${telError != "" ? "error" : ""}`}
          type="tel"
          id="tel"
          name="tel"
          pattern="[0-9]{9}"
          onChange={(e) => {
            setTel(Number(e.target.value));
            setTelError("");
          }}
        />
        <ErrorMessage>{telError}</ErrorMessage>
        <Confirm>
          <Checkbox
            className={`${
              checkboxError != "" && confirm === false ? "error" : ""
            }`}
            type="checkbox"
            id="confirm"
            name="confirm"
            onChange={(e) => {
              setConfirm(!confirm);
              setCheckboxError("");
            }}
          />
          <Label htmlFor="confirm">Akceptuję regulamin</Label>
          <ErrorMessageCheckbox>{checkboxError}</ErrorMessageCheckbox>
        </Confirm>
        <Button type="submit">zapisz</Button>
      </FormGroup>
    </Container>
  );
};
