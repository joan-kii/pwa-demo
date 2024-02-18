import { Teammate, Manager } from '../../utils/types'
import FieldHeader from './FieldHeader'
import InterventionFields from './InterventionFields'
import CommentFields from './CommentFields'
import GeneralFields from './GeneralFields'
import UserData from './UserData'

function ComparisonProfile({ activeUser, user, isGlobal }:
  {
    activeUser: Teammate | Manager,
    user: Teammate | Manager,
    isGlobal: boolean
  }) {
  return (
    <div className="flex flex-col">
      <div className="w-full flex bg-white">
        <div className="w-1/3"></div>
        <UserData user={activeUser} />
        <UserData user={user} />
      </div>
      <FieldHeader text="Intervenciones" />
      <InterventionFields user={activeUser} userToCompare={user} isGlobal={isGlobal} />
      <FieldHeader text="Comentarios" />
      <CommentFields user={activeUser} userToCompare={user} isGlobal={isGlobal} />
      <FieldHeader text="General" />
      <GeneralFields user={activeUser} userToCompare={user} isGlobal={isGlobal} />
    </div>
  )
}

export default ComparisonProfile
