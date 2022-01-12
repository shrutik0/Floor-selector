import styled from "styled-components";

export const HoverInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  background-color: #0c5958cc;
  color: white;
  padding: 1rem;
  padding-right: 2.5rem;
  border-radius: 8px;

  .title {
    padding-left: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    border-left: 2px solid gold;
  }

  .features {
    margin-top: 0.6rem;
    font-size: 1rem;
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
  background-color: #0c5958cc;
  color: white;
  border-radius: 10px;

  .trigger {
    right: 30px;
    border-radius: 10px;
    bottom: 100%;
    transform: translate(0%, 100%);
    position: absolute;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    background-color: transparent;
    cursor: pointer;
    z-index: 5;
    img {
      transition: all 300ms linear;
    }
  }

  .close {
    background-color: #0c5958cc;
    img {
      transform: rotate(180deg);
    }

    :hover {
      border: 1px solid gold;
    }
  }
`;

export const HomePageDetailsStyle = styled.div`
  padding: 1rem;
  padding-top: 3rem;
  width: 300px;

  .tag-line {
    font-size: 1.1rem;
    border-left: 4px solid gold;
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
    padding: 1rem;
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
      color: gold;
      width: 100%;
      text-align: center;
      padding: 1rem;
    }
  }
  .specs {
    display: flex;
    flex-direction: column;
    .specs-title {
      border-left: 4px solid gold;
      font-size: 1.1rem;
      font-weight: 500;
      padding: 0 1rem;
    }
    .items {
      display: flex;
      padding: 1rem;
      .item {
        width: 50%;
        text-align: center;
        .key {
          font-weight: 500;
        }
        .value {
          opacity: 0.9;
        }
      }
    }
  }
`;
