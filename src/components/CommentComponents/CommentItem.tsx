import { Comment } from '../../utils/types'
import CommentForm from '../CommentComponents/CommentForm'
import ManagerApprove from '../UtilsComponents/ManagerApprove'
import InterventionHeader from '../InterventionComponents/InterventionHeader'
import CommentsList from '../LayoutComponents/CommentsList'
import TextParsed from '../UtilsComponents/TextParsed'
import ItemHeader from '../LayoutComponents/ItemHeader'

function CommentItem(comment: Comment) {
  return (
    <div className="container flex flex-col mx-auto mb-1 py-2 w-11/12">
      <ItemHeader content={comment} />
      <div className="flex flex-col p-3 w-full border">
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
