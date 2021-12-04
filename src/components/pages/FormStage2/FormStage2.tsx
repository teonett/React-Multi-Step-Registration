import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as C from "./styles";
import * as context from "../../contexts/FormContext";
import Theme from "../../../main/Theme";
import SelectOption from "../../../main/SelectOption";

const FormStage2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = context.useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate(`/`);
    } else {
      dispatch({
        type: context.FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    navigate(`/step3`);
  };

  const setLevel = (level: number) => {
    dispatch({
      type: context.FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3 </p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado profissional.</p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar a menos de 2 anos"
          icon="🤓"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Já sou programador"
          description="Ja programo a mais de 2 anos"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};

export default FormStage2;
