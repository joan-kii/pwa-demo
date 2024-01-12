import { Comment } from '../../utils/types'
import VotesItem from '../UtilsComponents/VotesItem'
import ManagerPraise from '../UtilsComponents/ManagerPraise'

function CommentItem(comment: Comment) {
  return (
    <div className="flex">
      <VotesItem votes={comment.votes} />
      <div>
        <div>
          <p>{comment.author}</p>
          <p>{comment.date}</p>
        </div>
        <p>{comment.text}</p>
        {comment.comments?.map((comment) => {
          return <CommentItem {...comment} key={comment._id} />
        })}
      </div>
      {comment.managerPraise && <ManagerPraise />}
    </div>
  )
}

export default CommentItem
