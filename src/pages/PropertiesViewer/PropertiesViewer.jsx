import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import Loading from "../../components/atoms/Loading";
import { useLoading } from "../../contexts/LoadingContext";
import { baseUrl } from "../../data";
import { PropertiesViewerStyle } from "./style";

function PropertiesViewer(props) {
  const [properties, setProperties] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const { loading, setLoading } = useLoading();

  const url = baseUrl + "/api/v1/allinventory";

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
    let columns = [];
    const data = [];

    Object.keys(properties[0]).forEach((key) =>
      columns.push({
        title: key,
        field: key,
      })
    );

    if (!showProjectDetails) {
      columns = columns.filter(
        (column) =>
          column.title !== "ProjectId" && column.title !== "ProjectName"
      );
    }
    setTableColumns(columns);

    properties.forEach((property, index) => {
      data.push({ ...property, id: index });
    });

    setTableData(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchProperties();
  }, []);

  useEffect(() => {
    if (properties.length > 0) tableSetup();
  }, [properties, showProjectDetails]);

  return (
    <PropertiesViewerStyle>
      {!loading && tableData.length > 1 ? (
        <>
          <button
            className="toogle-btn"
            onClick={() => setShowProjectDetails((old) => !old)}
          >
            {showProjectDetails
              ? "Hide Project Details"
              : "Show Project Details"}
          </button>
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
        </>
      ) : (
        !loading && (
          <div className="error">
            <h1>Something Terrible Happened !</h1>
            <h3>Try contacting support team</h3>
          </div>
        )
      )}
    </PropertiesViewerStyle>
  );
}

export default PropertiesViewer;
