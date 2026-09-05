import {useState, useEffect} from 'react'
import Post from './Post'
 const InfiniteScroll = ()=>{
  const [data,setData] = useState([]);
  const [page,setPage] = useState(1)
  const limit = 5;

  useEffect(()=>{
    const fetchData = async()=>{
      const skip= (page-1)*limit;
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const result = await response.json();
      setData((prev)=>{
        const unique = result.products.filter(item=>!prev.some(p=>p.id===item.id))
        return [...prev,...unique]
      })
    }
    fetchData();
  })
  return(
    <>
      <Post data={data} setPage={setPage}/>
    </>
  )
}

export default InfiniteScroll;