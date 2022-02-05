import styled from "styled-components";

export const PathStyle = styled.path`
  fill: transparent;
  outline: none;
  cursor: pointer;
  fill-opacity: 0;
  transition: all 150ms linear;

  :hover {
    fill: rgba(0, 255, 0, 1);
    fill-opacity: 0.2;
    stroke: black;
  }
`;

export const HomeScreenLogoStyle = styled.div`
  width: fit-content;
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  padding: 0.2rem;
  background: rgba(250, 250, 250, 0.9);
  border-radius: 5px;
  margin: 0.5rem;
  cursor: pointer;

  @media screen and (max-height: 480px) {
    height: 40px;
  }
`;

export const MouseInstructionsStyle = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 0;
  background-color: transparent;
  width: 100%;

  .instruction {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    width: fit-content;
    height: 40px;
    /* text-align: center; */
    overflow: hidden;
    margin: auto;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 1.3rem;
    transform: scaleX(0);
    font-weight: 600;
    animation-name: wide-close;
    animation-duration: 4000ms;
    transform-origin: center;
    animation-timing-function: cubic-bezier(
      0.455,
      0.03,
      0.515,
      0.155,
      0.222,
      0.4444
    );
    @keyframes wide-close {
      0% {
        margin-bottom: 0;
      }
      10% {
        transform: scaleX(1);
      }
      20% {
        margin-bottom: 2px;
      }
      30% {
        margin-bottom: 0px;
      }
      40% {
        margin-bottom: 2px;
      }
      50% {
        margin-bottom: 0px;
      }
      60% {
        margin-bottom: 2px;
      }
      70% {
        margin-bottom: 0px;
      }
      80% {
        margin-bottom: 2px;
      }
      90% {
        margin-bottom: 0px;
        opacity: 1;
        transform: scaleX(1);
        width: fit-content;
      }
      100% {
        width: 0;
      }
    }
  }
`;

export const PhoneFieldStyle = styled.div`
  .input-wrapper {
    display: flex;
    .phone-input {
      margin-left: 1rem;
    }
  }
  .country-code {
    width: 60px !important;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const NavigatorStyle = styled.div`
  display: flex;
  align-items: center;

  .dropdown {
    margin: 0 0.5rem;
    .control {
      border: none;
      display: flex;
      align-items: center;
      padding: 0;
      transition: all 200ms linear;
      .Dropdown-arrow-wrapper {
        padding: 0 0.5rem;
      }
      .arrow {
        position: unset;
      }
    }
    .menu {
      width: fit-content;
      min-width: 100%;
      div {
        padding: 0.2rem;
        font-size: 1rem;
        text-align: center;
      }
    }
  }
`;

export const RotateInstructionStyle = styled.section`
  @media screen and (max-height: 480px) {
    display: none;
  }

  @media screen and (min-width: 480px) {
    display: none;
  }
  z-index: 300;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: white;
  .img-wrapper {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    img {
      width: 70%;
      height: auto;
    }
  }

  .instruction {
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 0;
    font-weight: 500;
  }
`;
