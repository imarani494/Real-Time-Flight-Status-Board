
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import Detail from './components/Detail';

import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/flights/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
