import { Teammate, Manager } from '../../utils/types'

function InterventionsApproveReceived({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
  let userCompanyIsBest = true
  let userTotalIsBest = true

  if (userToCompare) {
    userCompanyIsBest = user.companyInterventionsApproveReceived > userToCompare.companyInterventionsApproveReceived
    userTotalIsBest = user.user.totalInterventionApproveReceived > userToCompare.user.totalInterventionApproveReceived
  }
  
  return (
    <div className="bg-white dark:bg-slate-900 px-6 flex max-md:hidden" aria-hidden="true">
      <div className="w-full flex justify-between py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
        <p className="w-1/3">Aprobaciones Recibidas</p>
        {!userToCompare && isGlobal &&
          <p className="w-1/3 text-end font-bold">
            {user.user.totalInterventionApproveReceived}
          </p>
        }
        {!userToCompare && !isGlobal &&
          <p className="w-1/3 text-end font-bold">
            {user.companyInterventionsApproveReceived}
          </p>
        }
        {userToCompare && isGlobal &&
          <>
            <p className={`w-1/3 text-end ${userTotalIsBest ? "font-bold" : "font-light"}`}>
              {user.user.totalInterventionApproveReceived}
            </p>
            <p className={`w-1/3 text-end ${!userTotalIsBest ? "font-bold" : "font-light"}`}>
              {userToCompare.user.totalInterventionApproveReceived}
            </p>
          </>
        }
        {userToCompare && !isGlobal &&
          <>
            <p className={`w-1/3 text-end ${userCompanyIsBest ? "font-bold" : "font-light"}`}>
              {user.companyInterventionsApproveReceived}
            </p>
            <p className={`w-1/3 text-end ${!userCompanyIsBest ? "font-bold" : "font-light"}`}>
              {userToCompare.companyInterventionsApproveReceived}
            </p>
          </>
        }
      </div>
    </div>
  )
}

export default InterventionsApproveReceived