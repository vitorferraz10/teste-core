import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #000;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const AddressSection = styled.section`
  color: #fff;
  margin-bottom: 20px;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #fff;
    margin-top: 20px;

    &::after {
      display: block;
      height: 5px;
      width: 45px;
      background-color: #fff;
      content: "";
      margin: 14px 0 16px;
    }
  }

  p {
    margin: 6px 2px;
    font-size: 13px;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 13px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    margin-bottom: 28px;
  }
`;

export const List = styled.ul`
  li {
    background-color: #fff;
    margin-bottom: 25px;
    width: 195px;
    height: 38px;
    padding: 4px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: space-around;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-transform: uppercase;
      font-size: 12px;
      color: #000;
      text-decoration: none;
      line-height: 100%;
      font-weight: 600;
      margin-left: 10px;
      text-align: center;
    }

    img {
      content: "";
      height: 15.19px;
      width: 18.58px;
      background-size: 100% 100%;
      display: inline-flex;
      margin-right: 15px;
      justify-content: space-around;
      margin-right: 0;
    }

    &:hover {
      background-color: #919090;
      transition: background-color 0.8s;
    }
  }

  @media (max-width: 768px) {
    min-height: 38px;

    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

export const CreatedSection = styled.section`
  display: flex;

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
export const Icon = styled.div`
  margin-right: 24px;

  p {
    color: #fff;
    font-size: 11px;
    line-height: 14px;
    color: #fff;
    opacity: 0.8;
  }
`;
