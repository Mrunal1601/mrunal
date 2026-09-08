import {useState,useEffect} from 'react'
const useFetch = (url)=>{
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);

//Mrunal12

      const fetchData = async()=>{
        try{
        setLoading(true);
        setError(null)
        const responseData= await fetch(url);

         if(!responseData.ok){
          throw new Error("Error")
        }
        const result = await responseData.json();

       
        setData(result.products);
        }
        catch(err){
          setLoading(false)
          setError(err);
        }
        finally{
          setLoading(false)
        }
      }
    useEffect(()=>{
      fetchData();
    },[url])
  return {data,loading,error,refetch:fetchData}
}

export default useFetch;
