import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'

export default function Create() {

  const[title,setTitle] = useState("")
  const[author,setAuthor] = useState("")
  const[description,setDescription] = useState("")

  
  
  let navigate = useNavigate()
  
  
  const postBlog = async(e)=>{
    
    e.preventDefault()
    
    
    let data = {title,author,description}
    


    await fetch('http://localhost:700/blogs',{

      method: "POST",
      headers:{"content-type":"application/json"},
      body: JSON.stringify(data)
    })

    navigate('/')
  
  
  }

  return (
       
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-primary text-center">Write Your Own Blog</div>
                <div className="card-body bg-info">
                  <form onSubmit={(e)=>{postBlog(e)}}>
                    <input type="text" className='form-control my-4' placeholder='Title of blog' onChange={(e)=>{setTitle(e.target.value)}} />
                    <input type="text" className='form-control my-4' placeholder='Author of blog' onChange={(e)=>{setAuthor(e.target.value)}} />
                    <textarea name="" id="" cols={30} rows={15} className='form-control my-4' placeholder='Description of the blog' onChange={(e)=>{setDescription(e.target.value)}} ></textarea>
                    <input type="submit" className='form-control my-4 btn btn-success' value={"Create blog"} />
                  </form>
                </div>
            </div>
          </div>
        </div>   
      </div>

  )
}
