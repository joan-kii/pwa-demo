import { useContext, useState } from 'react'

import { Comment } from '../../utils/types'
import { Context } from '../../utils/context'
import CommentForm from '../CommentComponents/CommentForm'
import ManagerApprove from '../UtilsComponents/ManagerApprove'
import InterventionHeader from '../InterventionComponents/InterventionHeader'
import CommentsList from '../LayoutComponents/CommentsList'
import TextParsed from '../UtilsComponents/TextParsed'
import ItemHeader from '../LayoutComponents/ItemHeader'
import GenericButton from '../UtilsComponents/GenericButton'

function CommentItem(comment: Comment) {
  const { activeUser } = useContext(Context)
  const [approved, setApproved] = useState(comment?.managerApprove)

  return (
    <div className="container flex flex-col mx-auto mb-1 py-2 w-11/12">
      <ItemHeader content={comment} />
      <div className="flex flex-col px-2 sm:p-3 w-full border">
        <InterventionHeader {...comment} />
        <div className="sm:m-3 text-slate-800">
          <div className="w-full py-3 sm:px-5 text-justify">
            <TextParsed text={comment.text} />
          </div>
        </div>
        <CommentsList {...comment} />
        <div className="flex justify-around">
          {approved && <ManagerApprove />}
        </div>
        {activeUser.user.rol === 'Manager' && !approved &&
                <div className="mr-6 flex justify-end">
                  <GenericButton text="Aprobar" type="button" handleClick={() => {setApproved(!approved)}}/>
                </div>
              }
              {activeUser.user.rol === 'Manager' && approved &&
                <div className="mr-6 flex justify-end">
                  <GenericButton text="Retirar Aprobación" type="button" handleClick={() => {setApproved(!approved)}}/>
                </div>
              }
        <div className="my-4 divide-y-2">
          <CommentForm />
        </div>
      </div>
    </div>
  )
}

export default CommentItem
