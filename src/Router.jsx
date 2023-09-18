import Generator from "./pages/Generator";
import Decoder from "./pages/Decoder";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generator" element={<Generator />} />
        <Route path="/decoder" element={<Decoder />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
