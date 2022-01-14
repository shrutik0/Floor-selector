import styled from "styled-components";

export const HomeStyle = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TowersPageStyle = styled.section`
  background: var(--grd-orange-white);
  width: 100vw;
  height: 100vh;

  .carousel-trigger {
    top: 90% !important;
  }

  .home-btn {
    position: absolute;
    z-index: 2;
    left: 20px;
    top: 20px;
    background: white;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    opacity: 0.89;
    transition: all 100ms linear;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    :hover {
      opacity: 1;
    }
  }
`;
