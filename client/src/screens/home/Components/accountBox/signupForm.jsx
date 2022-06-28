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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nombre Completo" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Confirme su contraseña" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Crear</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Tiene una cuenta?
        <BoldLink href="#" onClick={switchToSignin}>
          Acceda a ella
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
