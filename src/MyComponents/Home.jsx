import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

  let [blogs, setBlogs] = useState(false);
  let [error, setError] = useState(false)

  useEffect(() => {

    fetch('http://localhost:700/blogs')

      .then((response) => {

        if (!response.ok){

            throw new Error(`Data is not loaded properly ${response.status}`)
        }

        return response.json()

      })

      .then((data) => {

        setBlogs(data)


      })

      .catch((error) =>{

        setError(error.message)

      })



  }, [])



  return (
    <div className='bg-info'>
      <div className="container">
        <div className="row justify-content-center" style={{minHeight:'100vh'}}>
          {error && <h1 className='text-center'>{error}</h1>}
          {blogs && blogs.map((blog) => (
              <div className="col-md-8">
                <div className="card my-2">
                  <div className="card-header">{blog.title}</div>
                  <h5 className="card-body">{blog.title}</h5>
                  <p className="card-text mx-3">Written by {blog.author}</p>
                  <Link to={`/viewBlog/${blog.id}`} className="btn btn-primary w-25 my-2 mx-auto " >
                  Read more.....
                  </Link> 

                </div>
              </div>



            ))
          }





        </div>
      </div>
    </div>
  )
}
