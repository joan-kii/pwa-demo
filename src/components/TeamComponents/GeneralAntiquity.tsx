import { Teammate, Manager } from '../../utils/types'

function GeneralAntiquity({ user, userToCompare, isGlobal }:
  { user: Teammate | Manager, userToCompare: Teammate | Manager | null, isGlobal: boolean}) {
  
  return (
    <div className="bg-white w-full px-6 flex" aria-hidden="true">
      <div className={`w-full flex ${userToCompare ? 'flex-col sm:flex-row' : ''} justify-between py-1 sm:py-2 text-slate-600 border-b border-slate-200`}>
        <p className={`sm:w-1/3 text-sm sm:text-base ${userToCompare ? 'text-center pt-1 sm:text-left sm:pt-0' : ''}`}>Antigüedad</p>
        <div className="w-full flex justify-around">
          {!userToCompare && isGlobal &&
            <p className="w-full text-center font-bold text-sm sm:text-base">
              {user.user.antiquity}
            </p>
          }
          {!userToCompare && !isGlobal &&
            <p className="w-full text-center font-bold text-sm sm:text-base">
              {user.companyAntiquity}
            </p>
          }
          {userToCompare && isGlobal &&
            <>
              <p className="w-full text-center font-bold text-sm sm:text-base">
                {user.user.antiquity}
              </p>
              <p className="w-full text-center font-bold text-sm sm:text-base">
                {userToCompare.user.antiquity}
              </p>
            </>
          }
          {userToCompare && !isGlobal &&
            <>
              <p className="w-full text-center font-bold text-sm sm:text-base">
                {user.companyAntiquity}
              </p>
              <p className="w-full text-center font-bold text-sm sm:text-base">
                {userToCompare.companyAntiquity}
              </p>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default GeneralAntiquity
