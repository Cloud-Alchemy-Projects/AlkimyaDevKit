import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="ID" />
        <Input type="password" placeholder="Contraseña" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Olvido su contraseña?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Entrar</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        No tiene cuenta?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Registrese
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
