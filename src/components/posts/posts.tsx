import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './post.css'


export default function Actions() {

    const [data, setData] = useState<any[]>([]);


    const getposts = async () => {
        try {

            const res = await axios.get('https://60b8ad21b54b0a0017c042f7.mockapi.io/api/v1/posts', { withCredentials: false })
            setData(res.data)
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }

    };
    const deleteposts = async (id: string) => {
        try {
            await axios.delete(`https://60b8ad21b54b0a0017c042f7.mockapi.io/api/v1/posts/${id}`, { withCredentials: false })
            getposts()
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getposts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <div className="postDiv">
                {data.map((item) => (
                    <form key={item.id} className="form">
                        <Link to={`/edit/${item.id}`}><h1 >{item.title}</h1></Link>
                        <div className="btnDiv">
                            <Link to={`/edit/${item.id}`}>
                                <button className="btn" style={{ color: "black" }} >update</button>
                            </Link>
                            <button className="btn" style={{ color: "red" }} onClick={() => { deleteposts(item.id) }}>delete</button>
                        </div>

                    </form>

                ))}

            </div>

            <div>

            </div>
        </div>


    )
}
