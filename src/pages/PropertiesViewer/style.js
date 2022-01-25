import styled from "styled-components";

export const PropertiesViewerStyle = styled.section`
  background-color: #fff1cd;
  width: 100%;
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
