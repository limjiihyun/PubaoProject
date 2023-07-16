import React from 'react'
import RepleUpload from './RepleUpload'
import RepleList from './RepleList'
import { useSelector, UseSelector } from 'react-redux'

export default function RepleArea(props) {
    const user = useSelector((state) => state.user);
  return (
    <div>
        {user.accessToken &&  <RepleUpload postId = {props.postId}/>}
        <RepleList postId = {props.postId}/>
    </div>
  )
}
