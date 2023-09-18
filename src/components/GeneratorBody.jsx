import StyleGeneratorBody from "../styles/generator/GeneratorBody.module.css";
import { QRCodeCanvas } from 'qrcode.react';
import { useState } from "react";

export default function GeneratorBody() {
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
    <article className={StyleGeneratorBody.article}>
      <section className={StyleGeneratorBody.title}>
        <h1>QRCODE</h1>
        <h2>generator</h2>
      </section>
      <section className={StyleGeneratorBody.form}>
        <p>Text or URL to be encoded</p>
        <input
          onChange={onChangeInput}
        />
      </section>
      <section className={StyleGeneratorBody.qrCodeField}>
        <div className={StyleGeneratorBody.qrCode}>
          <QRCodeCanvas
            value={formText}
            id="qrCodeCanvas"
            size={225}
            bgColor={bgColor}
            fgColor={fgColor}
          />
        </div>
        <div className={StyleGeneratorBody.qrCodeOpt}>
          <p>Change background color:</p>
          <input type="color" onChange={onChangeBgColor} className={StyleGeneratorBody.colorInput} />

          <p>Change foreground color:</p>
          <input type="color" onChange={onChangeFgColor} className={StyleGeneratorBody.colorInput} />
          
          <button onClick={getQRCode} className={StyleGeneratorBody.downloadButton}>
            Download QRCode
          </button>
        </div>
      </section>
    </article>
  );
}
