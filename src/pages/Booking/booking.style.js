import styled from "styled-components";

export const BookingPageStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: white;
  .body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* max-width: 1400px; */
    width: 100%;
    margin: auto;
    padding-top: 4rem;
    /* grid-template-columns: auto auto; */
    /* padding: 5rem 5rem; */
  }
`;

export const PropertyDetailsSectionStyle = styled.div`
  /* width: 40%; */
  padding: 0 1rem;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

export const BookingDetailsSectionStyle = styled.div`
  max-width: 60%;
  height: 100%;
  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

export const ImageSectionStyle = styled.div`
  .img {
    width: 100%;
    height: auto;
  }
  .address {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;

    img {
      height: 17px;
      width: 15px;
    }

    span {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 1rem;
      /* identical to box height, or 250% */
      letter-spacing: 0.05em;
      margin-left: 0.5rem;
      color: #717171;
    }
  }

  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    padding-top: 1rem;
    text-transform: uppercase;
  }

  .desc {
    width: 100%;
    font-size: 1rem;
    line-height: 28px;
    letter-spacing: 0.05em;
    font-weight: 500;
    margin: 1.5rem 0;
  }
`;

export const DetailsSectionStyle = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  table {
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    .img-text {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
        object-fit: contain;
      }

      span {
        font-style: normal;
        font-weight: normal;
        padding: 1.5rem 0;
        /* or 306% */

        letter-spacing: 0.05em;
        text-transform: capitalize;
        margin-left: 1.5rem;
      }
    }

    .value {
      padding-left: 1rem;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      letter-spacing: 0.05em;
    }

    .link {
      color: #f37021;
      cursor: pointer;
      span {
        border-bottom: 1px solid #f37021;
      }
    }
  }
`;

export const HeaderStyle = styled.header`
  background: #ffffff;
  box-shadow: 0px -17px 37px rgba(0, 0, 0, 0.25);
  padding: 1rem;

  img {
    height: 60px;
    width: auto;
  }
`;

export const DialogStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  overflow: hidden !important;
  display: grid;
  place-items: center;
  .model {
    position: relative;
    background: #f8f9fb;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: 97%;
    max-width: 800px;
    max-height: 90vh;
    margin: 1rem;

    .close {
      position: absolute;
      right: 0;
      top: 0;
      padding: 1rem;
      cursor: pointer;
      :hover {
        opacity: 0.8;
      }
    }

    .header {
      font-size: 1.4rem;
    }
    .model-body {
      width: 100%;
      height: 100%;
      background: white;
      margin: 2rem 0;
      table {
        width: 100%;
        color: #212529;
        border-collapse: collapse;
        border-spacing: 0;
        tbody {
          border: 1rem solid transparent;
        }
        td {
          padding: 0.75rem 1rem;
          vertical-align: top;
          font-size: 14px;
        }
        .header {
          td {
            padding-bottom: 1rem;
            font-size: 0.9rem;
          }
        }

        .border {
          border-top: 0.8px dashed rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  .floorplan-img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
  }
`;

export const SuccessPageStyle = styled.div`
  .container {
    font-family: lato;
    .title {
      font-family: Marcellus;
      font-size: 1.8rem;
      text-transform: uppercase;
      width: fit-content;
      margin: auto;
      ::after {
        content: "";
        display: block;
        background-color: #f37021;
        border-bottom: 2px solid #f37021;
        width: 100px;
      }
    }

    .details-wrapper {
      width: 100%;
      padding: 4rem;

      .payment-id-wrapper {
        display: flex;
        margin: 1rem;
        font-size: 1.1rem;
      }

      .sub {
        margin: 0;
        font-size: 1.3rem;
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .flex {
        display: flex;
        .right {
          margin-right: 3rem;
        }
      }
    }
  }
`;

export const BookingDetailsStyle = styled.div`
  width: 100%;
  margin: 0 1rem;

  .inline-fields {
    font-size: 1.2rem;
    display: grid !important;
    grid-template-columns: 2fr 3fr !important;
    max-width: 500px;
    margin: 0.5rem 0;
  }
`;
