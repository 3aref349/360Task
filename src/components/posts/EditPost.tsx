import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function Edit() {

    const params = useParams<any>();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any[]>([]);

    const [Title, setTitle] = useState("");
    const [newcomment, SetNewComment] = useState("");
    const [article, setArticle] = useState("");
    const [comment, setComment] = useState<any[]>([]);


    const getPost = async () => {
        const res = await axios.get(`https://60b8ad21b54b0a0017c042f7.mockapi.io/api/v1/posts/${params.id}`)
        console.log(res.data)

        setTitle(res.data.title)
        setComment(res.data.comments)
        console.log("comment")

        console.log(res.data.comments)
        setLoading(false)
    }

    const submitcomment = (e: any) => {
        e.preventDefault()
        
        axios.post('https://60b8ad21b54b0a0017c042f7.mockapi.io/api/v1/posts', {
            
           comment: comment
        }, {
    
          withCredentials: false,
        }
        )
          .then(function (response) {
            console.log(response);
     
          })
      }

    const update = (e: any) => {
        e.preventDefault()
        console.log(article, Title);
        axios.put(`https://60b8ad21b54b0a0017c042f7.mockapi.io/api/v1/posts/${params.id}`, {
            article: article,
            title: Title

        }, {

            withCredentials: false,
        }
        )
            .then(function (response) {

                console.log(response);

            })
    }

    useEffect(() => {
        getPost();

    }, []);

    return (
        <div>
            {loading ? <p>Loading</p> :



                <form onSubmit={(e) => update(e)}>
                    <div>
                        <h1>{Title} </h1>
                        <input value={Title} placeholder="Post" onChange={(e) => setTitle(e.target.value)} />

<input type="submit" value="Update" />



                        {comment.map((item) => (
                            <div key={item.id}>
                                <h4>{item.comment}</h4>

                            </div>

                        ))}
           

                    </div>
        
                </form>


            }
        </div>
    )
}
