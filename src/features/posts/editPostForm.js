import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { postUpdated } from "./postsSlice"

export const EditPostForm = ({ match }) => {

    // got the postId from the url
    const { postId } = match.params
    
    // get post from the store
    const post = useSelector(state => state.posts.find(post => post.id === postId))

    // set postTitle, postContent using useState()
    const [postTitle, setPostTitle] = useState(post.title)
    const [postContent, setPostContent] = useState(post.content)

    const updateTitle = (e) => {setPostTitle(e.target.value)}
    const updateContent = (e) => {setPostContent(e.target.value)}

    const dispatch = useDispatch()
    const history = useHistory()
    const saveNewPostDetails = () => {
        dispatch(postUpdated({id:postId, title:postTitle, content:postContent}))
        history.push(`/posts/${postId}`)
    }

    return (
        <section>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type = "text"
                    id = "postTitle"
                    name = "postTitle"
                    placeholder = "whats on ur mind?"
                    value = {postTitle}
                    onChange={updateTitle}
                />
            </form>

            <form>
                <label htmlFor="postContent">Post Content:</label>
                <input 
                    type = "text"
                    id = "postContent"
                    name = "postContent"
                    value = {postContent}
                    onChange={updateContent}
                />
            </form>

            <button type="button" onClick={saveNewPostDetails}>save new post</button>
        </section>

    )

}