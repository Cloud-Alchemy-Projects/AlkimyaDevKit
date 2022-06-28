import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;


{/*Esta seccion es para la caja donde se ingresa el ID y CONTRASENA*/}
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.29); 
`;

{/*Esta seccion es para los los textos de OLVIDO CONTRASENA y NO TIENE CUENTA*/}
export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(15, 15, 15, 0.4);
  font-weight: 500;
  text-decoration: none;
`;

{/*Esta seccion es para el boton de REGISTRESE (Color magenta: #e00074)*/}
export const BoldLink = styled.a`
  font-size: 11px;
  color: rgba(15, 15, 15, 0.4);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

{/**/}
export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(224, 0, 116);
  }
`;


{/*Esta seccion es para el boton de ENTRAR  */}
export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(224, 0, 116);
  background: linear-gradient(
    58deg,
    rgb(224, 0, 116) 20%,
    rgb(243, 172, 18) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
