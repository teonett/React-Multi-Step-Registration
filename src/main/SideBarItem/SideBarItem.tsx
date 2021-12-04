import React from "react";
import { Link } from "react-router-dom";
import * as C from "./styles";
import { ReactComponent as ProfileIcon } from "../../components/images/profile.svg";
import { ReactComponent as MailIcon } from "../../components/images/mail.svg";
import { ReactComponent as BookIcon } from "../../components/images/book.svg";

type SideBarItemProps = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

const SideBarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: SideBarItemProps) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "profile" && (
            <ProfileIcon fill="white" width={24} height={24} />
          )}
          {icon === "mail" && <MailIcon fill="white" width={24} height={24} />}
          {icon === "book" && <BookIcon fill="white" width={24} height={24} />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};

export default SideBarItem;
