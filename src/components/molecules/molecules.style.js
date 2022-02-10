import styled from "styled-components";

export const HoverInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  background-color: rgba(255, 255, 255, 0.9);
  /* background-color: var(--clr-orange-light); */
  color: black;
  padding: 1rem;
  padding-right: 2rem;
  border-radius: 8px;
  /* box-shadow: 0px 0px 1px var(--clr-text); */
  color: var(--clr-text);

  .title {
    /* padding-left: 0.5rem; */
    font-size: 1.2rem;
    font-weight: 600;
    /* border-left: 3.5px solid var(--clr-orange-light); */
    font-family: "Marcellus", serif;
    display: flex;
    align-items: center;

    .icon {
      width: auto;
      height: 24px;
      transform: translateY(-1px);
      img {
        with: 100%;
        height: 100%;
      }
    }
    .text {
      margin: 0 0.5rem;
    }
  }

  .features {
    /* temp comment remove this */
    font-family: "Lato", sans-serif;
    margin-top: 0.6rem;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    div {
      padding: 0.3rem;
      padding-top: 0.5rem;
      padding-left: 0.5rem;
    }
  }

  .view-btn {
    background-color: var(--clr-orange);
    color: white;
    padding: 0.2rem 2rem;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
  }
`;

export const CustomCollapsibleStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--clr-light);
  color: black;
  border-radius: 0px 0px 10px 10px;
  z-index: 4;
  box-shadow: 0px 0px 2px #827878;

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

  @media screen and (max-height: 480px) {
  }
`;

export const HomePageDetailsStyle = styled.div`
  padding: 1rem;
  padding-top: 3rem;
  width: 300px;
  font-family: "Lato", serif;

  .tag-line {
    font-size: 1.1rem;
    border-left: 4px solid var(--clr-orange);
    font-weight: 500;
    line-height: 26px;
    padding: 0 1rem;
  }

  .address-wrapper {
    padding: 1.4rem;
    padding-top: 2rem;
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
      font-family: "Lato", serif;
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

  @media screen and (max-height: 480px) {
    padding-left: 25%;
    padding-top: 0rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .address-wrapper {
      width: fit-content;
    }
    .specs {
      width: fit-content;
      .items {
        .item {
          margin: 0 1rem;
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

  @media screen and (max-height: 480px) {
    .carousel-trigger {
      height: 35px;
    }
  }
`;

export const SvgStyle = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: auto;
  svg {
    width: 100%;
    height: 100%;
  }

  .Block {
    :hover {
      fill: var(--clr-blocked);
      fill-opacity: 0.4;
      stroke: black;
    }
  }

  .Sold {
    :hover {
      fill: var(--clr-sold);
      fill-opacity: 0.3;
      stroke: black;
    }
  }

  .Available {
    :hover {
      fill: var(--clr-available);
      fill-opacity: 0.2;
      stroke: black;
    }
  }
`;

export const CarouselItemStyle = styled.section`
  height: 100%;
  max-width: 85vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .trigger {
    top: 20px;
  }
`;

export const CarouselItemDetailsStyle = styled.div`
  width: 400px;
  height: 100%;
  max-height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  padding: 1rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px var(--clr-text);

  .header {
    display: flex;
    align-items: center;
    font-family: "Marcellus", serif;
    font-size: 1.2rem;
    font-weight: 500;
    .icon-wrapper {
      width: 28px;
      height: 28px;
      margin-right: 0.5rem;
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
    font-family: "Lato", serif;
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: 5px;
    div {
      margin-top: 2rem;
      padding-left: 0.7rem;
      border-left: 3px solid var(--clr-orange);
      margin-right: 0.7rem;
      line-height: 18px;
    }
    .separate {
      margin: 0 2rem;
    }
    .Available {
      color: #0fa215d9;
    }
    .Block {
      color: var(--clr-blocked);
    }
    .Sold {
      color: var(--clr-sold);
    }
  }

  .features {
    font-family: "Lato", serif;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;

    .feature {
      margin: 0.8rem;
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      align-items: center;
      font-size: 1rem;
      border: 1.5px solid #ec6e227a;
      border-radius: 8px;
      padding: 0.5rem 0;
      text-align: center;
      div {
        padding: 0rem 1rem;
      }

      .left {
        padding-right: 1rem;
        border-right: 3px solid var(--clr-orange);
      }
      .right {
        padding-left: 1rem;
      }
    }
  }

  .btns {
    margin-top: 1rem;
    margin-left: 0.5rem;
    display: flex;
    width: 100%;
    align-items: center;
    font-family: "Lato", serif;
    justify-content: center;

    .btn {
      text-align: center;
      width: 100%;
      cursor: pointer;
      background-color: var(--clr-orange);
      color: white;
      padding: 0.5rem 1.5rem;
      font-size: 1.2rem;
      margin-right: 1rem;
      border-radius: 3px;
      :lat-child {
        margin-right: 0;
      }
      :hover {
        opacity: 0.8;
      }
    }
  }

  .flat-navigator {
    font-size: 1rem;
    font-weight: 500;
    .icon-wrapper {
      width: 25px;
      height: 25px;
    }
  }

  @media screen and (max-height: 480px) {
    height: 100vh;
    .header {
      font-size: 1.2rem;
    }
    .highlights {
      font-size: 1rem;
    }

    .features {
      .feature {
        font-size: 1rem;
      }
    }
  }
`;

export const OnClickInfoStyle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  .info-body {
    background-color: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.6);
    width: 180px;
    margin: 0.5rem;
    .title {
      font-size: 1rem;
      text-align: left;
    }
    .features {
      font-size: 0.9rem;
      text-align: left;
    }
  }
`;

export const FlatStyle = styled.section`
  height: 100vh;
  width: 100%;
  .flat-number {
    font-family: "Lato", saref;
    background-color: #ceccca;
    color: #4a4644;
    width: fit-content;
    margin: auto;
    padding: 0.5rem 1rem;
    font-weight: 600;
    border-radius: 4px;
    font-size: 1.3rem;
  }
  .img-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 95%;
      object-fit: contain;
    }
  }
  @media screen and (max-height: 480px) {
    .flat-number {
      font-size: 1rem;
    }
  }
`;
