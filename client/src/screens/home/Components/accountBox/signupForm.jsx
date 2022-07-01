/*En esta parte del codigo se creara el apartado para recuperar la cuenta
en esta se pide al Usuario su ID, Nombre completo y Correo electronico
(sujeto a cambios)
*/

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
        <Input type="text" placeholder="ID" />
        <Input type="text" placeholder="Nombre completo" />
        <Input type="email" placeholder="Correo electronico" />
        {/* <Input type="password" placeholder="Numero telefonico" /> */}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Enviar</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      {/* <MutedLink href="#">
        Tiene una cuenta?
        <BoldLink href="#" onClick={switchToSignin}>
          Acceda a ella
        </BoldLink>
      </MutedLink> */}
    </BoxContainer>
  );
}
