import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react'
import HomeScreen from "./screens/home/Home";
import ItemList from "./screens/list/ItemList";
import EditScreen from "./screens/edit/Edit";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ='/' element ={ <HomeScreen />} />
          <Route path ='/in-stock' element ={ <ItemList status="InStock"/>} />
          <Route path ='/shipped' element ={ <ItemList status="Shipped"/>} />
          <Route path ='/delivered' element ={ <ItemList status="Delivered"/>} />
            <Route path ='/edit' element ={ <EditScreen status="Delivered"/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
