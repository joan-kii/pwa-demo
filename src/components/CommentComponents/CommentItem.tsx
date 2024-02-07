import { Comment } from '../../utils/types'
import VotesItem from '../UtilsComponents/VotesItem'
import CommentForm from '../CommentComponents/CommentForm'
import ManagerApprove from '../UtilsComponents/ManagerApprove'
import InterventionHeader from '../InterventionComponents/InterventionHeader'
import CommentsList from '../LayoutComponents/CommentsList'
import TextParsed from '../UtilsComponents/TextParsed'

function CommentItem(comment: Comment) {
  return (
    <div className="container flex mx-auto mb-5 py-2 w-11/12 border-solid border-2 border-gray">
      <VotesItem votes={comment.votes} />
      <div className="flex flex-col p-3 w-full">
        <InterventionHeader {...comment} />
        <div className="m-3 text-slate-800">
          <div className="w-full py-3 px-5 text-justify">
            <TextParsed text={comment.text} />
          </div>
        </div>
        <CommentsList {...comment} />
        <div className="flex justify-around">
          {comment.managerApprove && <ManagerApprove />}
        </div>
        <div className="my-4 divide-y-2">
          <CommentForm />
        </div>
      </div>
    </div>
  )
}

export default CommentItem
