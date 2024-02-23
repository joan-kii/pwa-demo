import { Teammate, Manager } from '../../utils/types'

function CommentsCreated({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
    let userCompanyIsBest = true
    let userTotalIsBest = true
  
    if (userToCompare) {
      userCompanyIsBest = user.companyComments > userToCompare.companyComments
      userTotalIsBest = user.user.totalComments > userToCompare.user.totalComments
    }
  
  return (
    <div className="bg-white dark:bg-slate-900 px-6 flex" aria-hidden="true">
      <div className="w-full flex justify-between py-1 sm:py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
        <p className="sm:w-1/3 text-sm sm:text-base">Comentarios Creados</p>
          {!userToCompare && isGlobal &&
            <p className="w-1/3 text-end font-bold">
              {user.user.totalComments}
            </p>
          }
          {!userToCompare && !isGlobal &&
            <p className="w-1/3 text-end font-bold">
              {user.companyComments}
            </p>
          }
          {userToCompare && isGlobal &&
            <>
              <p className={`w-1/3 text-end ${userTotalIsBest ? "font-bold" : "font-light"}`}>
                {user.user.totalComments}
              </p>
              <p className={`w-1/3 text-end ${!userTotalIsBest ? "font-bold" : "font-light"}`}>
                {userToCompare.user.totalComments}
              </p>
            </>
          }
          {userToCompare && !isGlobal &&
            <>
              <p className={`w-1/3 text-end ${userCompanyIsBest ? "font-bold" : "font-light"}`}>
                {user.companyComments}
              </p>
              <p className={`w-1/3 text-end ${!userCompanyIsBest ? "font-bold" : "font-light"}`}>
                {userToCompare.companyComments}
              </p>
            </>
          }
      </div>
    </div>
  )
}

export default CommentsCreated
