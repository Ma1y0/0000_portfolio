import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import "./index.css";
import Ariadnet from "./pages/posts/Ariadnet";
import NavBar from "./NavBar";
import Neovim from "./pages/posts/Neovim";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/posts/ariadnet" element={<Ariadnet />} />
        <Route path="/posts/neovim" element={<Neovim />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
