import styled from "styled-components";

export const MainHeader = styled.div`
  position: fixed;
  width: 100vw;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    font-size: 13px;
    line-height: 18px;
    color: #7a7a7a;
    border: 0;
    border-bottom: 1px solid #7a7a7a;
    width: 100%;
    outline: none;
    height: 32px;
    padding: 10px 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-width: 320px;
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  height: 100%;
  max-width: 1200px;
  align-items: center;
  gap: 20px;

  @media (max-width: 767px) {
    display: grid;

    grid-template-columns: 35% 35% 30%;
    grid-template-rows: 50% 50%;
    gap: 0px;
    grid-template-areas:" btn logo menu" " search search search";
    width:100%;
    padding: 0 20px;
    padding-top:5px;
    
`;

export const MenuMob = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
    grid-area: btn;
  }
`;

export const Column1 = styled.div`
  grid-area: logo;

`;
export const Column2 = styled.div`
  grid-area: search;
  width: 100%;
`;
export const Column3 = styled.div`
  grid-area: menu;
`;

export const MainLogo = styled.img`
  @media (max-width: 767px) {
    width: 22vw;
    max-width: 200px;
    min-width: 103px;
  }
`;

export const SearchField = styled.div`
  width: 718px;
  position: relative;
  height: 32px;
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
    height: 22px;
    margin: 0 auto;
    margin-bottom: 20px;

    img {
      width: 18px;
    }
  }
`;
export const SideOption = styled.div`
  display: flex;
  cursor: pointer;

  @media (max-width: 767px) {
    display: flex;
    justify-content: end;
  }
`;

export const ButtonMyAccount = styled.button`
  background: transparent;
  border: none;
  outline: none;
  align-items: center;
  height: 20px;
  display: flex;

  img {
    width: 1.4vw;
    min-width: 18px;
    height: 18px;
  }

  @media (max-width: 767px) {
    span,
    .disabled-mobile {
      display: none;
    }
  }
`;

export const ButtonCart = styled(ButtonMyAccount)`
  margin-left: 16px;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }
`;

export const CartItems = styled.div`
  background-color: #f8475f;
  height: 14px;
  width: 14px;
  line-height: 14px;
  font-size: 10px;
  border-radius: 100%;
  color: #ffffff;
  margin-left: 9px;
  font-weight: bold;
  cursor: pointer;
`;
