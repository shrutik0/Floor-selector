import styled from "styled-components";

export const HomeStyle = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TowersPageStyle = styled.section`
  width: 100vw;
  height: 100vh;


  .carousel-trigger {
    top: 90% !important;
  }

  .home-btn {
    position: absolute;
    z-index: 2;
    margin: 15px;
    background: white;
    width: 45px;
    height: 45px;
    padding: 8px;
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

  .vr-tour {
    z-index: 50;
    .model {
      padding: 0.2rem !important;
      padding-bottom: 0.4rem !important;
      .header {
        padding: 0.5rem !important;
      }
      max-width: unset;
      max-height: unset;
      width: 100%;
      height: 100%;
      margin: 0;
      padding-bottom: 0rem;
      .model-body {
        margin: 0;
      }
    }
  }

  @media screen and (max-height: 480px) {
    .home-btn {
      width: 35px;
      height: 35px;
      padding: 7px;
      margin: 10px;
    }
  }
`;
