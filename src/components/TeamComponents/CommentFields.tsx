import CommentsCreated from './CommentsCreated'
import CommentsApproveReceived from './CommentsApproveReceived'
import CommentsVoteReceived from './CommentsVoteReceived'
import CommentsVoteGiven from './CommentsVoteGiven'
import { Teammate, Manager } from '../../utils/types'

function CommentFields({ user, userToCompare, isGlobal }:
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
            <CommentsCreated
              user={user}
              userToCompare={userToCompare}
              isGlobal={isGlobal}
            />
          </div>
          <div className="w-full">
            <CommentsApproveReceived
              user={user}
              userToCompare={userToCompare}
              isGlobal={isGlobal}
            />
          </div>
          <div className="w-full">
            <CommentsVoteReceived
              user={user}
              userToCompare={userToCompare}
              isGlobal={isGlobal}
            />
          </div>
          <div className="w-full">
            <CommentsVoteGiven
              user={user}
              userToCompare={userToCompare}
              isGlobal={isGlobal}
          />
          </div>
        </>
      }
      {!userToCompare &&
        <>
          <CommentsCreated
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <CommentsApproveReceived
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <CommentsVoteReceived
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
          <CommentsVoteGiven
            user={user}
            userToCompare={userToCompare}
            isGlobal={isGlobal}
          />
        </>
      }
    </>
  )
}

export default CommentFields
