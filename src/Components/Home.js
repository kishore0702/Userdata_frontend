import React from 'react'
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    
    <div className='container' >
       <div className='navigation-btn' >
         <Link to="/Users"><button className='btn btn-success'>Navigate to Users</button></Link> 
         <Link to="/createUser"><button className='btn btn-success'>CreateUser</button></Link>
      </div>
      <div className='main' style={{fontSize:'30px'}} >
      <h1>
        Welcome to PROJECT-K
      </h1>
      </div>
      <div className='icon'>
      <PeopleRoundedIcon style={{fontSize:'80px'}}/>
      </div>
     
      
    </div>
  )
}

export default Home