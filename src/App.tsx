import React from 'react';
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
import './App.css';
import MiddleCard from "./components/Card";
import LogInPage from "./components/Log";

function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<MiddleCard />} />
            <Route path="/profile" element={<LogInPage />} />
        </Routes>
    </Router>
  );
}

export default App;
