import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import CadastroFornecedor from "./components/CadastroFornecedor";
import CadastroVendedores from "./components/CadastroVendedores";
import CadastroVendas from "./components/CadastroVendas";
import CadastroCidade from "./components/CadastroCidade";
import CadastroCategoria from "./components/CadastroCategoria";
import CadastroProduto from "./components/CadastroProduto";
import CadastroTelefone from "./components/CadastroTelefone";
import CadastroContasReceber from "./components/CadastroContasReceber";
import CadastroMovimentacaoEstoque from "./components/CadastroMovimentacaoEstoque";
import Relatorios from "./components/Relatorios";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/CadastroFornecedor" element={<CadastroFornecedor />} />
      </Routes>
      <Routes>
        <Route path="/CadastroVendedores" element={<CadastroVendedores />} />
      </Routes>
      <Routes>
        <Route path="/CadastroVendas" element={<CadastroVendas />} />
      </Routes>
      <Routes>
        <Route path="/CadastroCidade" element={<CadastroCidade />} />
      </Routes>
      <Routes>
        <Route path="/CadastroCategoria" element={<CadastroCategoria />} />
      </Routes>
      <Routes>
        <Route path="/CadastroProduto" element={<CadastroProduto />} />
      </Routes>
      <Routes>
        <Route path="/CadastroTelefone" element={<CadastroTelefone />} />
      </Routes>
      <Routes>
        <Route path="/CadastroContasReceber" element={<CadastroContasReceber />} />
      </Routes>
      <Routes>
        <Route path="/CadastroMovimentacaoEstoque" element={<CadastroMovimentacaoEstoque />} />
      </Routes>
      <Routes>
        <Route path="/Relatorios" element={<Relatorios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
