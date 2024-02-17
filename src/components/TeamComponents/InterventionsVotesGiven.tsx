import { Teammate, Manager } from '../../utils/types'


function InterventionsVotesGiven({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
  let userCompanyIsBest = true
  let userTotalIsBest = true

  if (userToCompare) {
    userCompanyIsBest = user.companyCommentsVotesGiven >= userToCompare.companyCommentsVotesGiven
    userTotalIsBest = user.user.totalCommentVotesGiven >= userToCompare.user.totalCommentVotesGiven
  }
  
  return (
    <div className="bg-white dark:bg-slate-900 px-6 flex max-md:hidden" aria-hidden="true">
      <div className="w-full flex justify-between py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
        <p className="w-1/3">Votos Otorgados</p>
        {!userToCompare && isGlobal &&
          <p className="w-1/3 text-end font-bold">
            {user.user.totalCommentVotesGiven}
          </p>
        }
        {!userToCompare && !isGlobal &&
          <p className="w-1/3 text-end font-bold">
            {user.companyCommentsVotesGiven}
          </p>
        }
        {userToCompare && isGlobal &&
          <>
            <p className={`w-1/3 text-end ${userTotalIsBest ? "font-bold" : "font-light"}`}>
              {user.user.totalCommentVotesGiven}
            </p>
            <p className={`w-1/3 text-end ${!userTotalIsBest ? "font-bold" : "font-light"}`}>
              {userToCompare.user.totalCommentVotesGiven}
            </p>
          </>
        }
        {userToCompare && !isGlobal &&
          <>
            <p className={`w-1/3 text-end ${userCompanyIsBest ? "font-bold" : "font-light"}`}>
              {user.companyCommentsVotesGiven}
            </p>
            <p className={`w-1/3 text-end ${!userCompanyIsBest ? "font-bold" : "font-light"}`}>
              {userToCompare.companyCommentsVotesGiven}
            </p>
          </>
        }
      </div>
    </div>
  )
}

export default InterventionsVotesGiven