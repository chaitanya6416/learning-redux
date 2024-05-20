import React, {useState} from "react";

export const AddForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = (e) => setTitle(e.target.value)
    const onContentChange = (e) => setContent(e.target.value)

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
        
                <label htmlFor="postContent">Post Content:</label>
                <input 
                    type = "text"
                    id = "postContent"
                    name = "postContent"
                    value = {content}
                    onChange = {onContentChange}
                />

                <button type="button">Save Post</button>
            </form>
        </section>
    )


}