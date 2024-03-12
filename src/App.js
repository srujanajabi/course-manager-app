
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCourse from "./AddCourse";

import './App.css';
import List from "./List";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <Link class="navbar-brand" to="#">Course Manager</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  

                  <li class="nav-item">
                    {/* <a class="nav-link" href="#">Add a Course</a> */}
                    <Link class="nav-link active" aria-current="page" to="/add">Add a Course</Link>

                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="#">Courses</a> */}
                    <Link class="nav-link active" aria-current="page" to="/list">Courses</Link>

                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <Routes>
        
        <Route exact path="/add" element={<AddCourse />} />
        <Route exact path="/list" element={<List />} />

      </Routes>

    </Router>
  );
}

export default App;
