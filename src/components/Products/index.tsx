// import searchIcon from '../../assets/icons/search.svg';
// import userIcon from '../../assets/icons/user.svg';
// import cartIcon from '../../assets/icons/cart.svg';
import { useState, useEffect } from "react";
import * as S from "./styled"
import { getProducts } from '../../services/product';
import { Star as StarIcon } from "phosphor-react";
import Slider from "react-slick";

type ProducType = {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  price: number
  listPrice?: number
  installments: [{
    quantity: number
    value: number
  }]
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500
};

const parseMoney = (vl: { toLocaleString: (arg0: string, arg1: { minimumFractionDigits: number; }) => any; }) =>
  vl.toLocaleString("pt-br", { minimumFractionDigits: 2 });

export function Products() {
  const [products, setProducts] = useState<ProducType[]>();
  const [loadingProducts, setLoadingProducts] = useState(false);
  ;

  if (!loadingProducts) {
    setLoadingProducts(true);
    getProducts().then((p) => {
      setProducts(p);
    });
  }


  const renderProducts = () => {
    if (!products) {
      return loading();
    }

    const renderCard = (product: ProducType) => {
      const {
        productId,
        productName,
        stars,
        imageUrl,
        price,
        installments,
        listPrice,
      } = product;
      const mainInstallments = installments[0] || null;

      const renderInstallments = () => {
        if (!mainInstallments) {
          return <span className="installments hidden">À vista</span>;
        }
        const { quantity: installmentsQuantity, value: installmentsValue } =
          mainInstallments;
        return (
          <S.Installments>
            ou em {installmentsQuantity}x de R${parseMoney(installmentsValue)}
          </S.Installments>
        );
      };

      const renderDiscount = () => {
        if (!listPrice) {
          return null;
        }

        return (
          <S.Discount>
            <span>OFF</span>
          </S.Discount>
        );
      };


      return (

        <S.ProductCards key={productId}>
          {renderDiscount()}
          < img src={imageUrl} alt={productName} />
          <S.Productname>{productName}</S.Productname>

          <S.StarsRow> {Array.apply(0, Array(stars)).map((_: any, i: number) => <StarIcon color='#F8475F' key={i} />)}</S.StarsRow>
          <div className="priceBlock">
            <S.FullPrice>
              por <strong>R$ {parseMoney(price)}</strong>
            </S.FullPrice>
            {renderInstallments()}
          </div>
          {<S.BtnProducts>Compra</S.BtnProducts>}
        </S.ProductCards >

      );
    };

    return products.map((product: any) => renderCard(product))

  };

  const loading = () => {
    return <span>Carregando...</span>;
  };

  console.log("products:>>", products)

  return (

    <S.ProductContainer>
      <div className="container">
        <S.ProductText>Mais vendidos</S.ProductText>
        <S.ProductsBlocks>{renderProducts()}</S.ProductsBlocks>
      </div>
    </S.ProductContainer>


  );
}


