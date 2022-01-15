import styled from "styled-components";

export const HoverInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  background-color: rgba(255, 255, 255, 0.9);
  /* background-color: var(--clr-orange-light); */
  color: black;
  padding: 1rem;
  padding-right: 2.5rem;
  border-radius: 8px;

  .title {
    padding-left: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    border-left: 4px solid var(--clr-orange);
  }

  .features {
    margin-top: 0.6rem;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    div {
      padding: 0.2rem 0.5rem;
    }
  }
`;

export const CustomCollapsibleStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--clr-light);
  color: black;
  border-radius: 10px;
  z-index: 4;

  .trigger {
    right: 30px;
    border-radius: 10px;
    bottom: 100%;
    transform: translate(0%, 100%);
    position: absolute;
    height: 45px;
    padding: 5px;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    background-color: transparent;
    cursor: pointer;
    z-index: 5;
    img {
      transition: all 300ms linear;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .close {
    top: -40px;

    background-color: rgba(255, 255, 255, 0.8);
    img {
      transform: rotate(180deg);
    }

    :hover {
      border: 1px solid var(--clr-orange);
    }
  }
`;

export const HomePageDetailsStyle = styled.div`
  padding: 1rem;
  padding-top: 3rem;
  width: 300px;

  .tag-line {
    font-size: 1.1rem;
    border-left: 4px solid var(--clr-orange);
    font-weight: 600;
    padding: 0 1rem;
  }

  .title {
    position: relative;
    margin-top: 2rem;
    div {
      position: relative;
    }
  }

  .address-wrapper {
    padding: 1.4rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    .address {
      font-size: 1.1rem;
      width: 100%;
      text-align: center;
    }

    .btn {
      color: var(--clr-orange);
      width: 100%;
      text-align: center;
      padding: 0.5rem;
      font-weight: 600;
    }
  }
  .specs {
    display: flex;
    flex-direction: column;
    .specs-title {
      border-left: 4px solid var(--clr-orange);
      font-size: 1.1rem;
      font-weight: 600;
      padding: 0 1rem;
    }
    .items {
      display: flex;
      padding: 1rem;
      .item {
        width: 50%;
        text-align: center;
        .key {
          font-weight: 600;
        }
        .value {
          opacity: 0.9;
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export const CarouselStyle = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  .item {
    width: 100%;
    height: 100vh;
    background: green;
  }

  .carousel-trigger {
    z-index: 2;
    height: 50px;
    width: fit-content;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(255 255 255 / 90%);
    box-shadow: 0px 0px 2px var(--clr-orange);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
    /* padding: 0.6rem 0.2rem; */
    cursor: pointer;
    .btn-label {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--clr-orange);
      width: 0;
      overflow: hidden;
      transition: all 100ms linear;
      padding: 0;
    }
    :hover {
      .btn-label {
        padding: 0 0.8rem;
        width: fit-content;
      }
    }
    img {
      width: 100%;
      height: 70%;
      object-fit: contain;
    }
  }

  .prev-btn {
    left: 5px;
    img {
      transform: rotate(-90deg);
    }
    .btn-label {
      transform: translateX(-8px);
    }
  }

  .next-btn {
    right: 5px;
    img {
      transform: rotate(90deg);
    }
  }
`;

export const SvgStyle = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const TowerStyle = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .trigger {
    top: 20px;
  }
`;

export const TowerPageDetailsStyle = styled.div`
  width: 400px;
  height: 100%;
  padding: 1rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
    .icon-wrapper {
      width: 35px;
      height: 35px;
      margin-right: 0.7rem;
      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 5px;
    div {
      margin-top: 2rem;
      padding-left: 0.7rem;
      border-left: 3px solid var(--clr-orange);
      margin-right: 0.7rem;
    }
    .separate {
      margin: 0 2rem;
    }
  }

  .features {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    .feature {
      margin: 0.8rem;
      display: flex;
      font-size: 1.2rem;
      border: 2.3px solid #ec6e227a;
      border-radius: 8px;
      padding: 0.7rem 0;
      div {
        padding: 0rem 1rem;
      }

      .left {
        padding-right: 1rem;
      }
      .right {
        border-left: 3px solid var(--clr-orange);
        padding-left: 1rem;
      }
    }
  }
`;
