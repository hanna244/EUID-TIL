import React from 'react'
import Avatar from './Avatar'
import { CommentContent } from './CommentContent'
import RatingStars from './RatingStars'
import ReplyComment from './ReplyComment'

const DeliveryComment = (props) => {
  return (
    <div className="delivery-comment">
      <div className="commentary">
        <Avatar user={props.user} />
        <RatingStars rating={props.rating} />
        <strong className="user-name">{props.user.name}</strong>
        <time className="comment-date">{props.user.createdAt}</time>
        <CommentContent user={props.user} />
        <ReplyComment />
      </div>
    </div>
  )
}

export default DeliveryComment
