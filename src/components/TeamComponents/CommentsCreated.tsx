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
    <div className="bg-white w-full px-6 flex" aria-hidden="true">
      <div className={`w-full flex ${userToCompare ? 'flex-col sm:flex-row' : ''} justify-between py-1 sm:py-2 text-slate-600 border-b border-slate-200`}>
        <p className={`sm:w-1/3 text-sm sm:text-base ${userToCompare ? 'text-center pt-1 sm:text-left sm:pt-0' : ''}`}>Comentarios Creados</p>
        <div className="w-full flex justify-around">
          {!userToCompare && isGlobal &&
            <p className="w-full text-center font-bold">
              {user.user.totalComments}
            </p>
          }
          {!userToCompare && !isGlobal &&
            <p className="w-full text-center font-bold">
              {user.companyComments}
            </p>
          }
          {userToCompare && isGlobal &&
            <>
              <p className={`w-full text-center ${userTotalIsBest ? "font-bold" : "font-light"}`}>
                {user.user.totalComments}
              </p>
              <p className={`w-full text-center ${!userTotalIsBest ? "font-bold" : "font-light"}`}>
                {userToCompare.user.totalComments}
              </p>
            </>
          }
          {userToCompare && !isGlobal &&
            <>
              <p className={`w-full text-center ${userCompanyIsBest ? "font-bold" : "font-light"}`}>
                {user.companyComments}
              </p>
              <p className={`w-full text-center ${!userCompanyIsBest ? "font-bold" : "font-light"}`}>
                {userToCompare.companyComments}
              </p>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default CommentsCreated
