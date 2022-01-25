import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import Loading from "../../components/atoms/Loading";
import { PropertiesViewerStyle } from "./style";

function PropertiesViewer(props) {
  const [properties, setProperties] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = "https://bel-air.herokuapp.com/api/v1/allinventory";

  const fetchProperties = async () => {
    let response;
    try {
      response = await fetch(url);
    } catch (e) {
      setLoading(false);
      setTimeout(() => {
        alert("Failed to connect to database");
      }, 500);
      return;
    }

    console.log(response);
    if (response.ok) {
      // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await response.json();
      setProperties(json);
    } else {
      alert("HTTP-Error: " + response.status);
    }
  };

  const tableSetup = () => {
    const columns = [];
    const data = [];

    Object.keys(properties[0]).forEach((key) =>
      columns.push({ title: key, field: key })
    );
    setTableColumns(columns);

    properties.forEach((property, index) => {
      data.push({ ...property, id: index });
    });

    setTableData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    if (properties.length > 0) tableSetup();
  }, [properties]);

  return (
    <PropertiesViewerStyle>
      {loading ? (
        <Loading />
      ) : tableData.length > 1 ? (
        <MaterialTable
          columns={tableColumns}
          data={tableData}
          onRowClick={(evt, selectedRow) =>
            setSelectedRow(selectedRow.tableData.id)
          }
          options={{
            columnsButton: true,
            filtering: true,
            search: true,
            pageSize: 10,
            showTitle: false,
            searchFieldAlignment: "left",
            rowStyle: (rowData) => ({
              backgroundColor:
                selectedRow === rowData.tableData.id ? "#67aeae" : "#FFF",
            }),
          }}
        />
      ) : (
        <div className="error">
          <h1>Something Terrible Happened !</h1>
          <h3>Try contacting support team</h3>
        </div>
      )}
    </PropertiesViewerStyle>
  );
}

export default PropertiesViewer;
