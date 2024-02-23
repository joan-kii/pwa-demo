import SwitchInput from '../UtilsComponents/SwitchInput'
import BackButton from '../UtilsComponents/BackButton'
import { Teammate, Manager } from '../../utils/types'

function ProfileHeader({ setUser, isGlobal, setIsGlobal }:
  {
    setUser: React.Dispatch<React.SetStateAction<Teammate | Manager | null>>,
    isGlobal: boolean,
    setIsGlobal: React.Dispatch<React.SetStateAction<boolean>>
  }) {
  return (
    <div className="relative bg-white dark:bg-slate-900 px-2 sm:px-6 pt-2 sm:pt-6 flex flex-col justify-end rounded-t-lg">
      <div className="pb-2 flex justify-around sm:justify-between md:border-b border-slate-200 dark:border-slate-700">
        <BackButton setUser={setUser} />
        <SwitchInput
          option1="Tu empresa actual"
          option2="Fixloud Global"
          state={isGlobal}
          setState={setIsGlobal}
        />
      </div>
    </div>
  )
}

export default ProfileHeader
