import React, { useCallback, useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";

import { Drag, Pro } from "./profileStyle";
import { style, thumpNail } from "../../../helper/dropZone";
import Dragslider from "../../dragslider";

const Profile = () => {
  const [files, setFile] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    setFile(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg",
    multiple: false,
  });

  useEffect(() => {
    files?.forEach((file) => {
      URL.revokeObjectURL(file.preview);
    });
  }, [files]);

  return (
    <Pro>
      <form action="">
        <input type="text" placeholder="Change name" />
        <div className="upload">
          <Drag
            {...getRootProps()}
            style={style(isDragActive, isDragAccept, isDragReject)}
          >
            <input {...getInputProps()} />
            <div className="head">
              <p>Change profile picture</p>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </Drag>
          <Dragslider thumbs={thumpNail(files)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Pro>
  );
};

export default Profile;
