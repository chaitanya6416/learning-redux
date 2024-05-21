import React from 'react'
import { useSelector } from 'react-redux'

export const PostAuthor = ({ authorId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === authorId)
  )

  return <span>by {author ? author.name : 'Unknown author'}</span>
}