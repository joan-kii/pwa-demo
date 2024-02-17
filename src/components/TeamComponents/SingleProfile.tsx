import { Teammate, Manager } from '../../utils/types'
import FieldHeader from './FieldHeader'
import InterventionFields from './InterventionFields'
import CommentFields from './CommentFields'
import GeneralFields from './GeneralFields'
import UserData from './UserData'

function SingleProfile({ activeUser, isGlobal }:
  {
    activeUser: Teammate | Manager,
    isGlobal: boolean
  }) {

  return (
    <div className="flex flex-col">
      <UserData user={activeUser} />
      <FieldHeader text="Intervenciones" />
      <InterventionFields user={activeUser} userToCompare={null} isGlobal={isGlobal} />
      <FieldHeader text="Comentarios" />
      <CommentFields user={activeUser} isGlobal={isGlobal} />
      <FieldHeader text="General" />
      <GeneralFields user={activeUser} isGlobal={isGlobal} />
    </div>
  )
}

export default SingleProfile
