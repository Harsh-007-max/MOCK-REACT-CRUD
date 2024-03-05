import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import UserPage from './components/User';
import UpdateUser from './components/UpdateUser';
const root = ReactDOM.createRoot(document.getElementById('root'));
const apiURL = "https://65ded7efff5e305f32a09deb.mockapi.io/api/users";

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={<UserPage apiURL={apiURL}/>}/>
          <Route path='update/:id' element={<UpdateUser apiURL={apiURL} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );

