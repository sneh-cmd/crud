import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function DeleteData() {
    // destructring 
    const[data,setData]=useState();
    const{id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{

        axios.delete(`http://localhost:5000/details/${id}`).then(()=>{
              // pass a message
              Swal.fire({
                title: "Good job!",
                text: "Your task successfully Deleted!",
                icon: "success"
              });
              navigate('/');
        })
    
    },[])
  return (
    <div>
      
    </div>
  )
}
