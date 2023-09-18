import StyleDecoderBody from "../styles/decoder/DecoderBody.module.css";
import QRCodeDecoder from "../components/QRCodeDecoder";

export default function DecoderBody() {
  return (
    <article className={StyleDecoderBody.article}>
      <section className={StyleDecoderBody.title}>
        <h1>QRCODE</h1>
        <h2>decoder</h2>
      </section>
      <section>
        <QRCodeDecoder />
      </section>
    </article>
  );
}
