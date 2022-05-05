import logo from "../../assets/logos/corebiz.svg";
import searchIcon from "../../assets/icons/search.svg";
import userIcon from "../../assets/icons/user.svg";
import cartIcon from "../../assets/icons/cart.svg";
import { List } from 'phosphor-react';
import * as S from './styled'


const renderCartAmountItems = (items = 0) => {
  if (items <= 0) {
    return null;
  }
  return <S.CartItems>{items}</S.CartItems>;
};

export function Header() {
  return (
    <S.MainHeader>
      <S.Container>
        <S.MenuMob><List size="35"/></S.MenuMob>
        <S.Column1>
          <S.MainLogo src={logo} className="mainLogo" alt="logo" />
        </S.Column1>
        <S.Column2>
          <S.SearchField>
            <input type="text" placeholder="O que você está procurando ?" />
            <img src={searchIcon} alt="search" />
          </S.SearchField>
        </S.Column2>
        <S.Column3>
          <S.SideOption>
            <S.ButtonMyAccount>
              <img src={userIcon} className="disabled-mobile" alt="My Account" />
              <span>Minha conta</span>
            </S.ButtonMyAccount>
            <S.ButtonCart>
              <img src={cartIcon} alt="Cart" />
              {renderCartAmountItems(1)}
            </S.ButtonCart>
          </S.SideOption>
        </S.Column3>
      </S.Container>
    </S.MainHeader>
  );
}

