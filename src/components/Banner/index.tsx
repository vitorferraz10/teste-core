import bannerImage1 from '../../assets/images/banner1.jpg';
import bannerMobCore from '../../assets/images/banner-mob-core.png';
import * as S from './styled'

const separator = (
   <svg className="bannerSeparator" width="990" height="430" viewBox="0 0 990 430" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H960C835.5 176.5 1067.5 266 960 430H0V0Z" fill="black" />
   </svg>
);

const title = () => {
   return (
      <S.Title>
         <div>
            <p>Olá, o que você está buscando?</p>
            <h3>Criar ou migrar seu <br /> e-commerce?</h3>
         </div>
      </S.Title>
   )
}

let widthScreen = window.screen.width

console.log('w', widthScreen)

const renderItem = () => {
   return (
      <S.BannerItem>

         <S.BannerItemBg >
            {separator}
            {title()}

            {widthScreen > 797 ? <img src={bannerImage1} alt="banner 1" /> : <img src={bannerMobCore} alt="banner 1" /> }
         </S.BannerItemBg>
      </S.BannerItem>
   )
}

export function Banner() {
   return (
      <S.MainBanner>
         {renderItem()}
      </S.MainBanner>
   );
}
