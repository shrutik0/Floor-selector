import styled from "styled-components";

export const PropertiesViewerStyle = styled.section`
  background-color: #fff1cd;
  width: 100%;
  position: relative;

  table {
    position: relative;
    overflow: visible;
    font-family: "Lato";
  }

  .MuiToolbar-gutters {
    .MTableToolbar-spacer-7 {
      display: none !important;
    }
  }

  thead {
    position: sticky;
    top: 0px;
    th {
      font-size: 0.8rem;
    }
  }

  tr {
    font-size: 0.8rem;
  }

  .toogle-btn {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    color: black;
    border-radius: 5px;
    position: absolute;
    background-color: white;
    margin: 1rem;
    border: 2px solid black;
    top: 0;
    left: 25rem;
    z-index: 2;
    cursor: pointer;
    :hover {
      background-color: rgba(5, 5, 5, 0.1);
    }
  }

  .error {
    width: 100%;
    text-align: center;
    h1 {
      font-size: 2rem;
    }
    h3 {
      margin: 1rem 0;
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
