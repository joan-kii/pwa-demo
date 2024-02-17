import { Teammate, Manager } from '../../utils/types'

function InterventionsCreated({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
    let userCompanyIsBest = true
    let userTotalIsBest = true
  
    if (userToCompare) {
      userCompanyIsBest = user.companyInterventions > userToCompare.companyInterventions
      userTotalIsBest = user.user.totalInterventions > userToCompare.user.totalInterventions
    }
  
  return (
    <div className="bg-white dark:bg-slate-900 px-6 flex max-md:hidden" aria-hidden="true">
      <div className="w-full flex justify-between py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
        <p className="w-1/3">Intervenciones Creadas</p>
          {!userToCompare && isGlobal &&
            <p className="w-1/3 text-end font-bold">
              {user.user.totalInterventions}
            </p>
          }
          {!userToCompare && !isGlobal &&
            <p className="w-1/3 text-end font-bold">
              {user.companyInterventions}
            </p>
          }
          {userToCompare && isGlobal &&
            <>
              <p className={`w-1/3 text-end ${userTotalIsBest ? "font-bold" : "font-light"}`}>
                {user.user.totalInterventions}
              </p>
              <p className={`w-1/3 text-end ${!userTotalIsBest ? "font-bold" : "font-light"}`}>
                {userToCompare.user.totalInterventions}
              </p>
            </>
          }
          {userToCompare && !isGlobal &&
            <>
              <p className={`w-1/3 text-end ${userCompanyIsBest ? "font-bold" : "font-light"}`}>
                {user.companyInterventions}
              </p>
              <p className={`w-1/3 text-end ${!userCompanyIsBest ? "font-bold" : "font-light"}`}>
                {userToCompare.companyInterventions}
              </p>
            </>
          }
      </div>
    </div>
  )
}

export default InterventionsCreated
