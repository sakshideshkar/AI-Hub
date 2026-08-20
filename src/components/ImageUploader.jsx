import React, { useState } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

function ImageUploader({ onUpload }) {
  const [image, setImage] = useState(null);

  const handleImage = e => {
    const file = e.target.files[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      onUpload && onUpload(file);
    }
  };

  return (
    <>
      <div className="uploader">
        {!image ? (
          <label>
            <FaCloudUploadAlt />
            <strong>Upload Image</strong>
            <span>PNG, JPG or WEBP</span>
            <input type="file" accept="image/*" onChange={handleImage} />
          </label>
        ) : (
          <div className="preview">
            <img src={image} alt="preview" />
            <button onClick={() => setImage(null)}>
              <FaTimes />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .uploader {
          width: 100%;
          min-height: 180px;
          border: 1.5px dashed rgba(124,92,255,.5);
          border-radius: 18px;
          background: rgba(124,92,255,.05);
          overflow: hidden;
        }

        .uploader label {
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
          cursor: pointer;
          color: white;
        }

        .uploader label svg {
          font-size: 35px;
          color: #7c5cff;
        }

        .uploader label span {
          color: #6f7890;
          font-size: 11px;
        }

        .uploader input {
          display: none;
        }

        .preview {
          position: relative;
          height: 220px;
        }

        .preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .preview button {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 35px;
          height: 35px;
          border: 0;
          border-radius: 50%;
          background: #ff4d6d;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default ImageUploader;