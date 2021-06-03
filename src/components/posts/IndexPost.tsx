import React, { Component } from 'react'
import Actions from './posts'
import CreateArticle from './createPost'

export default class Index extends Component {
    render() {
        return (
            <div>
                <CreateArticle />

                <h1>get Posts</h1>
                <Actions />
            </div>
        )
    }
}
