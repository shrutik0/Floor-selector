import Papa from "papaparse";

// for reading local file
// async function fetchCsv() {
//   const response = await fetch(
//     `${process.env.PUBLIC_URL}/Inventory-Belair.csv`
//   );
//   console.log(response);
//   const reader = response.body.getReader();
//   const result = await reader.read();
//   const decoder = new TextDecoder("utf-8");
//   const csv = decoder.decode(result.value);
//   return csv;
// }

export const getJsonFromCsv = async (onLoad) => {
  Papa.parse(`${process.env.PUBLIC_URL}/Inventory-Belair.csv`, {
    download: true,
    header: true,
    complete: (response) => onLoad(response.data),
  });
};
