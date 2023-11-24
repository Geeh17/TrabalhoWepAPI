import React from 'react';
import './Global.css'
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}