import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Edit() {

  
  let { blogId } = useParams()
  let [getBlog, setgetBlog] = useState("")

  let Navigate = useNavigate()
  
  
  useEffect(()=>{
    

      fetch(`http://localhost:700/blogs/${blogId}`)

      .then((response)=>{
        return response.json()

      })

      .then((data)=>{ 
       setgetBlog(data)  

      })
    

      .catch((error)=>{

      })      
    },[])

    const updateBlog = function(e){

      e.preventDefault()
      
      fetch(`http://localhost:700/blogs/${blogId}`,{

        method:"PATCH",
        header: {"content-type":"application/json"},
        body: JSON.stringify(getBlog)
      })

      Navigate('/')

    }

  return (
    <>
   
    <div className="container">
      <div className="row justify-content-center align-content-center" style={{"minHeight":"100vh"}} >
        <div className="col-8">
          <div className="card">
            <div className="card-header text-center bg-info">Update Your Blog</div>
            <form onSubmit={(e)=>{updateBlog(e)}}  >
              <input type="text" className='form-control my-3' defaultValue={getBlog.title} onChange={(e)=>{{setgetBlog({...getBlog,title:e.target.value})}}} />
              <input type="text" className='form-control my-3' defaultValue={getBlog.author} onChange={(e)=>{{setgetBlog({...getBlog,author:e.target.value})}}} />
              <textarea name="" id="" rows={15}className='form-control my-3 ' defaultValue={getBlog.description}  onChange={(e)=>{{setgetBlog({...getBlog,description:e.target.value})}}} ></textarea>
              <input type="submit" className='form-control btn btn-info' value={'Update'}/>
            </form>
          </div>          
        </div>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
