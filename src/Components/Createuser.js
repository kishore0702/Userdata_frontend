import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import {store} from '../App';
import {useContext} from 'react';
import {Link} from 'react-router-dom'

const Createuser = () => {
  const URL="http://localhost:8080";
  const data = useContext(store);
  console.log(data);
  const formik=useFormik({
    initialValues:{
      mothername:"",
      fathername:"",
      location:"",
      designation:"",
      city:"",
      age:""
    },
    onSubmit:async (values)=>{
      try{
        await axios.post  (`${URL}/createUser`,values).then((res)=>{
          alert("User created successfully")
        })
        formik.values.mothername=""
        formik.values.fathername=""
        formik.values.location=""
        formik.values.designation=""
        formik.values.city=""
        formik.values.age=""
        }catch(err){
        console.log(err)
      }
    },
    validate:(values) => {
      let errors={}
      if(!values.mothername){
        errors.mothername = "please enter your mothername"
      }
      if(!values.fathername){
        errors.fathername = "please enter your fathername"
      }
      if(!values.location){
        errors.location = "please enter your location"
      }
      if(!values.designation){
        errors.designation = "please enter your designation"
      }
      if(!values.city){
        errors.city = "please enter your city"
      }
      if(!values.age){
        errors.age = "please enter your age"
      }
      return errors;
    }
  });

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className='m-4'>
      <Link to="/users"><button className='btn btn-success'>Users</button></Link>
    </div>
    <div className='container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='create-form '>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'flex-start'}}>
          <label htmlFor='mothername'>Mothername</label>
          <input style={{border:'1px solid black', width:'500px'}} onChange={formik.handleChange} type="text" id='mothername' name="mothername" value={formik.values.mothername} className='form-control' placeholder='Enter Mothername'/>
          {formik.errors.mothername ? <div style={{color:'red'}}>{formik.errors.mothername}</div> :null}
          <label htmlFor='fathername'>Fathername</label>
          <input  style={{border:'1px solid black', width:'500px'}} onChange={formik.handleChange} type="text" id='fathername' name="fathername" value={formik.values.fathername} className='form-control' placeholder='Enter Fathername'/>
          {formik.errors.fathername ? <div style={{color:'red'}}>{formik.errors.fathername}</div> :null}
          <label htmlFor='location'>Location</label>
          <input style={{border:'1px solid black', width:'500px'}} onChange={formik.handleChange} type="text" id='location' name="location" value={formik.values.location} className='form-control' placeholder='Enter Location'/>
          {formik.errors.location ? <div style={{color:'red'}}>{formik.errors.location}</div> :null}        
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'start',alignItems:'flex-start'}}>
          <label htmlFor='designation'>Designation</label>
          <input style={{border:'1px solid black', width:'500px'}} onChange={formik.handleChange} type="text" id='designation' name="designation" value={formik.values.designation} className='form-control' placeholder='Enter Designation'/>
          {formik.errors.designation ? <div style={{color:'red'}}>{formik.errors.designation}</div> :null}
          <label htmlFor='city'>City</label>
          <input style={{border:'1px solid black', width:'500px'}} onChange={formik.handleChange} type="text" id='city' name="city" value={formik.values.city} className='form-control' placeholder='Enter City'/>
          {formik.errors.city ? <div style={{color:'red'}}>{formik.errors.city}</div> :null}
          <label htmlFor='age'>Age</label>
          <input style={{border:'1px solid black', width:'500px'}} onChange={formik.handleChange} type="text" id='age' name="age" value={formik.values.age} className='form-control' placeholder='Enter Age'/>
          {formik.errors.age ? <div style={{color:'red'}}>{formik.errors.age}</div> :null}
        </div>
        </div>
        <div className='text-center m-3' >
          <button type='submit' className='btn btn-danger'>Submit</button>
        </div>
      </form>
    </div>
    </>
    
  )
}

export default Createuser