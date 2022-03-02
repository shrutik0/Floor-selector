import styled from "styled-components";

export const FormStyle = styled.section`
  width: 100%;
  .container {
    padding-left: 4rem;
    .title {
      font-family: Marcellus;
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      ::after {
        content: "";
        display: block;
        background-color: #f37021;
        border-bottom: 2px solid #f37021;
        width: 100px;
      }
    }

    max-width: 900px;
    width: 100%;
    margin: auto;
  }
  .form {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;

    .inline-fields {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      .form-row {
        width: 95%;
        :last-child {
          margin-right: 0rem;
        }
      }
      .error {
        text-align: center;
      }
    }

    .form-row {
      max-width: 900px;
      margin: 1rem 0;
      width: fit-content;
      display: flex;
      flex-direction: column;
      label {
        padding: 0.7rem 0;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        letter-spacing: 0.05em;
        text-transform: capitalize;
        color: #7d7d7d;
        width: fit-content;
      }

      input {
        padding: 0.7rem 1rem;
        width: 100%;
        font-size: 1rem;
        background-color: #f6f6f6;
        border-color: transparent;

        ::placeholder {
          color: rgba(125, 125, 125, 0.4);
        }

        :-ms-input-placeholder {
          color: rgba(125, 125, 125, 0.4);
        }

        ::-ms-input-placeholder {
          color: rgba(125, 125, 125, 0.4);
        }
      }

      .input-error {
        border: 1px solid tomato;
      }

      .error {
        opacity: 0.7;
        font-size: 0.9rem;
        display: block;
        color: red;
        line-height: 1.8rem;
        width: 100%;
        /* background: yellow; */
        text-align: left;

        :hover {
          opacity: 1;
        }
      }
    }

    .phone {
    }

    .desc {
      padding: 2rem 0;
      font-size: 0.9rem;
      line-height: 22px;
      letter-spacing: 0.05em;
      font-weight: normal;
    }

    .tnc {
      padding-left: 0.5rem;
      display: flex;
      align-items: center;
      span {
        margin-left: 1rem;
      }
    }

    .advance-amount {
      margin-top: 1rem;
      padding: 1rem 0;
    }

    .submit-wrapper {
      /* margin: auto; */
      background: red;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #f37021;
      cursor: pointer;
      border-radius: 3px;
      outline: transparent;
      border-color: transparent;
      img {
        width: 20px;
        height: 20px;
        margin-left: 1rem;
      }

      span {
        font-family: "Roboto", sans-serif;
        max-width: 700px;
        font-size: 1.2rem;
        color: white;
        background: transparent;
        /* width: 100%; */
        box-shadow: none;
        pointer-events: none;
        :hover {
          opacity: 0.9;
        }
      }
    }

    .disabled-btn {
      opacity: 0.5;
      filter: grayscale (100%);
      cursor: unset;
      :hover {
        opacity: 0.5;
      }
    }
  }

  @media screen and (max-width: 640px) {
    .container {
      padding-left: 0;
    }
    .title {
      width: fit-content;
      margin: auto;
    }
    .form {
      .inline-fields {
        grid-template-columns: 1fr;
        justify-content: center;
        .form-row {
          width: 100%;
          padding: 0 1rem;
        }
      }
      #country-code {
        width: 50% !important;
        padding: 0;
      }
      .desc,
      .tnc {
        padding: 1rem;
      }
      .advance-amount,
      .submit-wrapper {
        width: fit-content;
        margin: auto;
        text-align: center;
      }
    }
  }
`;
