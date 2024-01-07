import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route , useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import Admin from "./components/admin/Admin";
import Main from "./components/admin/Main";
import SchoolMain from "./components/admin/schoolDtail/SchoolMain";

function App() {
  const [schoolInfo, setSchoolInfo] = useState([]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              <>
                <Admin />
              </>
            }
          />
          <Route
            path="/admin/main"
            element={
              <>
                <Main schoolInfo={schoolInfo}/>
              </>
            }
          />
          <Route
            path="/admin/:school_code"
            element={
              <>
                <SchoolMain />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
