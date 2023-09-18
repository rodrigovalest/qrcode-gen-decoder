import StyleQRCodeDecoder from "../styles/decoder/QRCodeDecoder.module.css";
import React, { useState } from "react";
import jsQR from 'jsqr';

export default function QRCodeDecoder() {
  const [result, setResult] = useState("");

  const readQRCode = (imageUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);

        const imageData = context.getImageData(0, 0, img.width, img.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          resolve(code.data);
        } else {
          reject(new Error("Unable to read the QR code in the image."));
        }
      };
      img.onerror = () => {
        reject(new Error("Failed to load image."));
      };
      img.src = imageUrl;
    });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    try {
      const qrCodeData = await readQRCode(imageUrl);
      setResult(qrCodeData);
    } catch (error) {
      console.error("Error reading QR code from image: ", error);
      setResult("Error reading QR code from image.");
    }
  };

  console.log(result);

  return (
    <div>
      <label
        htmlFor="fileInput"
        className={StyleQRCodeDecoder.fileInput}
      >
        Select file
      </label>
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleFileInputChange}
      />

      {result === "" ? <p></p> : <p className={StyleQRCodeDecoder.qrValue}>QR Code decoded: {result}</p>}
    </div>
  );
}
