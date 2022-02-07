import fileDownload from "js-file-download";

export const downloadFile = async (data) => {
  const contentDisposition = data.headers.get("Content-Disposition");
  const filename = contentDisposition
    .split(";")[1]
    .split("filename")[1]
    .split("=")[1]
    .trim();

  fileDownload(await data.blob(), filename);
};
