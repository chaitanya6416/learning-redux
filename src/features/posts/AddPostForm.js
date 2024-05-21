import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postAdded } from "./postsSlice";


export const AddForm = () => {
    // get users data
    const users = useSelector(state => state.users)

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [authorId, setAuthorId] = useState('')
    
    const dispatch = useDispatch()
    dispatch(fetchPosts)
    const onTitleChange = (e) => setTitle(e.target.value)
    const onContentChange = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setAuthorId(e.target.value)

    const onSavePostClick = () => {
        if(title && content) {
            dispatch(
                postAdded({
                    title, 
                    content,
                    postAuthor
                })
            )

            setTitle('')
            setContent('')
        }
        else {
            alert('title or content is missing')
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>

    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type = "text"
                    id = "postTitle"
                    name = "postTitle"
                    value = {title}
                    onChange={onTitleChange}
                />

                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={authorId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
        
                <label htmlFor="postContent">Post Content:</label>
                <input 
                    type = "text"
                    id = "postContent"
                    name = "postContent"
                    value = {content}
                    onChange = {onContentChange}
                />

                <button type="button" onClick={onSavePostClick}>Save Post</button>
            </form>
        </section>
    )


}