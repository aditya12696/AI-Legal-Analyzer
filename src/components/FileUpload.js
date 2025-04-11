import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import UploadIcon from "../assets/upload_icon.png";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      console.log("Uploading:", file.name);
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <img src={UploadIcon} alt="upload" width="80" />
      <div style={{ margin: "20px" }}>
        <input
          type="file"
          onChange={handleFileChange}
          style={{ marginBottom: "10px" }}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload Document
        </Button>
      </div>
      {file && (
        <Typography style={{ marginTop: "10px" }}>
          Selected File: {file.name}
        </Typography>
      )}
    </div>
  );
};

export default FileUpload;
