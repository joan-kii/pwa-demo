import { Teammate, Manager } from '../../utils/types'

function GeneralAntiquity({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
  
  return (
    <div className="bg-white dark:bg-slate-900 px-6 flex" aria-hidden="true">
      <div className="w-full flex justify-between py-1 sm:py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
        <p className="sm:w-1/3 text-sm sm:text-base">Antigüedad</p>
          {!userToCompare && isGlobal &&
            <p className="w-1/3 text-end font-bold text-sm sm:text-base">
              {user.user.antiquity}
            </p>
          }
          {!userToCompare && !isGlobal &&
            <p className="w-1/3 text-end font-bold text-sm sm:text-base">
              {user.companyAntiquity}
            </p>
          }
          {userToCompare && isGlobal &&
            <>
              <p className="w-1/3 text-end font-bold text-sm sm:text-base">
                {user.user.antiquity}
              </p>
              <p className="w-1/3 text-end font-bold text-sm sm:text-base">
                {userToCompare.user.antiquity}
              </p>
            </>
          }
          {userToCompare && !isGlobal &&
            <>
              <p className="w-1/3 text-end font-bold text-sm sm:text-base">
                {user.companyAntiquity}
              </p>
              <p className="w-1/3 text-end font-bold text-sm sm:text-base">
                {userToCompare.companyAntiquity}
              </p>
            </>
          }
      </div>
    </div>
  )
}

export default GeneralAntiquity
