import React from 'react';
import { useState } from 'react';
import  TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import  Alert  from '@mui/material/Alert';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    
    const [email,setEmail] = useState('');
    const [success,setSuccess] =useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email};

        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSuccess(true);
        });

        e.preventDefault()
    }
    return (
        <div>
            <h2 className="text-center">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
              <TextField 
               label="Email"
               type="email"
               sx={{width:'50%'}}
               onBlur={handleOnBlur}
               variant="standard" />
              <Button type="submit" variant="contained">Confirm</Button>
            </form>
            { success && 
              <Alert severity="success"> Admin role successfully done!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;