import { Teammate, Manager } from '../../utils/types'

function GeneralStartDate({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
  
  return (
    <div className="bg-white w-full px-6 flex" aria-hidden="true">
      <div className={`w-full flex ${userToCompare ? 'flex-col sm:flex-row' : ''} justify-between py-1 sm:py-2 text-slate-600 border-b border-slate-200`}>
        <p className={`sm:w-1/3 text-sm sm:text-base ${userToCompare ? 'text-center pt-1 sm:text-left sm:pt-0' : ''}`}>Fecha de inicio</p>
        <div className="w-full flex justify-around">
          {!userToCompare && isGlobal &&
            <p className="w-full text-center font-bold text-sm sm:text-base">
              {user.user.startDate}
            </p>
          }
          {!userToCompare && !isGlobal &&
            <p className="w-full text-center font-bold text-sm sm:text-base">
              {user.companyStartDate}
            </p>
          }
          {userToCompare && isGlobal &&
            <>
              <p className="w-full text-center font-bold text-sm sm:text-base">
                {user.user.startDate}
              </p>
              <p className="w-full text-center font-bold text-sm sm:text-base">
                {userToCompare.user.startDate}
              </p>
            </>
          }
          {userToCompare && !isGlobal &&
            <>
              <p className="w-full text-center font-bold text-sm sm:text-base">
                {user.companyStartDate}
              </p>
              <p className="w-full text-center font-bold text-sm sm:text-base">
                {userToCompare.companyStartDate}
              </p>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default GeneralStartDate
