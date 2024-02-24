import { Teammate, Manager } from '../../utils/types'
import GeneralStartDate from './GeneralStartDate'
import GeneralAntiquity from './GeneralAntiquity'
import GeneralRol from './GeneralRol'

function InterventionFields({ user, userToCompare, isGlobal }:
  {
    user: Teammate | Manager,
    userToCompare: Teammate | Manager | null,
    isGlobal: boolean
  }) {
  return (
    <>
      {userToCompare &&
        <>
          <div className="w-full">
            <GeneralStartDate
              user={user}
              userToCompare={userToCompare}
              isGlobal={isGlobal}
            />
          </div>
          <div className="w-full">
            <GeneralAntiquity
              user={user}
              userToCompare={userToCompare}
              isGlobal={isGlobal}
            />
          </div>
          <div className="w-full">
            <GeneralRol
              user={user}
              userToCompare={userToCompare}
            />
          </div>
        </>
      }
      {!userToCompare &&
        <>
          <GeneralStartDate
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <GeneralAntiquity
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <GeneralRol
            user={user}
            userToCompare={userToCompare}
          />
        </>
      }
    </>
  )
}

export default InterventionFields
