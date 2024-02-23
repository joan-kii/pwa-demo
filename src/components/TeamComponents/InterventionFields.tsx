import InterventionsCreated from './InterventionsCreated'
import InterventionsApproveReceived from './InterventionsApproveReceived'
import InterventionsVotesReceived from './InterventionsVotesReceived'
import InterventionsVotesGiven from './InterventionsVotesGiven'
import { Teammate, Manager } from '../../utils/types'

function InterventionFields({user, userToCompare, isGlobal }:
  {
    user: Teammate | Manager,
    userToCompare: Teammate | Manager | null,
    isGlobal: boolean
  }) {
  return (
    <>
      {userToCompare &&
        <>
          <div className="mx-auto">
            <InterventionsCreated
              user={user}
              userToCompare={userToCompare}
              isGlobal={isGlobal}
            />
          </div>
          <InterventionsApproveReceived
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <InterventionsVotesReceived
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <InterventionsVotesGiven
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
        </>
      }
      {!userToCompare &&
        <>
          <InterventionsCreated
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <InterventionsApproveReceived
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <InterventionsVotesReceived
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <InterventionsVotesGiven
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
        </>
      }
    </>
  )
}

export default InterventionFields
