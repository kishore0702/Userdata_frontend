import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Createuser from './Components/Createuser';
import Users from './Components/Users';
import Edituser from './Components/Edituser';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {useFormik} from 'formik';
import {createContext} from 'react'
import {useState} from 'react';
export const store=createContext();

const App=()=>{
  
  const formik=useFormik({
    initialValues:{
      mothername:"",
      fathername:"",
      location:"",
      designation:"",
      city:"",
      age:""
    }
  })
  const [data,setData]=useState(formik.values)
return(
  <store.Provider value={data}>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Createuser" element={<Createuser formik={formik} />}/>
    <Route path="/Users"element={<Users formik={formik}/>} />
    <Route path="/EditUser" element={<Edituser formik={formik}/>}/>
  </Routes>
  </BrowserRouter>
  </store.Provider>
)
}
export default App;
