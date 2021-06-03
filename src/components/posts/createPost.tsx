
import React, { useState } from 'react'
import axios from 'axios';





export default function CreateArticle() {
    const [article, setArticle] = useState("")
    const [title, setTitle] = useState("")
    const [data, setData] = useState<any[]>([]);
 

    const getposts = async () => {
      try {
  
        const res = await axios.get('https://60b8ad21b54b0a0017c042f7.mockapi.io/api/v1/posts', { withCredentials: false })
        setData(res.data)
        console.log(res.data)
        getposts();
  
      } catch (error) {
        console.log(error)
      }
  
    };

    const submit = (e: any) => {
        e.preventDefault()
        console.log(article, title);
        axios.post('https://60b8ad21b54b0a0017c042f7.mockapi.io/api/v1/posts', {
            
           title: title
        }, {
    
          withCredentials: false,
        }
        )
          .then(function (response) {
            console.log(response);
     
          })
      }
    return (
        <div>
          <h1>Create Post  page</h1>
          <form onSubmit={(e) => submit(e)}>
          <input value={title} placeholder="Enter a new Post" onChange={(e) => setTitle(e.target.value)} />
          {/* <input value={article} placeholder="article" onChange={(e) => setArticle(e.target.value)} /> */}
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    
}
