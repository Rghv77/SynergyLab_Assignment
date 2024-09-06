import React, { useState , CSSProperties} from 'react'
import useGetUserDetails from '../hooks/useGetUserDetails'
import { Link } from 'react-router-dom';
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";



const Home = () => {
    const {loading,fetched,error,data}=useGetUserDetails("https://jsonplaceholder.typicode.com/users");
    console.log("userdetails->",data)
    const head=["S.NO.","Name","Email","Phone","Actions"]

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    const handleDelete=async (id)=>{
        try{
          
            const response=await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            
            toast.success("user Deleted Successfully", {
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
           
           
        }
    }
  return (

    <div className="w-[95%] lg:w-[80%] mx-auto my-[5rem]">
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
      
        <h1 className='text-4xl text-center mx-auto font-bold my-[2rem]'>All Users</h1>
       <div className='w-fit'><Link to="/create/user" className='w-fit'>
        <div className="rounded-[24px] py-[0.8rem] px-[2.5rem] w-fit text-white font-semibold my-2 cursor-pointer" style={{backgroundColor:"#7065f0"}}>Create User</div></Link></div> 
        <div className="grid grid-cols-5">
        { head?.map((heading,index)=>{
                return <div key={index} >
                    <p className="text-center  py-4 font-semibold text-sm lg:text-xl" style={{ backgroundColor:index%2===0?"rgba(112, 101, 240,0.20)":"#F1F2F2" }}>{heading}</p>
                </div>
            })}
            </div>
        
        {
            
            data?.map((user,index)=>{
                return <div key={user.id} className="grid grid-cols-3 lg:grid-cols-5">
                   <p className="text-center  py-4 font-medium text-sm lg:text-lg" style={{ backgroundColor:"rgba(112, 101, 240,0.20)" }}>{index+1}</p>
                    <p className="text-center font-medium  py-4 text-[10px] lg:text-base" style={{ backgroundColor:"#F1F2F2" }}>{user.name}</p>
                    <p className="text-center font-medium  py-4 text-[10px] lg:text-base" style={{ backgroundColor:"rgba(112, 101, 240,0.20)",whiteSpace:"wrap"}}>{user.email}</p>
                    <div className="lg:hidden"></div>
                    <p className="text-center font-medium  py-4 text-xs lg:text-base" style={{ backgroundColor:"#F1F2F2" }}>{user.phone}</p>
                    <p className="text-center  py-4 flex flex-col lg:flex-row items-center justify-center w-full gap-2 lg:gap-4" style={{ backgroundColor:"rgba(112, 101, 240,0.20)" }}>
                    <Link to={`/update/user/${user.id}`}> <MdOutlineEdit /> </Link> - <span className="cursor-pointer" onClick={()=>handleDelete(user.id)}><RiDeleteBin6Fill /></span>

                    </p>
                </div>
            })
        }
        <ClipLoader
        color={`red`}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Home