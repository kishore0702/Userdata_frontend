import React, { useEffect ,useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Users = ({formik}) => {
  const URL="http://localhost:8080"
  const [timer,setTimer] =useState(0);
  const [userData,setUserData] = useState([]);
  const getUsers=()=>{
    axios.get(`${URL}/users`).then((res)=>{
      setUserData(res.data);
      
    })
  }
  useEffect(()=>{
    getUsers();
  },[timer]);

  const handleEdit = (id)=>{
    axios.get(`${URL}/user/${id}`).then((res)=>{
      formik.setValues(res.data);
    })
  };

  const handleDelete = (id)=>{
    axios.delete(`${URL}/deleteUser/${id}`).then((res)=>{
      alert("User deleted successfully");
      setTimer(timer+1);
    })
  };
  return (
    <>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} className=' mt-4 container'>
    <Link to="/createUser"><button className='btn btn-primary'>CreateUser</button></Link>
    <Link to="/"><button className='btn btn-primary'>Navigate to Home</button></Link>
    </div>
    
<div className='container mt-4'>
  <table className='table table-bordered table-striped table-hover '>
    <thead className='bg-success text-light'>
      <tr>
        <th>S.No</th>
        <th>Mothername</th>
        <th>Fathername</th>
        <th>Location</th>
        <th>Designation</th>
        <th>City</th>
        <th>Age</th>
        <th>Modfication</th>
      </tr>
    </thead>
    <tbody>
      {
        userData.map((item,index)=>{
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.mothername}</td>
              <td>{item.fathername}</td>
              <td>{item.designation}</td>
              <td>{item.location}</td>
              <td>{item.city}</td>
              <td>{item.age}</td>
              <td>
               <Link to="/editUser"><button onClick={()=>handleEdit(item._id)} className='btn btn-success'>Edit</button></Link> 
                <button onClick={()=>handleDelete(item._id)} className='btn btn-danger m-1'>Delete</button>
              </td>
            </tr>
          )
        })
      }
      
    </tbody>
  </table>
</div>
    </>
    
  )
}

export default Users