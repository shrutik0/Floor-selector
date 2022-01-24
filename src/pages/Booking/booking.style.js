import styled from "styled-components";

export const BookingPageStyle = styled.section`
  height: 100%;
  width: 100%;
  background-color: white;
  .body {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    padding-top: 4rem;
    /* grid-template-columns: auto auto; */
    /* padding: 5rem 5rem; */
  }
`;

export const PropertyDetailsSectionStyle = styled.div`
  /* width: 40%; */
  max-width: 380px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BookingDetailsSectionStyle = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
`;

export const ImageSectionStyle = styled.div`
  .img {
    width: 380px;
    height: auto;
  }
  .address {
    display: flex;
    align-items: center;
    padding-top: 1rem;

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
    text-transform: uppercase;
    padding: 0.5rem 0;
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
        line-height: 3rem;
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
