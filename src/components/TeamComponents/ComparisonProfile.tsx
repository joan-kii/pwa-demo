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
      <div className="flex bg-white">
        <div className="sm:w-1/3"></div>
        <UserData user={activeUser} />
        <UserData user={user} />
      </div>
      <div className={`${user ? 'w-full' : ''}`}>
        <FieldHeader text="Intervenciones" isColumn={user ? true : false} />
      </div>
      <InterventionFields user={activeUser} userToCompare={user} isGlobal={isGlobal} />
      <div className={`${user ? 'w-full' : ''}`}>
        <FieldHeader text="Comentarios" isColumn={user ? true : false} />
        </div>
      <CommentFields user={activeUser} userToCompare={user} isGlobal={isGlobal} />
      <div className={`${user ? 'w-full' : ''}`}>
        <FieldHeader text="General" isColumn={user ? true : false} />
      </div>
      <GeneralFields user={activeUser} userToCompare={user} isGlobal={isGlobal} />
    </div>
  )
}

export default ComparisonProfile
