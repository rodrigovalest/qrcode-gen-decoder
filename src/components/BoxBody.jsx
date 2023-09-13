import StyleBoxBody from "../styles/box/BoxBody.module.css";
import { QRCodeCanvas } from 'qrcode.react';
import { useState } from "react";

export default function BoxBody() {
  const [formText, setFormText] = useState("");
  const [bgColor, setBgColor] = useState("white");
  const [fgColor, setFgColor] = useState("black");

  const onChangeInput = (event) => setFormText(event.target.value);

  const getQRCode = () => {
    const canvasElement = document.getElementById("qrCodeCanvas");

    if (!canvasElement) {
      console.log("ERROR: canvas element not found");
      return;
    }

    const dataURL = canvasElement.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "qrcode.png";
    
    a.click();
  }

  const onChangeBgColor = (event) => setBgColor(event.target.value);
  const onChangeFgColor = (event) => setFgColor(event.target.value);

  return (
    <article className={StyleBoxBody.article}>
      <section className={StyleBoxBody.title}>
        <h1>QRCODE</h1>
        <h2>generator</h2>
      </section>
      <section className={StyleBoxBody.form}>
        <p>Text or URL to be encoded</p>
        <input
          onChange={onChangeInput}
        />
      </section>
      <section className={StyleBoxBody.qrCodeField}>
        <div className={StyleBoxBody.qrCode}>
          <QRCodeCanvas
            value={formText}
            id="qrCodeCanvas"
            size={225}
            bgColor={bgColor}
            fgColor={fgColor}
          />
        </div>
        <div className={StyleBoxBody.qrCodeOpt}>
          <p>Change background color:</p>
          <input type="color" onChange={onChangeBgColor} className={StyleBoxBody.colorInput} />

          <p>Change foreground color:</p>
          <input type="color" onChange={onChangeFgColor} className={StyleBoxBody.colorInput} />
          
          <button onClick={getQRCode} className={StyleBoxBody.downloadButton}>
            Download QRCode
          </button>
        </div>
      </section>
    </article>
  );
}
