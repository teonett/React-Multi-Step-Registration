import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #888804;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin 15px 0
  }
  label{
    font-size: 13px;

    input{
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 90%;
      padding: 20px 10px;
      border: 2px solid #25CD89;
      border-radius: 10px;
      color: #ffff;
      outline: 0;
      font-size: 15px;
      background-color: #02044A;    
    }
  }

  button {
    background-color: #25CD89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 15px;
  }

  .backButton {
    border: 2px solid #25CD89;
    background-color: #02044A;
    text-decoration:none;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 15px;
    margin-right: 15px;
  }
`;
