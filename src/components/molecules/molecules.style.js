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
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
  border-radius: 10px;

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

export const SliderStyle = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;
