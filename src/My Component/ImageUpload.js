import React, { useState } from "react";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file input change
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Upload and Display Image</h2>

      {/* Image Upload Input */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ marginBottom: "20px" }}
      />

      {/* Display the image if one is uploaded */}
      {selectedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={selectedImage}
            alt="Uploaded"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
