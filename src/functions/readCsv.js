import Papa from "papaparse";

async function fetchCsv(file) {
  const response = await fetch(file, { mode: "no-cors" });
  console.log(response);
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value);
  return csv;
}

export const getJsonFromCsv = async (file) => {
  const data = Papa.parse(file, {
    download: true,
    header: true,
  });
  console.log(data);
  return data;
};
