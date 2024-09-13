
import './App.css';
import Nav from "./MyComponents/Nav"
import Create from "./MyComponents/Create"
import Home from "./MyComponents/Home"
import { Route, Routes } from 'react-router-dom';
import View from './MyComponents/View';
import Edit from './MyComponents/Edit'



function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='createBlog' element={<Create></Create>} ></Route>
        <Route path='viewBlog/:blogId' element={<View></View>} ></Route>
        <Route path='editBlog/:blogId' element={<Edit></Edit>}></Route>




      </Routes>
      
    </>
  );
}

export default App;
