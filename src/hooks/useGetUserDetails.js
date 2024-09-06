import React, { useEffect, useState } from 'react'
import axios from "axios"

const useGetUserDetails = (url) => {
  const [data,setData]=useState([]);
  const [fetched,setFetched]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);


  const fetchdata= async ()=>{
    try{
        setLoading(true);
        const response= await axios.get(url);
        setData(response.data);
        setLoading(false);
        setFetched(true);
    } catch(error){
        setError(error);
    }
  }

  useEffect(()=>{
    fetchdata();
  },[])

  return {loading,fetched,error,data}
}

export default useGetUserDetails