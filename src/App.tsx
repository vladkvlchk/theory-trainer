import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topic from "@/pages/Topic";
import Home from "@/pages/Home";
import Header from "@/components/Header";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topic-name" element={<Topic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
