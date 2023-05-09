import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./personal-img.css";

const PersonalImage = () => {
  const [file, setFile] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <section className="personal-img">
      <div {...getRootProps()} className="photo-circle">
        <input {...getInputProps()} />
        {file ? (
          <img src={URL.createObjectURL(file)} alt="personal" />
        ) : (
          <p className="placeholder-text">
            Drag 'n' drop an image here, or click to select an image
          </p>
        )}
      </div>
    </section>
  );
};

export default PersonalImage;
