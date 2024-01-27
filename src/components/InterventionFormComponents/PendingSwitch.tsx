import { useState } from 'react'

import BulbSuggestion from './BulbSuggestion'

function PendingSwitch() {
  const [isPending, setIsPending] = useState<boolean>(true)

  return (
    <div className="mt-6 pt-8 flex items-center border-t-2 border-gray-300">
      <div className="flex grow justify-center">
        <label className="relative flex items-center cursor-pointer">
          <input type="checkbox" onChange={() => setIsPending(!isPending)} className="sr-only peer" />
          <div className="w-11 h-6 bg-red-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
          <span className="ml-2 w-24 mx-auto text-sm font-medium text-gray-900 dark:text-gray-300">{isPending ? 'Pendiente' : 'Terminado'}</span>
        </label>
      </div>
      <div className="mr-1">
        <BulbSuggestion isSuggesting={false} text="Es importante comunicar en que estado se encuentra la intervención." />
      </div>
    </div>
  )
}

export default PendingSwitch
