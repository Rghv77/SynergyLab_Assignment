import axios from 'axios';
import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateUser = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState();
    // const [data,setData]=useState([]);
  const [post,setPost]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
    
    const postdata=async ()=>{
        try{
            setLoading(true);
            const response=await axios.post('https://jsonplaceholder.typicode.com/users',{
                name,email,phone
            });
            setPost(true);
            setLoading(false);
            setName("");
            setEmail("");
            setPhone("");
            toast.success("User Created Successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        } catch(error){
            toast.error(`Oops!!! some error occurred`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
           
            setLoading(false)
        }
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        postdata();
    }
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto my-[5rem]">
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        <h1 className='text-4xl text-center mx-auto font-bold my-[2rem]'>Create a new User</h1>
        <form style={{border:"1px solid black ",borderRadius:"10px",padding:"4rem 2rem"}} className='mx-auto'  onSubmit={handlesubmit}>
            <div className='flex flex-col gap-1 items-start mx-auto'>
            <label htmlFor='name' className='text-base font-semibold '>Name</label>  
            <div className='w-[90%] lg:w-[80%] rounded-sm' style={{border:"1px solid black",padding:"0.5rem",borderRadius:"10px"}}>        
            <input id="name" className='outline-none w-[100%]'  type='text' value={name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} required/>  </div>  
            </div>        
            <div className='flex flex-col gap-1 items-start my-4 mx-auto'>
            <label htmlFor='email' className='text-base font-semibold '>Email</label>  
            <div className='w-[90%] lg:w-[80%] rounded-sm' style={{border:"1px solid black",padding:"0.5rem",borderRadius:"10px"}}>        
            <input id="email" className='outline-none w-[100%]'  type='email' value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} required/>  </div>  
            </div>        
            <div className='flex flex-col gap-1 items-start mx-auto'>
            <label htmlFor='phone' className='text-base font-semibold '>Phone</label>  
            <div className='w-[90%] lg:w-[80%] rounded-sm' style={{border:"1px solid black",padding:"0.5rem",borderRadius:"10px"}}>        
            <PhoneInput id="phone" className='outline-none w-[100%]'  type='text' value={phone} placeholder="Enter Phone Number" defaultCountry="US" onChange={setPhone} required/>  </div>  
            </div>  
            <button type="submit" disabled={loading}  className="mt-4 rounded-[24px] py-[0.8rem] px-[2.5rem] w-fit text-white font-semibold my-2 cursor-pointer" style={{backgroundColor:loading?"rgba(112, 101, 240,0.20)":"#7065f0"}}>{loading?"Submitting...":"Submit"}</button>      
        </form>
    </div>
  )
}

export default CreateUser