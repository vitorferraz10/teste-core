import styled from "styled-components";

export const NewsletterComponent = styled.div`
  background-color: #f2f2f2;
  margin-top: 50px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 36px;
`;
export const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 18px;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ColAuto = styled.div`
  margin-right: 8px;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 250px;
  max-height: 40px;
  border-radius: 5px;
  background-color: #fff;
  line-height: 14px;
  font-size: 12px;
  padding: 15px;
  border: 0;
`;
export const Button = styled.button`
  width: 140px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;

  @media (max-width: 768px) {
    min-width: 250px;
  }

  &:hover {
    opacity: 0.9;
    width: 150px;
    transition: width 1s;
    cursor: pointer;
  }
`;
