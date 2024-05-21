import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostAuthor } from "./postAuthor";
import { selectAllPosts } from "./postsSlice";

export const PostsList = () => {

    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map((post, index) => {       
            return ( 
            <article className="post-excerpt" key={post.id}>
                <h3>{post.title}</h3>
                <PostAuthor authorId={post.authorId}/>
                <p className="post-content">{post.content?.substring(0,100)}</p>
                <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
            </article> )
            
    }
    )

    return(
        <section className="posts-list">
            <h3>Posts</h3>
            {renderedPosts}
        </section>
    )


}
