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
  )
}

export default InterventionFields
