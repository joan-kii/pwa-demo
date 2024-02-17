import { Teammate, Manager } from '../../utils/types'


function InterventionsVotesReceived({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
  let userCompanyIsBest = true
  let userTotalIsBest = true

  if (userToCompare) {
    userCompanyIsBest = user.companyCommentsVotesReceived >= userToCompare.companyCommentsVotesReceived
    userTotalIsBest = user.user.totalCommentVotesReceived >= userToCompare.user.totalCommentVotesReceived
  }
  
  return (
    <div className="bg-white dark:bg-slate-900 px-6 flex max-md:hidden" aria-hidden="true">
      <div className="w-full flex justify-between py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
        <p className="w-1/3">Votos Recibidos</p>
        {!userToCompare && isGlobal &&
          <p className="w-1/3 text-end font-bold">
            {user.user.totalCommentVotesReceived}
          </p>
        }
        {!userToCompare && !isGlobal &&
          <p className="w-1/3 text-end font-bold">
            {user.companyCommentsVotesReceived}
          </p>
        }
        {userToCompare && isGlobal &&
          <>
            <p className={`w-1/3 text-end ${userTotalIsBest ? "font-bold" : "font-light"}`}>
              {user.user.totalCommentVotesReceived}
            </p>
            <p className={`w-1/3 text-end ${!userTotalIsBest ? "font-bold" : "font-light"}`}>
              {userToCompare.user.totalCommentVotesReceived}
            </p>
          </>
        }
        {userToCompare && !isGlobal &&
          <>
            <p className={`w-1/3 text-end ${userCompanyIsBest ? "font-bold" : "font-light"}`}>
              {user.companyCommentsVotesReceived}
            </p>
            <p className={`w-1/3 text-end ${!userCompanyIsBest ? "font-bold" : "font-light"}`}>
              {userToCompare.companyCommentsVotesReceived}
            </p>
          </>
        }
      </div>
    </div>
  )
}

export default InterventionsVotesReceived
