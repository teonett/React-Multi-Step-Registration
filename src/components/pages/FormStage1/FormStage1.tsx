import React, { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import * as context from "../../contexts/FormContext";
import Theme from "../../../main/Theme";

const FormStage1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = context.useForm();

  useEffect(() => {
    dispatch({
      type: context.FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    navigate(`/step2`);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: context.FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3 - {state.name}</p>
        <h1>Vamos começar pelo seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};

export default FormStage1;
