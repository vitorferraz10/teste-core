import styled, { css } from "styled-components";

interface ActiveProp {
  active?: boolean;
}

export const ProductContainer = styled.div`
  margin-top: 25px;
  padding: 0 10px;
  max-width: 1248px;
  margin: 0 auto;
`;

export const ProductText = styled.h3`
  font-size: 20px;
  line-height: 27px;
  position: relative;
  margin-bottom: 26px;
  font-weight: 900;

  &&:after {
    content: " ";
    height: 4px;
    width: 65px;
    position: absolute;
    background: #c0c0c0;
    left: 0;
    bottom: -6px;
  }
`;

export const ProductsBlocks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 20px;

    overflow-x: scroll;

    &&::-webkit-scrollbar {
      height: 6px; /* color of the tracking area */
    }

    &&::-webkit-scrollbar-track {
      background: transparent; /* color of the tracking area */
    }
    &&::-webkit-scrollbar-thumb {
      background-color: blue; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
      border: 3px solid black; /* color of the tracking area */
    }
  }
`;

export const BtnProducts = styled.button<ActiveProp>`
  width: 125.28px;
  height: 32.42px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0;
  margin-top: 9px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      visibility: hidden;
    `};
`;

export const ProductCards = styled.div`
  position: relative;
  text-align: center;
  display: block;
  cursor: pointer;
  background-color: #e6e8ea;

  padding-bottom: 15px;
`;

export const Productname = styled.div`
  color: #7a7a7a;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  font-family: "Nunito";
`;

export const FullPrice = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0 4px;
`;

export const Discount = styled.div`
  color: #ffffff;
  font-weight: 900;
  width: 0;
  height: 0;
  border-top: 72px solid #f8475f;
  border-left: 72px solid transparent;
  position: absolute;
  right: 0;
  top: 0;

  span {
    position: absolute;
    top: -58px;
    right: 4px;
  }
`;

export const Installments = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;

  .hidden {
    visibility: hidden;
    display: block;
  }
`;

export const StarsRow = styled.div`
  margin-top: 10px;
`;
