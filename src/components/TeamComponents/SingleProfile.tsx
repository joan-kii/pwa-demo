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
    <div className="flex flex-col bg-white">
      <UserData user={activeUser} />
      <FieldHeader text="Intervenciones" />
      <InterventionFields user={activeUser} userToCompare={null} isGlobal={isGlobal} />
      <FieldHeader text="Comentarios" />
      <CommentFields user={activeUser} userToCompare={null} isGlobal={isGlobal} />
      <FieldHeader text="General" />
      <GeneralFields user={activeUser} userToCompare={null} isGlobal={isGlobal} />
    </div>
  )
}

export default SingleProfile
