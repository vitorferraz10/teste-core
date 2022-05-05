import styled from "styled-components";

export const Title = styled.div`
  color: #fff;
  left: 32%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  display: inline-block;
  height: 147px;
  width: 100vw;
  max-width:1800px; 
  margin-0 auto;

  @media (max-width: 768px) {
    left: 0;
    padding: 0 20px;
  }

  h3 {
    font-size: 45px;
    line-height: 45px;
    font-weight: 900;

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  p {
    font-size: 30px;
    line-height: 40px;
    font-weight: 700;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const MainBanner = styled.div`
  display: flex;
  max-width: 100vw;
  overflow-x: hidden;
  height: 430px;
`;

export const BannerItem = styled.div`
  display: flex;
`;
export const BannerItemBg = styled.div`
  display: flex;
  max-width: 100vw;
  width: 100vw;
  position: relative;

  img {
    z-index: -1;
    position: absolute;
    right: 0;

    @media (max-width: 768px) {
      height: 100%;
    }
  }

  @media (max-width: 768px) {
    .bannerSeparator {
      display: none;
    }
  }
`;
