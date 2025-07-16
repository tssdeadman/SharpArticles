import axios from 'axios'
import { useEffect, useState } from 'react'

function useApi(){
    const [data,setData]= useState([]);

    useEffect(()=>{
        axios.get('/api/v1/sharparticle')
        .then((res)=>{
            setData(res.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return data;
}

export default useApi;