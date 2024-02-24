import { Teammate, Manager } from '../../utils/types'

function CommentsApproveReceived({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
    let userCompanyIsBest = true
    let userTotalIsBest = true
  
    if (userToCompare) {
      userCompanyIsBest = user.companyCommentsApproveReceived > userToCompare.companyCommentsApproveReceived
      userTotalIsBest = user.user.totalCommentApproveReceived > userToCompare.user.totalCommentApproveReceived
    }
  
  return (
    <div className="bg-white w-full px-6 flex" aria-hidden="true">
      <div className={`w-full flex ${userToCompare ? 'flex-col sm:flex-row' : ''} justify-between py-1 sm:py-2 text-slate-600 border-b border-slate-200`}>
        <p className={`sm:w-1/3 text-sm sm:text-base ${userToCompare ? 'text-center pt-1 sm:text-left sm:pt-0' : ''}`}>Aprobaciones Recibidas</p>
        <div className="w-full flex justify-around">
          {!userToCompare && isGlobal &&
            <p className="w-full text-center font-bold">
              {user.user.totalCommentApproveReceived}
            </p>
          }
          {!userToCompare && !isGlobal &&
            <p className="w-full text-center font-bold">
              {user.companyCommentsApproveReceived}
            </p>
          }
          {userToCompare && isGlobal &&
            <>
              <p className={`w-full text-center ${userTotalIsBest ? "font-bold" : "font-light"}`}>
                {user.user.totalCommentApproveReceived}
              </p>
              <p className={`w-full text-center ${!userTotalIsBest ? "font-bold" : "font-light"}`}>
                {userToCompare.user.totalCommentApproveReceived}
              </p>
            </>
          }
          {userToCompare && !isGlobal &&
            <>
              <p className={`w-full text-center ${userCompanyIsBest ? "font-bold" : "font-light"}`}>
                {user.companyCommentsApproveReceived}
              </p>
              <p className={`w-full text-center ${!userCompanyIsBest ? "font-bold" : "font-light"}`}>
                {userToCompare.companyCommentsApproveReceived}
              </p>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default CommentsApproveReceived
