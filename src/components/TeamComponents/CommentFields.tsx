import FieldItem from './FieldItem'
import { Teammate, Manager } from '../../utils/types'

function CommentFields({ user, isGlobal }: { user: Teammate | Manager, isGlobal: boolean }) {
  console.log(isGlobal);
  console.log(user);
  
  return (
    <>
      <FieldItem text="Comentarions Creados" data={user.companyComments.toString()} />
      <FieldItem text="Aprobaciones Recibidas" data={user.companyCommentsApproveReceived.toString()} />
      <FieldItem text="Votos Recibidos" data={user.companyCommentsVotesReceived.toString()} />
    </>
  )
}

export default CommentFields
