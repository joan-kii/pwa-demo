import { Teammate, Manager } from '../../utils/types'
import FieldItem from './FieldHeader';

function UserCard({ user, isGlobal }: { user: Teammate | Manager, isGlobal: boolean }) {
  console.log(user, isGlobal);
  
  return (
    <div className="w-2/4 flex flex-col">
      <FieldItem text={user.user.totalInterventions.toString()} />
    </div>
  )
}

export default UserCard
