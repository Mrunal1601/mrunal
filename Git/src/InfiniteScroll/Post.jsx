import {useEffect} from 'react'

const Post = ({data,setPage})=>{
    useEffect(()=>{
      const observer = new IntersectionObserver((param)=>{
        if(param[0].isIntersecting){
          observer.unobserve(param[0].target);
          setPage(prev=>prev+1);
        }
        
      })
      let lastImage = document.querySelector(".image-post:last-child"); 

        if(!lastImage)  return;
        observer.observe(lastImage);
      return()=>{
        if(lastImage){
          observer.unobserve(lastImage)
        }
        observer.disconnect();
      }
      
    },[data,setPage])

  return(
    <>
    <div>
      {data.map((ele)=>(
        <div className="image-post" 
        style={{
          backgroundColor:"grey",
          padding: "5px",
          border: "1px solid black",
          color: "black"
        }} key={ele.id}>
          {ele.title}
        </div>
      ))}
    </div>
    </>
  )
}

export default Post;