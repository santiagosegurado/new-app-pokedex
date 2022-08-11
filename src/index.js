import React from 'react';
import ReactDOM from 'react-dom/client';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import './index.css'
import { PokemonScreen } from './components/PokemonScreen';

const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log('Hola');
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="pokemon/:id" element={<PokemonScreen />}/>
        </Routes>
    </BrowserRouter>
);

