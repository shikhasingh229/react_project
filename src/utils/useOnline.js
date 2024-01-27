import {useState, useEffect} from 'react'

const useOnline=()=>{
 const [isOnline,setOnline]=useState(true);

useEffect(()=>{
   const handleOnline=()=>{
    setOnline(true);
   }
   const handleOffline=()=>{
    setOnline(false);
   }
    window.addEventListener("offline",handleOffline);
    window.addEventListener("online",handleOnline);

    return()=>{
       window.removeEventListener("online",handleOnline);
       window.removeEventListener('offline',handleOffline);
    }
},[])

 return isOnline;
}

export default useOnline;