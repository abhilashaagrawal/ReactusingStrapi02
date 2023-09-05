import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './pages/Notfound';
import routes from './routes/Routes';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {
            routes.map((cv,index,arr)=>{
              return <Route path={cv.path} element={cv.element}></Route>
            })
          }
        </Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
