import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {store} from '../App';
import {useContext} from 'react';
import {Link} from 'react-router-dom'

const Edituser = ({formik}) => {
  const URL="http://localhost:8080";
  const data = useContext(store);
  console.log(data);

  const updateFunction=()=>{
    try{
      axios.put(`${URL}/updateUser/${formik.values._id}`,formik.values).then((res)=>{
        alert("user updated successfully")
      })
    }catch(err){
      console.log(err); 
    }
    
  }
  const handleUpdate=()=>{
    updateFunction();
    formik.values.mothername=""
    formik.values.fathername=""
    formik.values.location=""
    formik.values.designation=""
    formik.values.city=""
    formik.values.age=""

  }

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className='m-4'>
      <Link to="/users"><button className='btn btn-success'>Users</button></Link>
    </div>
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'flex-start'}}>
          <label htmlFor='mothername'>Mothername</label>
          <input style={{border:'1px solid black'}} onChange={formik.handleChange} type="text" id='mothername' name="mothername" value={formik.values.mothername} className='form-control' placeholder='Enter Mothername'/>
          <label htmlFor='fathername'>Fathername</label>
          <input  style={{border:'1px solid black'}} onChange={formik.handleChange} type="text" id='fathername' name="fathername" value={formik.values.fathername} className='form-control' placeholder='Enter Fathername'/>
          <label htmlFor='location'>Location</label>
          <input style={{border:'1px solid black'}} onChange={formik.handleChange} type="text" id='location' name="location" value={formik.values.location} className='form-control' placeholder='Enter Location'/>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'flex-start'}}>
          <label htmlFor='designation'>Designation</label>
          <input style={{border:'1px solid black'}} onChange={formik.handleChange} type="text" id='designation' name="designation" value={formik.values.designation} className='form-control' placeholder='Enter Designation'/>
          <label htmlFor='city'>City</label>
          <input style={{border:'1px solid black'}} onChange={formik.handleChange} type="text" id='city' name="city" value={formik.values.city} className='form-control' placeholder='Enter City'/>
          <label htmlFor='age'>Age</label>
          <input style={{border:'1px solid black'}} onChange={formik.handleChange} type="text" id='age' name="age" value={formik.values.age} className='form-control' placeholder='Enter Age'/>
        </div>
        <div className='text-center m-3' >
          <button onClick={handleUpdate} type='submit' className='btn btn-success'>Update</button>
        </div>
      </form>
    </div>
    </>
    
  )
}

export default Edituser