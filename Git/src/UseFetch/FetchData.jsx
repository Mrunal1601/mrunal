import {useState} from 'react'
import useFetch from './useFetch';


const FetchData = ()=>{
     const[input,setInput] = useState("");
    const {
      data,
      loading,
      error,
      refetch
    } = useFetch("https://dummyjson.com/products");

    if(loading) return <h2>Loading.....</h2>
    if(error) return <h2>Error </h2>
    let filteredData = [];

    if(input.trim()!==""){
      filteredData=data.filter((ele)=>(
      ele.title.toLowerCase().includes(input.toLowerCase())
    ))
    }
    return(
      <>
      <button onClick={refetch}>Refetch</button>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <ul>
        {filteredData.map((ele)=>(
          <li key={ele.id}>{ele.title}</li>
        ))
        }
      </ul>
      </>
    )

}

export default FetchData;