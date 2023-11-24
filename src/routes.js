import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Alunos from './pages/Alunos';
import Login from './pages/Login';
import NovoAluno from './pages/NovoAluno';

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/aluno/novo" element={<NovoAluno />} />
        </Routes>
    );
}
export default Routing;