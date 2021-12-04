import React, { ReactNode } from "react";
import Header from "../Header";
import SideBarItem from "../SideBarItem";
import * as C from "./styles";
import { useForm } from "../../components/contexts/FormContext";

type ThemeProps = {
  children: ReactNode;
};

const Theme = ({ children }: ThemeProps) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.SideBar>
            <C.SideBar>
              <SideBarItem
                title="Pessoal"
                description="Se Identifique"
                icon="profile"
                path="/"
                active={state.currentStep === 1}
              />
              <SideBarItem
                title="Profissional"
                description="Seu nível"
                icon="book"
                path="/step2"
                active={state.currentStep === 2}
              />
              <SideBarItem
                title="Contatos"
                description="Como te achar"
                icon="mail"
                path="/step3"
                active={state.currentStep === 3}
              />
            </C.SideBar>
          </C.SideBar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;
