import FieldItem from './FieldItem'
import { Teammate, Manager } from '../../utils/types'

function CommentFields({ user, isGlobal }: { user: Teammate | Manager, isGlobal: boolean }) {
  return (
    <>
      <FieldItem
        text="Comentarions Creados"
        isHighlighted
        data={isGlobal ?
          user.user.totalComments.toString() :
          user.companyComments.toString()
        }
      />
      <FieldItem
        text="Aprobaciones Recibidas"
        isHighlighted
        data={isGlobal ?
          user.user.totalCommentApproveReceived.toString() :
          user.companyCommentsApproveReceived.toString()
        }
      />
      <FieldItem
        text="Votos Recibidos"
        isHighlighted
        data={isGlobal ?
          user.user.totalCommentVotesReceived.toString() :
          user.companyCommentsVotesReceived.toString()
        }
      />
      <FieldItem
        text="Votos Otorgados"
        isHighlighted
        data={isGlobal ?
          user.user.totalCommentVotesGiven.toString() :
          user.companyCommentsVotesGiven.toString()
        }
      />
    </>
  )
}

export default CommentFields
