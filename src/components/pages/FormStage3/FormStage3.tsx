import React, { ChangeEvent, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import * as context from "../../contexts/FormContext";
import Theme from "../../../main/Theme";

const FormStage3 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = context.useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate(`/`);
    } else {
      dispatch({
        type: context.FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== "" && state.gitHub! === "") {
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: context.FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: context.FormActions.setGitHub,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3 </p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type="email"
            value={state.gitHub}
            onChange={handleGitHubChange}
          />
        </label>

        <Link to="/stage2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};

export default FormStage3;
