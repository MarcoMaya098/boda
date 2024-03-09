// import { useState } from 'react'
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
// import { Container } from "@mui/material";

// import Login from './components/Login';
import PersonList from '../components/Person/PersonList.js';
import PersonForm from '../components/Person/PersonForm.js';
import Principal from '../components/Principal.html';
// import PersonInfo from './components/Person/PersonInfo.jsx';

// import './App.css'

function App() {

  return (
    <Fragment>
      {/* <Container> */}
      {/* <StepContextProvider> */}
        <Routes>
          {/* <Route index path="/" element={<Login />} /> */}
          <Route index path="/" element={<Principal />} />

          <Route path="/confirmation" element={<PersonList />} />
          <Route path="/confirmation/new" element={<PersonForm />} />
          <Route path="/confirmation/:PRN_ID/edit" element={<PersonForm />} />




         

        </Routes>
        {/* </StepContextProvider> */}
      {/* </Container> */}
    </Fragment>

  );
}

export default App
