import React from "react";
import * as C from "./style";

type SelectionOptionProps = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
};

const SelectOption = ({
  title,
  description,
  icon,
  selected,
  onClick,
}: SelectionOptionProps) => {
  return (
    <C.Container onClick={onClick} selected={selected}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
};

export default SelectOption;
