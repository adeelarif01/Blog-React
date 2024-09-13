import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function View() {


  let { blogId } = useParams()
  let navigate = useNavigate()




  const [blog, setBlog] = useState(false);


  useEffect(() => {

    fetch(`http://localhost:700/blogs/${blogId}`)

      .then((response) => {
        console.log(response.status);

        return response.json()
      })

      .then((data) => {

        setBlog(data)

      })

      .catch(() => {
      })

  }, []);

  const deleteBlog = async () => {

    await fetch(`http://localhost:700/blogs/${blogId}`, {

      method: "Delete"

    })

    navigate('/')


  }





  return (

    <div className="container">
      <div className="row justify-content-center align-content-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-8">
          <div className="card p-2">
            <div className="card-header bg-info">
              <h1>{blog.title}</h1>
            </div>
            <div className="card-body bg-dark text-light p-5">{blog.description}
            </div>
            <div>
              <div className="crad-footer bg-info p-2">
                <h5>written by {blog.author}</h5>
                <button className='btn btn-danger w-100 my-2' onClick={() => { deleteBlog() }} >Delete Blog</button>
                <Link to={`/editBlog/${blogId}`} className="btn btn-primary w-100 my-2" >Edit Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}
